import { UserServiceType, UserSocialRouteType } from '../constant';

export interface JwtPayload {
  iss: string;
  sub: string;
  aud: string;
  exp: number;
  // nbf: number;
  iat: number;
  // jti: string;
  route?: UserSocialRouteType;
  scopes?: [UserServiceType];
}
