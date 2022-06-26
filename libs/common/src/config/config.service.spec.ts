import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CustomConfigService } from './config.service';
import { join } from 'path';
import { Environment } from '../constant';

describe('ConfigService', () => {
  let service: CustomConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          cache: true,
          isGlobal: true,
          ignoreEnvFile: false,
          envFilePath: [
            join(__dirname, '../../../../env/', `${Environment.TEST}.env`),
          ],
        }),
      ],
      providers: [CustomConfigService],
    }).compile();

    service = module.get<CustomConfigService>(CustomConfigService);
  });

  it('config service should be defined', () => {
    expect(service).toBeDefined();
  });

  it('config 설정된 리스트', () => {
    console.log(Object.getOwnPropertyNames(CustomConfigService.prototype));
  });

  test(`node env 가져오기`, () => {
    console.log(service.nodeEnv);
    expect(service.nodeEnv).toBeDefined();
    expect(
      [
        Environment.DEFAULT,
        Environment.DEVELOPMENT,
        Environment.PRODUCTION,
        Environment.TEST,
      ].includes(service.nodeEnv),
    ).toBe(true);
  });

  test(`loglevel 가져오기`, () => {
    console.log(service.logLevel);
    expect(service.logLevel).toBeDefined();
    expect(
      ['log', 'error', 'warn', 'debug', 'verbose'].includes(service.logLevel),
    ).toBe(true);
  });

  test(`rootDir 가져오기`, () => {
    console.log(service.rootDir);
    expect(service.rootDir).toBeDefined();
  });

  test(`dbHost 가져오기`, () => {
    console.log(service.dbHost);
    expect(service.dbHost).toBeDefined();
  });

  test(`dbPort 가져오기`, () => {
    console.log(service.dbPort);
    expect(service.dbPort).toBeDefined();
  });

  test(`dbUsername 가져오기`, () => {
    console.log(service.dbUsername);
    expect(service.dbUsername).toBeDefined();
  });

  test(`dbPassword 가져오기`, () => {
    console.log(service.dbPassword);
    expect(service.dbPassword).toBeDefined();
  });

  test(`dbDatabase 가져오기`, () => {
    console.log(service.dbDatabase);
    expect(service.dbDatabase).toBeDefined();
  });

  test(`dbSchema 가져오기`, () => {
    console.log(service.dbSchema);
    expect(service.dbSchema).toBeDefined();
  });

  test(`dbSync 가져오기`, () => {
    console.log(service.dbSync);
    expect(service.dbSync).toBeDefined();
  });

  test(`dbDebug 가져오기`, () => {
    console.log(service.dbDebug);
    if (typeof service.dbDebug == 'string') {
      expect(
        [
          'all',
          'query',
          'schema',
          'error',
          'warn',
          'info',
          'log',
          'migration',
        ].includes(service.dbDebug),
      ).toBe(true);
    }
    expect(service.dbDebug).toBeDefined();
  });

  test(`rmqProto 가져오기`, () => {
    console.log(service.rmqProto);
    expect(service.rmqProto).toBeDefined();
  });

  test(`rmqHost 가져오기`, () => {
    console.log(service.rmqHost);
    expect(service.rmqHost).toBeDefined();
  });

  test(`rmqPort 가져오기`, () => {
    console.log(service.rmqPort);
    expect(service.rmqPort).toBeDefined();
  });

  test(`rmqUser 가져오기`, () => {
    console.log(service.rmqUser);
    expect(service.rmqUser).toBeDefined();
  });

  test(`rmqPass 가져오기`, () => {
    console.log(service.rmqPass);
    expect(service.rmqPass).toBeDefined();
  });

  test(`rmqUrl 가져오기`, () => {
    console.log(service.rmqUrl);
    expect(service.rmqUrl).toBeDefined();
  });
});
