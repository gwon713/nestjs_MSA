import { CustomConfigService } from '@libs/common/config/config.service';
import { Environment } from '@libs/common/constant';
import { TransformInterceptor } from '@libs/common/interceptor';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { GatewayModule } from './gateway.module';
import { setupSwagger } from './util';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(GatewayModule);

  const config: CustomConfigService =
    app.get<CustomConfigService>(CustomConfigService);

  app.useGlobalInterceptors(new TransformInterceptor());

  if (config.nodeEnv !== Environment.PRODUCTION) {
    setupSwagger(app);
  }

  const logger: Logger = new Logger('Gateway');
  logger.log(
    `GATEWAY APP is running on [${
      config.nodeEnv ? config.nodeEnv : 'DEFAULT'
    }] port 3000`,
  );
  await app.listen(3000);
}
bootstrap();
