import { CommonModule } from '@libs/common';
import { CustomConfigService } from '@libs/common/config/config.service';
import { UserServiceType, UserSocialRouteType } from '@libs/common/constant';
import { StrategyModule } from '@libs/common/strategy';
import { Test, TestingModule } from '@nestjs/testing';
import * as dayjs from 'dayjs';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('Auth APP AuthService', () => {
  let authService: AuthService;
  let configService: CustomConfigService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommonModule, StrategyModule, AuthController],
      providers: [AuthService],
    }).compile();

    authService = app.get<AuthService>(AuthService);
  });

  describe('JWT Test', () => {
    it('createAccessToken', () => {
      const now = dayjs();
      const exp = now.add(
        configService.accessTokenExprieTimeValue,
        configService.accessTokenExpireTimeUnit,
      );
      expect(
        authService.createAccessToken(
          'test@email.com',
          UserSocialRouteType.LOCAL,
          [UserServiceType.SERVICE1],
          now,
          exp,
        ),
      ).toBeDefined();
    });
  });
});
