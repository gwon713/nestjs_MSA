import { Test, TestingModule } from '@nestjs/testing';

import { UserProxyResolver } from './user.proxy.resolver';

describe('UserProxyResolver', () => {
  let resolver: UserProxyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProxyResolver],
    }).compile();

    resolver = module.get<UserProxyResolver>(UserProxyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
