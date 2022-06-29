import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

/**
 * @abstract AbstractEntity
 */
export abstract class AbstractEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: 'Primary Key',
  })
  id!: string;

  @Column({
    name: 'seq',
    type: 'int8',
    unique: true,
    comment: 'Sequence Index',
  })
  @Generated('increment')
  seq!: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    comment: 'created time',
    update: false,
    nullable: false,
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    comment: 'updated time',
    nullable: false,
  })
  updatedAt!: Date;

  @Column({
    name: 'deleted_at',
    type: 'timestamptz',
    comment: '생성일',
    update: false,
    nullable: true,
  })
  deletedAt?: Date | null;
}
