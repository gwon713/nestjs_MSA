import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomConfigService } from './config.service';

describe('ConfigService', () => {
  let service: CustomConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({})],
      providers: [ConfigService, CustomConfigService],
    }).compile();

    service = module.get<CustomConfigService>(CustomConfigService);
  });

  it('config service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('config 설정된 리스트', () => {
    console.log(Object.getOwnPropertyNames(CustomConfigService.prototype));
  });

  test(`loglevel 가져오기`, () => {
    console.log(service.logLevel);
    expect(service.logLevel).toBeDefined();
  });
});
