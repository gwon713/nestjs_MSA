import { Field, Float, ObjectType } from '@nestjs/graphql';

import { One } from '.';

/**
 * Authentication
 *
 * @TODO fill description
 */
@ObjectType({ description: '' })
export class Authentication {
  @Field(() => String, { nullable: false, description: 'JWT' })
  accessToken!: string;

  @Field(() => String, {
    nullable: false,
    defaultValue: 'Bearer',
    description: '',
  })
  tokenType!: string;

  @Field(() => Float, { nullable: false, description: '' })
  expiration!: number;

  @Field(() => String, { nullable: false, description: 'JWT' })
  refreshToken!: string;

  @Field(() => String, { nullable: true, description: '' })
  redirectUrl?: string | null;
}

@ObjectType({ description: '' })
export class AuthenticateOutput extends One(Authentication) {}
