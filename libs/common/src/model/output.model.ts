import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { statusCode } from '../constant';

@ObjectType({ description: 'Default Output' })
export class Output {
  @ApiProperty()
  @Field(() => statusCode, {
    nullable: false,
    defaultValue: statusCode.SUCCESS,
    description: 'statusCode',
  })
  statusCode!: statusCode;

  @ApiProperty()
  @Field(() => String, {
    nullable: true,
    description: 'message',
  })
  message?: string | null;
}

/**
 * One
 */
export function One<T>(classRef: Type<T>): any {
  @ObjectType({ isAbstract: true, description: 'Object' })
  abstract class ObjType extends Output {
    @ApiProperty()
    @Field(() => classRef, { nullable: true })
    data?: T;
  }
  return ObjType;
}

/**
 * Many
 */
export function Many<T>(classRef: Type<T>): any {
  @ObjectType({ isAbstract: true, description: 'Array List' })
  abstract class ObjType extends Output {
    @ApiProperty()
    @Field(() => [classRef], { nullable: true })
    data?: T[];
  }
  return ObjType;
}
