import { SetMetadata } from '@nestjs/common';
import { EntitySchema } from 'typeorm';

export const CUSTOM_TYPEORM_REPOSITORY = 'CUSTOM_TYPEORM_REPOSITORY';

export const CustomRepository = (
  entity: Function | EntitySchema<any>,
): ClassDecorator => {
  return SetMetadata(CUSTOM_TYPEORM_REPOSITORY, entity);
};
