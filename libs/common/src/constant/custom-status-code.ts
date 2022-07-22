import { registerEnumType } from '@nestjs/graphql';

export enum CustomStatusCode {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  PASSWORD_INCORRECT = 'PASSWORD_INCORRECT',
}

registerEnumType(CustomStatusCode, {
  name: 'CustomStatusCode',
});
