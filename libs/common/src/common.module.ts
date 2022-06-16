import { Global, Module } from '@nestjs/common';
import { CustomConfigModule } from './config/config.module';
import { UtilModule } from './util/util.module';

@Global()
@Module({
  imports: [CustomConfigModule, UtilModule],
  exports: [CustomConfigModule, UtilModule],
})
export class CommonModule {}
