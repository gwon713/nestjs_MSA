import { Repository } from 'typeorm';

import { CustomRepository } from '..';
import { BaseUserEntity } from '../entity';

@CustomRepository(BaseUserEntity)
export class BaseUserRepository extends Repository<BaseUserEntity> {}
