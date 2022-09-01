import { BaseUserEntity } from '@libs/database/entity';
import { ObjectType } from '@nestjs/graphql';

import { One } from './output.model';

@ObjectType()
export class BaseUserOutput extends One(BaseUserEntity) {}
