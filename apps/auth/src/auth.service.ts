import { CustomConfigService } from '@libs/common/config/config.service';
import {
  CustomStatusCode,
  UserServiceType,
  UserSocialRouteType,
  UserStatusType,
} from '@libs/common/constant';
import { AuthenticateInput, RegisterUserInput } from '@libs/common/input';
import { JwtPayload } from '@libs/common/interface';
import { AuthenticateOutput, Authentication, Output } from '@libs/common/model';
import { BaseUserEntity } from '@libs/database/entity';
import { BaseUserRepository } from '@libs/database/repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RpcException } from '@nestjs/microservices';
import * as dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: CustomConfigService,
    private jwtService: JwtService,
    private readonly baseUserRepo: BaseUserRepository,
  ) {}
  async getHello(): Promise<string> {
    // return 'Hello World!';v
    throw new RpcException('getHello');
  }

  async authenticate(input: AuthenticateInput): Promise<AuthenticateOutput> {
    const user: BaseUserEntity = await this.baseUserRepo.findOne({
      where: {
        email: input.email,
      },
    });

    if (!user) {
      throw new Error('USER NOT FOUND');
    }

    if (user.password != input.password) {
      throw new Error('PASSWORD INCORRECT');
    }
    /**
     * @TODO add service check
     */
    const serviceCheck: UserServiceType[] = [
      UserServiceType.SERVICE1,
      UserServiceType.SERVICE2,
    ];

    const now = dayjs();
    const exp = now.add(
      this.configService.accessTokenExprieTimeValue,
      this.configService.accessTokenExpireTimeUnit,
    );

    await this.baseUserRepo.update(
      { id: user.id },
      {
        lastLoginAt: now.toDate(),
        lastLogoutAt: exp.toDate(),
      },
    );

    return {
      data: {
        accessToken: await this.createAccessToken(
          user.email,
          user.social,
          serviceCheck,
          now,
          exp,
        ),
        refreshToken: await this.createRefreshToken(
          user.email,
          user.social,
          serviceCheck,
          now,
        ),
        tokenType: 'Bearer',
        expiration: exp.unix(),
      } as Authentication,
    } as AuthenticateOutput;
  }

  async registerUser(input: RegisterUserInput): Promise<Output> {
    const user: BaseUserEntity = await this.baseUserRepo.findOne({
      where: {
        email: input.email,
      },
    });

    if (user) {
      throw new Error();
    }

    /**
     * encrypt password
     */
    await this.baseUserRepo.save(
      this.baseUserRepo.create({
        email: input.email,
        nickName: input.nickName,
        password: input.password,
        social: input.social,
        state: UserStatusType.REGISTERED,
      }),
    );

    return {
      statusCode: CustomStatusCode.SUCCESS,
      message: 'registerUser Complete',
    };
  }

  async createAccessToken(
    aud: string,
    route: UserSocialRouteType,
    scopes: UserServiceType[],
    now: dayjs.Dayjs,
    exp: dayjs.Dayjs,
  ): Promise<string> {
    const payload = {
      iss: '',
      sub: 'access-token',
      aud: aud,
      iat: now.unix(),
      exp: exp.unix(),
      route: route,
      scopes: scopes,
    } as JwtPayload;
    return await this.jwtService.signAsync(payload);
  }

  async createRefreshToken(
    aud: string,
    route: UserSocialRouteType,
    scopes: UserServiceType[],
    now: dayjs.Dayjs,
  ): Promise<string> {
    const exp = now.add(
      this.configService.refreshTokenExprieTimeValue,
      this.configService.refreshTokenExpireTimeUnit,
    );
    const payload = {
      iss: '',
      sub: 'refresh-token',
      aud: aud,
      iat: now.unix(),
      exp: exp.unix(),
      route: route,
      scopes: scopes,
    } as JwtPayload;
    return await this.jwtService.signAsync(payload);
  }
}
