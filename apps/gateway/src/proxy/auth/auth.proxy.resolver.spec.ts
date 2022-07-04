import { Test, TestingModule } from '@nestjs/testing';

import { AuthProxyResolver } from './auth.proxy.resolver';

describe('AuthResolver', () => {
  let resolver: AuthProxyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthProxyResolver],
    }).compile();

    resolver = module.get<AuthProxyResolver>(AuthProxyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
