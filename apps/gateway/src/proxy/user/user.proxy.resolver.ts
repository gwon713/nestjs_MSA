import { RegisterBaseUserInput } from '@libs/common/input';
import { BaseUserOutput, Output } from '@libs/common/model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Observable } from 'rxjs';

import { UserProxyService } from './user.proxy.service';

@Resolver()
export class UserProxyResolver {
  constructor(private readonly userProxyService: UserProxyService) {}

  @Mutation(() => Output)
  registerBaseUser(
    @Args({
      name: 'input',
      description: '',
      type: () => RegisterBaseUserInput,
    })
    input: RegisterBaseUserInput,
  ): Observable<Output> {
    return this.userProxyService.registerBaseUser(input);
  }

  @Query(() => BaseUserOutput)
  fetchMyProfile(
    @Args({
      name: 'input',
      description: '',
      type: () => RegisterBaseUserInput,
    })
    input: RegisterBaseUserInput,
  ): Observable<BaseUserOutput> {
    return this.userProxyService.registerBaseUser(input);
  }
}
