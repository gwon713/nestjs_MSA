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
});
