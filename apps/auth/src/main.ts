import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { CustomConfigService } from '@libs/common/config/config.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Environment } from '@libs/common/constant';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);

  const config: CustomConfigService =
    app.get<CustomConfigService>(CustomConfigService);

  const logger: Logger = new Logger('auth');
  logger.log(`APP auth is running on [${config.nodeEnv}]`);

  await app.listen(3000);
}
bootstrap();
