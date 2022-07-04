import { CommonModule } from '@libs/common/common.module';
import { CustomConfigService } from '@libs/common/config/config.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { DBNamingStrategy } from './db-naming.strategy';
import { BaseUserEntity } from './entity';
@Module({
  imports: [
    CommonModule,
    TypeOrmModule.forRootAsync({
      useFactory: (
        config: CustomConfigService,
      ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions => ({
        type: 'postgres',
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUsername,
        password: config.dbPassword,
        database: config.dbDatabase,
        schema: config.dbSchema,
        entities: [BaseUserEntity],
        migrations: [],
        subscribers: [],
        synchronize: config.dbSync,
        logging: config.dbDebug,
        namingStrategy: new DBNamingStrategy(),
        keepConnectionAlive: true,
        dropSchema: false,
        extra: {
          max: 5,
          maxUses: 5000,
          connectionTimeoutMillis: 5000,
          idleTimeoutMillis: 1000,
        },
      }),
      inject: [CustomConfigService],
    }),
  ],
})
export class DatabaseModule {}
