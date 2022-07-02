export declare interface JwtPayload {
  iss: string;
  sub: string;
  iat: number;
  exp: number;
  aud: string;
  route?: UserSocialRouteType;
  scopes?: [UserServiceType];
}
