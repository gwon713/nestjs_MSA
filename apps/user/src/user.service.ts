import { CustomConfigService } from '@libs/common/config/config.service';
import { BaseUserRepository } from '@libs/database/repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private readonly configService: CustomConfigService,
    private readonly baseUserRepo: BaseUserRepository,
  ) {}
  async healthCheck(): Promise<string> {
    return 'healthy';
  }
}
