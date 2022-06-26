import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import {
  ClientProxy,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CommonModule } from '@libs/common';
import { GatewayController } from '../apps/gateway/src/gateway.controller';
import { GatewayService } from '../apps/gateway/src/gateway.service';
import { AUTH_FACTORY } from '@libs/common/factory';
import { CustomConfigService } from '@libs/common/config/config.service';
import { AppName } from '@libs/common/constant/app-name';

describe('gateway-auth (e2e)', () => {
  let app: INestApplication;
  let client: ClientProxy;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      controllers: [GatewayController],
      providers: [GatewayService, AUTH_FACTORY],
    }).compile();

    const config = moduleFixture.get<CustomConfigService>(CustomConfigService);

    app = moduleFixture.createNestApplication();

    app.connectMicroservice<MicroserviceOptions>({
      transport: Transport.RMQ,
      options: {
        urls: [config.rmqUrl],
        queue: AppName.AUTH,
        queueOptions: {
          durable: false,
        },
      },
    });

    await app.startAllMicroservices();

    await app.init();

    client = app.get('AUTH_SERVICE');
    await client.connect();
  });

  // it('/auth (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/auth')
  //     .expect(200)
  //     .expect('Hello World!');
  // });

  it('/auth (GET)', () => {
    const res: Observable<string> = client.send<string, string>(
      { cmd: 'helloAuth' },
      'hello',
    );
    console.log(res);

    res.subscribe((string) => {
      expect(string).toBe('Hello World!');
    });
  });
});
