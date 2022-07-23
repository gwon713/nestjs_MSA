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
  description: '서비스 종류',
  valuesMap: {
    SERVICE1: { description: '서비스1' },
    SERVICE2: { description: '서비스2' },
  },
});
