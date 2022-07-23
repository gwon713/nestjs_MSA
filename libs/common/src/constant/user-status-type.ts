import { registerEnumType } from '@nestjs/graphql';

/**
 * @TODO GraphQL registerEnumType ADD
 * @enum
 * @see UserStatusType
 */
export enum UserStatusType {
  REGISTERED = 'REGISTERED',
  DELETE = 'DELETE',
}

registerEnumType(UserStatusType, {
  name: 'UserStatusType',
  description: '유저 상태',
  valuesMap: {
    REGISTERED: { description: '가입상태' },
    DELETE: { description: '탈퇴상태' },
  },
});
