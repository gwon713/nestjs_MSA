import { CustomConfigService } from '@libs/common/config/config.service';
import { Environment } from '@libs/common/constant';
import { TransformInterceptor } from '@libs/common/interceptor';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(GatewayModule);

  const config: CustomConfigService =
    app.get<CustomConfigService>(CustomConfigService);

  app.useGlobalInterceptors(new TransformInterceptor());

  if (config.nodeEnv !== Environment.PRODUCTION) {
    const config = new DocumentBuilder()
      .setTitle('Gateway')
      .setDescription('API')
      .setVersion('1.0.0')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  const logger: Logger = new Logger('auth');
  logger.log(`APP Gateway is running on [${config.nodeEnv}] 3000`);
  await app.listen(3000);
}
bootstrap();
