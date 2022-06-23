import { BaseUserEntity } from '@libs/database/entity';
import { Controller, Get, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
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

  @MessagePattern('helloAuth')
  async helloAuth(): Promise<string> {
    return await this.authService.getHello();
  }
}
