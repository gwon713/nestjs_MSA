import { CustomRpcException } from '@libs/common/exception';
import { RegisterBaseUserInput } from '@libs/common/input';
import { BaseUserOutput, Output } from '@libs/common/model';
import { Controller, HttpException, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UserService } from './user.service';

@Controller()
export class UserController {
  private readonly logger: Logger;

  constructor(private readonly userService: UserService) {
    this.logger = new Logger();
  }

  @MessagePattern({ cmd: 'healthCheck' })
  async helloAuth(): Promise<string> {
    try {
      return await this.userService.healthCheck();
    } catch (error) {
      this.logger.error(error);
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new HttpException(error, 7829);
    }
  }

  @MessagePattern({ cmd: 'registerBaseUser' })
  async registerBaseUser(input: RegisterBaseUserInput): Promise<Output> {
    try {
      return await this.userService.registerBaseUser(input);
    } catch (error) {
      this.logger.error(error);
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new HttpException(error, 7829);
    }
  }

  @MessagePattern({ cmd: 'fetchMyProfile' })
  async fetchMyProfile(input: RegisterBaseUserInput): Promise<BaseUserOutput> {
    try {
      return await this.userService.fetchMyProfile();
    } catch (error) {
      this.logger.error(error);
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new HttpException(error, 7829);
    }
  }
}
