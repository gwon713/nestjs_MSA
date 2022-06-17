import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CustomConfigService } from '@libs/common/config/config.service';
import { CommonModule } from '@libs/common/common.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (
        config: CustomConfigService,
      ): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions => ({
        typename: 'postgres',
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUsername,
        password: config.dbPassword,
        database: config.dbDatabase,
        schema: config.dbSchema,
        entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        synchronize: config.dbSync,
        logging: config.dbDebug,
        namingStrategy: new SnakeNamingStrategy(),
      }),
      inject: [CommonModule],
    }),
  ],
})
export class DatabaseModule {}
