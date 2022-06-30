import { AuthTestInput } from '@libs/common/input';
import { Args, Field, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthProxyResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation(() => String)
  registerUser(
    @Args({
      name: 'input',
      description: '',
      type: () => AuthTestInput,
    })
    input: AuthTestInput,
  ): string {
    return 'okay';
  }
}
