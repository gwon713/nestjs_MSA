import { CommonModule } from '@libs/common';
import { StrategyModule } from '@libs/common/strategy/strategy.module';
import { DatabaseModule } from '@libs/database';
import { BaseUserRepository } from '@libs/database/repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    CommonModule,
    DatabaseModule,
    StrategyModule,
    TypeOrmModule.forFeature([BaseUserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
