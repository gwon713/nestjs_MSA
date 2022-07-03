import { registerEnumType } from '@nestjs/graphql';

/**
 * @enum
 * @see UserSocialRouteType
 */
export enum UserSocialRouteType {
  LOCAL = 'LOCAL',
  KAKAO = 'KAKAO',
  GOOGLE = 'GOOGLE',
  GITHUB = 'GITHUB',
}

registerEnumType(UserSocialRouteType, {
  name: 'UserSocialRouteType',
});
