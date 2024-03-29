import { CommonModule } from '@libs/common';
import { CustomTypeOrmModule, DatabaseModule } from '@libs/database';
import { BaseUserRepository } from '@libs/database/repository';
import { Module } from '@nestjs/common';
import { StrategyModule } from 'apps/gateway/src/strategy';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    CommonModule,
    DatabaseModule,
    StrategyModule,
    CustomTypeOrmModule.forFeature([BaseUserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
