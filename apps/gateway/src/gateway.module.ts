import { CommonModule } from '@libs/common';
import { CustomConfigService } from '@libs/common/config/config.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StrategyModule } from 'apps/gateway/src/strategy';

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
    StrategyModule,
  ],
})
export class GatewayModule {}
