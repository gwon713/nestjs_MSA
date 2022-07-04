import { Module } from '@nestjs/common';

import { AuthProxyModule } from './auth/auth.proxy.module';

@Module({
  imports: [AuthProxyModule],
})
export class ProxyModule {}
