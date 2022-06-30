import { Field, InputType } from '@nestjs/graphql';

import { AbstractInput } from './abstract.input';

@InputType({ description: 'Auth Test Input' })
export class AuthTestInput extends AbstractInput {
  @Field(() => String, {
    nullable: false,
    description: '이메일',
  })
  email!: string;

  @Field(() => String, {
    nullable: false,
    description: '비밀번호',
  })
  password!: string;
}
