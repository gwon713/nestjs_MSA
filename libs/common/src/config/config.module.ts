import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { Environment } from '../constant';
import { CustomConfigService } from './config.service';

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
