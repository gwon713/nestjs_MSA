import { BaseUserEntity } from '@libs/database/entity';
import {
  InputType,
  IntersectionType,
  PartialType,
  PickType,
} from '@nestjs/graphql';

import { AbstractInput } from './abstract.input';

@InputType({ description: 'AuthenticateInput' })
export class AuthenticateInput extends IntersectionType(
  AbstractInput,
  PartialType(
    PickType(BaseUserEntity, ['email', 'password', 'social'] as const),
  ),
) {}
