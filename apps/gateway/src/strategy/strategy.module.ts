import { CustomConfigService } from '@libs/common/config/config.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [CustomConfigService],
      useFactory: async (config: CustomConfigService) => ({
        secret: config.jwtSecret,
        signOptions: { expiresIn: '60s' },
      }),
      inject: [CustomConfigService],
    }),
  ],
  providers: [],
})
export class StrategyModule {}
