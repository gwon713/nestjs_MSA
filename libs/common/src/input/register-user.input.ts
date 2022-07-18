import { Field, InputType } from '@nestjs/graphql';

import { UserSocialRouteType } from '../constant';
import { AbstractInput } from './abstract.input';

@InputType({ description: 'RegisterUserInput' })
export class RegisterUserInput extends AbstractInput {
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
    description: '가입 계정 소셜',
  })
  social!: UserSocialRouteType;
}
