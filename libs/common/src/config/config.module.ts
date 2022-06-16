import { Module } from '@nestjs/common';
import { CustomConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Environment } from '../constant';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      ignoreEnvFile: false,
      envFilePath: [
        join(__dirname, '../../../env/', `${Environment.DEFAULT}.env`),
        join(__dirname, '../../../env/', `${Environment.DEVELOPMENT}.env`),
        join(__dirname, '../../../env/', `${Environment.PRODUCTION}.env`),
        join(__dirname, '../../../env/', `${Environment.TEST}.env`),
      ],
    }),
  ],
  providers: [CustomConfigService],
  exports: [CustomConfigService],
})
export class CustomConfigModule {}
