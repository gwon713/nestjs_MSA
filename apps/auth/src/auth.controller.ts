import { AllExceptionsFilter } from '@libs/common/filter';
import { BaseUserEntity } from '@libs/database/entity';
import { Controller, Get, Post, UseFilters } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.authService.getHello();
  }

  @Post('/user')
  async registerUser(): Promise<BaseUserEntity> {
    return await this.authService.registerUser();
  }

  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'helloAuth' })
  async helloAuth(): Promise<string> {
    try {
      return await this.authService.getHello();
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
