import { CommonModule } from '@libs/common';
import { CustomConfigService } from '@libs/common/config/config.service';
import { Test, TestingModule } from '@nestjs/testing';

import { UserService } from './user.service';

describe('User APP UserService', () => {
  let userService: UserService;
  let configService: CustomConfigService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      providers: [UserService],
    }).compile();

    userService = app.get<UserService>(UserService);
  });
});
