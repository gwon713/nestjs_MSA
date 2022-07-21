import { registerEnumType } from '@nestjs/graphql';

export enum CustomStatusCode {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

registerEnumType(CustomStatusCode, {
  name: 'CustomStatusCode',
});
