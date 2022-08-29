import { CustomRpcException } from '@libs/common/exception';
import { AuthenticateInput } from '@libs/common/input';
import { AuthenticateOutput } from '@libs/common/model';
import { Controller, HttpException } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'healthCheck' })
  async helloAuth(): Promise<string> {
    try {
      return await this.authService.healthCheck();
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
}
