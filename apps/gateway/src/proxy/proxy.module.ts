import { Module } from '@nestjs/common';

import { AuthProxyModule } from './auth/auth.proxy.module';
import { UserProxyModule } from './user/user.proxy.module';

@Module({
  imports: [AuthProxyModule, UserProxyModule],
})
export class ProxyModule {}
