import { CustomConfigService } from '@libs/common/config/config.service';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (config: CustomConfigService) => ({
        secret: config.jwtSecret,
      }),
      inject: [CustomConfigService],
    }),
  ],
  providers: [JwtService],
  exports: [JwtService],
})
export class StrategyModule {}
