import { CommonModule } from '@libs/common';
import { AppName } from '@libs/common/constant/app-name';
import { DatabaseModule } from '@libs/database';
import { BaseUserRepository } from '@libs/database/repository';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    CommonModule,
    DatabaseModule,
    TypeOrmModule.forFeature([BaseUserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
