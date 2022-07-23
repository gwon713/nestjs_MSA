import { registerEnumType } from '@nestjs/graphql';

export enum CustomStatusCode {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  PASSWORD_INCORRECT = 'PASSWORD_INCORRECT',
}

registerEnumType(CustomStatusCode, {
  name: 'CustomStatusCode',
  description: '응답코드',
  valuesMap: {
    SUCCESS: { description: 'SUCCESS' },
    ERROR: { description: 'ERROR' },
    USER_NOT_FOUND: { description: 'USER_NOT_FOUND' },
    PASSWORD_INCORRECT: { description: 'PASSWORD_INCORRECT' },
  },
});
