import { Repository } from 'typeorm';
import { BaseUserEntity } from '../entity';

export class BaseUserRepository extends Repository<BaseUserEntity> {}
