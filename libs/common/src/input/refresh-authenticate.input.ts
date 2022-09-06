import { Field, InputType } from '@nestjs/graphql';
import { IsJWT, IsNotEmpty, IsString } from 'class-validator';

import { AbstractInput } from './abstract.input';

@InputType({ description: 'RefreshAuthenticateInput' })
export class RefreshAuthenticateInput extends AbstractInput {
  @IsJWT()
  @IsNotEmpty()
  @IsString()
  @Field(() => String, {
    description: 'refresh token',
    nullable: false,
  })
  refreshToken!: string;
}
