import { registerEnumType } from '@nestjs/graphql';

export enum statusCode {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

registerEnumType(statusCode, {
  name: 'statusCode',
});
