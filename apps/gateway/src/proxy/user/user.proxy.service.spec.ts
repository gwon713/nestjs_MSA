import { Test, TestingModule } from '@nestjs/testing';

import { UserProxyService } from './user.proxy.service';

describe('UserProxyService', () => {
  let service: UserProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProxyService],
    }).compile();

    service = module.get<UserProxyService>(UserProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
