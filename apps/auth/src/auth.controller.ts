import { CustomRpcException } from '@libs/common/exception';
import { AuthenticateInput } from '@libs/common/input';
import { AuthenticateOutput } from '@libs/common/model';
import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  private readonly logger: Logger;

  constructor(private readonly authService: AuthService) {
    this.logger = new Logger();
  }

  @MessagePattern({ cmd: 'healthCheck' })
  async helloAuth(): Promise<string> {
    try {
      return await this.authService.healthCheck();
    } catch (error) {
      this.logger.error(error);
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new RpcException(error);
    }
  }

  @MessagePattern({ cmd: 'authenticate' })
  async authenticate(input: AuthenticateInput): Promise<AuthenticateOutput> {
    try {
      return await this.authService.authenticate(input);
    } catch (error) {
      this.logger.error(error);
      if (error instanceof CustomRpcException) {
        throw CustomRpcException.processException(error);
      }
      throw new RpcException(error);
    }
  }
}
