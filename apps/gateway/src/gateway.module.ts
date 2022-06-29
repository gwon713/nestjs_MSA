import { CommonModule } from '@libs/common';
import { CustomConfigService } from '@libs/common/config/config.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [
    CommonModule,
    ProxyModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: async (config: CustomConfigService) => ({
        debug: true,
        path: '/v1/graphql',
        autoSchemaFile: 'schema.gql',
        playground: config.gqlPlayGround,
        subscriptions: {
          'graphql-ws': true,
        },
      }),
      inject: [CustomConfigService],
    }),
  ],
  providers: [],
})
export class GatewayModule {}
