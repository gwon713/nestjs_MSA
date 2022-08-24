import { Module } from '@nestjs/common';

import { UserProxyResolver } from './user.proxy.resolver';
import { UserProxyService } from './user.proxy.service';

@Module({
  providers: [UserProxyResolver, UserProxyService],
})
export class UserProxyModule {}
