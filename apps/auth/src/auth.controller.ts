import { AllExceptionsFilter } from '@libs/common/filter';
import { BaseUserEntity } from '@libs/database/entity';
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
}
