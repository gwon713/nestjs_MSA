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
  description: '유저 소셜 타입',
  valuesMap: {
    LOCAL: { description: '로컬' },
    KAKAO: { description: '카카오' },
    GOOGLE: { description: '구글' },
    GITHUB: { description: '깃허브' },
  },
});
