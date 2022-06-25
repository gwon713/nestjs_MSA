import { UtilService } from '@libs/common/util/util.service';
import { Controller, Get } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller()
export class GatewayController {
  constructor(
    private readonly gatewayService: GatewayService,
    private readonly utilService: UtilService,
  ) {}

  @Get()
  getHello(): string {
    return this.gatewayService.getHello();
  }

  @Get('/auth')
  async getAuth(): Promise<string> {
    return await this.gatewayService.getAuth();
  }
}
