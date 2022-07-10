import { CustomConfigService } from '@libs/common/config/config.service';
import { JwtPayload } from '@libs/common/interface';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private configService: CustomConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.jwtSecret,
    });
  }

  async validate(payload: JwtPayload) {
    if (payload.aud == null) return undefined;
    return {
      aud: payload.aud,
      sub: payload.sub,
      route: payload?.route || '',
      scopes: payload?.scopes || '',
    };
  }
}
