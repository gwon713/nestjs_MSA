import { BaseUserEntity } from '@libs/database/entity';
import {
  InputType,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/graphql';

import { AbstractInput } from './abstract.input';

/**
 *
 */
@InputType({ description: 'RegisterBaseUserInput' })
export class RegisterBaseUserInput extends IntersectionType(
  AbstractInput,
  PartialType(
    PickType(BaseUserEntity, [
      'email',
      'password',
      'nickName',
      'social',
    ] as const),
  ),
) {}
