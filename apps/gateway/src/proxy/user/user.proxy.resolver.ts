import { RegisterBaseUserInput } from '@libs/common/input';
import { Output } from '@libs/common/model';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
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
}
