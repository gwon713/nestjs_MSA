import { CustomConfigService } from '@libs/common/config/config.service';
import { CustomStatusCode, UserStatusType } from '@libs/common/constant';
import { CustomRpcException } from '@libs/common/exception';
import { RegisterBaseUserInput } from '@libs/common/input';
import { Output } from '@libs/common/model';
import { BaseUserEntity } from '@libs/database/entity';
import { BaseUserRepository } from '@libs/database/repository';
import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: CustomConfigService,
    private readonly baseUserRepo: BaseUserRepository,
  ) {}
  async healthCheck(): Promise<string> {
    return 'healthy';
  }

  async registerBaseUser(input: RegisterBaseUserInput): Promise<Output> {
    const user: BaseUserEntity = await this.baseUserRepo.findOne({
      where: {
        email: input.email,
      },
    });

    if (user) {
      throw new CustomRpcException(
        CustomStatusCode.DUPLICATE_EMAIL,
        `{ email: ${user.email} }`,
      );
    }

    /**
     * encrypt password
     */
    await this.baseUserRepo.save(
      this.baseUserRepo.create({
        email: input.email,
        nickName: input.nickName,
        password: await argon2.hash(input.password),
        social: input.social,
        state: UserStatusType.REGISTERED,
      }),
    );

    return {
      statusCode: CustomStatusCode.SUCCESS,
    };
  }
}
