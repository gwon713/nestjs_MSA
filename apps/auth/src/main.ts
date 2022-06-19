import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { CustomConfigService } from '@libs/common/config/config.service';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AppName } from '@libs/common/constant/app-name';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const config: CustomConfigService =
    app.get<CustomConfigService>(CustomConfigService);

  const logger: Logger = new Logger('auth');
  logger.log(`APP auth is running on [${config.nodeEnv}]`);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [
        `${config.rmqProto}://${config.rmqUser}:${config.rmqPass}@${config.rmqHost}:${config.rmqPort}`,
      ],
      queue: AppName.AUTH,
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.startAllMicroservices();
}
bootstrap();
