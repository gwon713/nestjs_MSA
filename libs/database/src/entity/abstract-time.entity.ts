import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

/**
 * @abstract AbstractTimeEntity
 */
export abstract class AbstractTimeEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  deletedAt?: Date | null;
}
