import { Field, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
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
@ObjectType()
export abstract class AbstractEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: 'Primary Key',
  })
  @IsNotEmpty()
  @IsUUID(4)
  @Field(() => String, {
    name: 'id',
    nullable: false,
    description: 'uuid',
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
  deletedAt?: Date;
}
