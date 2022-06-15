import { Global, Module } from '@nestjs/common';
import { CustomConfigModule } from './config/config.module';

@Global()
@Module({
  imports: [CustomConfigModule],
})
export class CommonModule {}
