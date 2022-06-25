import { CommonModule } from '@libs/common';
import { AUTH_FACTORY } from '@libs/common/factory';
import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  imports: [CommonModule],
  controllers: [GatewayController],
  providers: [GatewayService, AUTH_FACTORY],
})
export class GatewayModule {}
