import { UserSocialRouteType, UserStatusType } from '@libs/common/constant';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Column, Entity } from 'typeorm';

import { AbstractEntity } from '.';

/**
 * @entity
 * @see BaseUserEntity
 * @extends AbstractTimeEntity
 */
@Entity('base_user')
@ObjectType()
export class BaseUserEntity extends AbstractEntity {
  @Column({
    name: 'email',
    type: 'varchar',
    length: 320,
    nullable: false,
    comment: 'user email',
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Field(() => String, {
    nullable: false,
    description: '이메일',
  })
  email: string;

  @Column({
    name: 'nick_name',
    type: 'varchar',
    length: 50,
    nullable: false,
    comment: 'user nickname',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  @Field(() => String, {
    nullable: false,
    description: '닉네임',
  })
  nickName!: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 255,
    nullable: false,
    comment: 'user password',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  @Field(() => String, {
    nullable: false,
    description: '닉네임',
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
  @IsNotEmpty()
  @IsEnum(UserSocialRouteType)
  @Field(() => UserSocialRouteType, {
    nullable: false,
    defaultValue: UserSocialRouteType.LOCAL,
    description: '유저 소셜 타입',
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
  @IsNotEmpty()
  @IsEnum(UserSocialRouteType)
  @Field(() => UserStatusType, {
    nullable: false,
    defaultValue: UserStatusType.REGISTERED,
    description: '유저 상태',
  })
  state!: UserStatusType;

  @Column({
    name: 'last_login_at',
    type: 'timestamptz',
    nullable: true,
    comment: 'last login time',
  })
  @IsOptional()
  @IsDate()
  @Field(() => String, {
    nullable: false,
    description: '유저 마지막 로그인',
  })
  lastLoginAt?: Date;

  @Column({
    name: 'last_logout_at',
    type: 'timestamptz',
    nullable: true,
    comment: 'last logout time',
  })
  @IsOptional()
  @IsDate()
  @Field(() => String, {
    nullable: false,
    description: '유저 마지막 로그아웃',
  })
  lastLogoutAt?: Date;
}
