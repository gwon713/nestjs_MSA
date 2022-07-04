import { CustomConfigService } from '@libs/common/config/config.service';
import { AppName } from '@libs/common/constant/app-name';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const config: CustomConfigService =
    app.get<CustomConfigService>(CustomConfigService);

  const logger: Logger = new Logger('Auth');
  logger.log(
    `AUTH Microservices is running on [${
      config.nodeEnv ? config.nodeEnv : 'DEFAULT'
    }] `,
  );

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
}
bootstrap();
