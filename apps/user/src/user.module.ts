import { CommonModule } from '@libs/common';
import { CustomTypeOrmModule, DatabaseModule } from '@libs/database';
import { BaseUserRepository } from '@libs/database/repository';
import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    CommonModule,
    DatabaseModule,
    CustomTypeOrmModule.forFeature([BaseUserRepository]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
