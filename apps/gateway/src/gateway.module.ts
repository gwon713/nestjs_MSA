import { CommonModule } from '@libs/common';
import { Module } from '@nestjs/common';
import { GatewayController } from './gateway.controller';
import { GatewayService } from './gateway.service';

@Module({
  imports: [CommonModule],
  controllers: [GatewayController],
  providers: [GatewayService],
})
export class GatewayModule {}
