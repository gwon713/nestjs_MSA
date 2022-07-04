import { Test, TestingModule } from '@nestjs/testing';

import { AuthProxyService } from './auth.proxy.service';

describe('AuthService', () => {
  let service: AuthProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthProxyService],
    }).compile();

    service = module.get<AuthProxyService>(AuthProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
