import { Module } from '@nestjs/common';
import { CustomConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({})],
  providers: [ConfigService, CustomConfigService],
})
export class CustomConfigModule {}
