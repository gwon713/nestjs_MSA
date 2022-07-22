import { CustomRpcException } from '@libs/common/exception';
import { AuthenticateInput, RegisterUserInput } from '@libs/common/input';
import { AuthenticateOutput, Output } from '@libs/common/model';
import { Controller, HttpException } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'helloAuth' })
  async helloAuth(): Promise<string> {
    try {
      return await this.authService.getHello();
    } catch (error) {
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new HttpException(error, 7829);
    }
  }

  @MessagePattern({ cmd: 'authenticate' })
  async authenticate(input: AuthenticateInput): Promise<AuthenticateOutput> {
    try {
      return await this.authService.authenticate(input);
    } catch (error) {
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new HttpException(error, 7829);
    }
  }

  @MessagePattern({ cmd: 'registerUser' })
  async registerUser(input: RegisterUserInput): Promise<Output> {
    try {
      return await this.authService.registerUser(input);
    } catch (error) {
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new HttpException(error, 7829);
    }
  }
}
