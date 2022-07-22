import { Type } from '@nestjs/common';
import { Field, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import { CustomStatusCode } from '../constant';

@ObjectType({ description: 'Default Output' })
export class Output {
  @ApiProperty()
  @Field(() => CustomStatusCode, {
    nullable: false,
    defaultValue: CustomStatusCode.SUCCESS,
    description: 'CustomStatusCode',
  })
  statusCode!: CustomStatusCode;

  @ApiProperty()
  @Field(() => String, {
    nullable: true,
    description: 'errorMessage',
  })
  errorMessage?: string | null;
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
