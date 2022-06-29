import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthProxyResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
