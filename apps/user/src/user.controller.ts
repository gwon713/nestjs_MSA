import { CustomRpcException } from '@libs/common/exception';
import { Controller, HttpException } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'healthCheck' })
  async helloAuth(): Promise<string> {
    try {
      return await this.userService.healthCheck();
    } catch (error) {
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new HttpException(error, 7829);
    }
  }
}
