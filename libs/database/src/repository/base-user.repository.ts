import { Repository } from 'typeorm';

import { CustomRepository } from '../custom-repository.decorator';
import { BaseUserEntity } from '../entity';

@CustomRepository(BaseUserEntity)
export class BaseUserRepository extends Repository<BaseUserEntity> {}
