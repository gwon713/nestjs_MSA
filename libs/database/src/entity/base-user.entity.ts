import { UserSocialRouteType, UserStatusType } from '@libs/common/constant';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractTimeEntity } from '.';

/**
 * @entity
 * @see BaseUserEntity
 * @extends AbstractTimeEntity
 */
@Entity('base_user')
export class BaseUserEntity extends AbstractTimeEntity {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
    comment: 'user id',
  })
  id: string;

  @Column({
    name: 'seq',
    type: 'int8',
    unique: true,
    comment: 'Sequence Index',
  })
  @Generated('increment')
  seq!: number;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 320,
    nullable: false,
    comment: 'user email',
  })
  email: string;

  @Column({
    name: 'nick_name',
    type: 'varchar',
    length: 50,
    nullable: false,
    comment: 'user nickname',
  })
  nickName!: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 255,
    nullable: false,
    comment: 'user password',
  })
  password!: string;

  @Column({
    name: 'social',
    type: 'varchar',
    length: 255,
    nullable: false,
    default: UserSocialRouteType.LOCAL,
    comment: 'user social route',
  })
  social!: UserSocialRouteType;

  @Column({
    name: 'state',
    type: 'varchar',
    length: 255,
    nullable: false,
    default: UserStatusType.REGISTERED,
    comment: 'user status type',
  })
  state!: UserStatusType;

  @Column({
    name: 'last_login_at',
    type: 'timestamptz',
    nullable: true,
    comment: 'last login time',
  })
  lastLoginAt?: Date | null;

  @Column({
    name: 'last_logout_at',
    type: 'timestamptz',
    nullable: true,
    comment: 'last logout time',
  })
  lastLogoutAt?: Date | null;
}
