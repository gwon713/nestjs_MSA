import { registerEnumType } from '@nestjs/graphql';

/**
 * @enum
 * @see UserServiceType
 */
export enum UserServiceType {
  SERVICE1 = 'SERVICE1',
  SERVICE2 = 'SERVICE2',
}

registerEnumType(UserServiceType, {
  name: 'UserServiceType',
});
