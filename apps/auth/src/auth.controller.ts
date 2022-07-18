import { AuthenticateInput } from '@libs/common/input';
import { AuthenticateOutput } from '@libs/common/model';
import { Controller } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'helloAuth' })
  async helloAuth(): Promise<string> {
    try {
      return this.authService.getHello();
    } catch (error) {
      throw new RpcException(error);
    }
  }

  @MessagePattern({ cmd: 'authenticate' })
  async authenticate(input: AuthenticateInput): Promise<AuthenticateOutput> {
    try {
      return this.authService.authenticate(input);
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
