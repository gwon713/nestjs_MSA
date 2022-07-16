import { CommonModule } from '@libs/common';
import { UserServiceType, UserSocialRouteType } from '@libs/common/constant';
import { StrategyModule } from '@libs/common/strategy';
import { Test, TestingModule } from '@nestjs/testing';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('Auth APP AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommonModule, StrategyModule, AuthController],
      providers: [AuthService],
    }).compile();

    authService = app.get<AuthService>(AuthService);
  });

  describe('JWT Test', () => {
    it('createAccessToken', () => {
      expect(
        authService.createAccessToken(
          'test@email.com',
          UserSocialRouteType.LOCAL,
          [UserServiceType.SERVICE1],
          Date.now(),
        ),
      ).toBeDefined();
    });
  });
});
