import { CommonModule } from '@libs/common';
import { USER_FACTORY } from '@libs/common/factory';
import { Module } from '@nestjs/common';

import { UserProxyResolver } from './user.proxy.resolver';
import { UserProxyService } from './user.proxy.service';

@Module({
  imports: [CommonModule],
  providers: [UserProxyResolver, UserProxyService, USER_FACTORY],
})
export class UserProxyModule {}
