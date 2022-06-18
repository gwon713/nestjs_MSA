import { BaseUserEntity } from '@libs/database/entity';
import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post('/user')
  async registerUser(): Promise<BaseUserEntity> {
    return await this.authService.registerUser();
  }
}
