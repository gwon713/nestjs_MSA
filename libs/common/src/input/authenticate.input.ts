import { Field, InputType } from '@nestjs/graphql';

import { UserSocialRouteType } from '../constant';
import { AbstractInput } from './abstract.input';

@InputType({ description: 'Auth Test Input' })
export class AuthenticateInput extends AbstractInput {
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

  @Field(() => UserSocialRouteType, {
    nullable: false,
    description: '비밀번호',
  })
  route!: UserSocialRouteType;
}
