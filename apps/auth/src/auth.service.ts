import { UserSocialRouteType, UserStatusType } from '@libs/common/constant';
import { BaseUserEntity } from '@libs/database/entity';
import { BaseUserRepository } from '@libs/database/repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly baseUserRepo: BaseUserRepository) {}
  async getHello(): Promise<string> {
    return 'Hello World!';
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
}
