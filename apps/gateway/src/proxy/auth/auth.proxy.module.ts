import { CommonModule } from '@libs/common';
import { AUTH_FACTORY } from '@libs/common/factory';
import { Module } from '@nestjs/common';
import { AuthProxyResolver } from './auth.proxy.resolver';
import { AuthProxyService } from './auth.proxy.service';

@Module({
  imports: [CommonModule],
  providers: [AuthProxyResolver, AuthProxyService, AUTH_FACTORY],
})
export class AuthProxyModule {}
