import { DataSource, Repository } from 'typeorm';

import { BaseUserEntity } from '../entity';

export class AbstractRepository {
  private readonly repository: Repository<BaseUserEntity>;
  constructor(private readonly dataSource: DataSource) {
    this.repository = dataSource.getRepository(BaseUserEntity);
  }
}
