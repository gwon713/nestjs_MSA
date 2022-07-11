import {
  UserServiceType,
  UserSocialRouteType,
  UserStatusType,
} from '@libs/common/constant';
import { AuthenticateInput } from '@libs/common/input';
import { JwtPayload } from '@libs/common/interface';
import { AuthenticateOutput, Authentication } from '@libs/common/model';
import { BaseUserEntity } from '@libs/database/entity';
import { BaseUserRepository } from '@libs/database/repository';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly baseUserRepo: BaseUserRepository,
  ) {}
  async getHello(): Promise<string> {
    // return 'Hello World!';v
    throw new RpcException('getHello');
  }

  async authenticate(input: AuthenticateInput): Promise<AuthenticateOutput> {
    const user = await this.baseUserRepo.findOne({
      where: {
        email: input.email,
      },
    });

    /**
     * @TODO add service check
     */
    const serviceCheck: UserServiceType[] = [
      UserServiceType.SERVICE1,
      UserServiceType.SERVICE2,
    ];

    return {
      data: {
        accessToken: await this.createAccessToken(
          user.email,
          user.social,
          serviceCheck,
        ),
      } as Authentication,
    } as AuthenticateOutput;
  }

  async registerUser(): Promise<BaseUserEntity> {
    return await this.baseUserRepo.save(
      this.baseUserRepo.create({
        email: 'gwon713@gamil.com',
        nickName: 'gwon713',
        password: '1234',
        social: UserSocialRouteType.LOCAL,
        state: UserStatusType.REGISTERED,
      }),
    );
  }

  async createAccessToken(
    aud: string,
    route: UserSocialRouteType,
    scopes: UserServiceType[],
  ): Promise<string> {
    const now = Date.now();
    const exp = new Date(
      new Date(now).setHours(new Date(now).getDate() + 1),
    ).getTime(); // now + 86400000
    const payload = {
      iss: '',
      sub: 'access-token',
      aud: aud,
      iat: now,
      exp: exp,
      route: route,
      scopes: scopes,
    } as JwtPayload;
    return await this.jwtService.signAsync(payload);
  }
}
