import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CustomConfigService } from '@libs/common/config/config.service';
import { CommonModule } from '@libs/common/common.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
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
        // entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),
        migrations: [],
        subscribers: [],
        synchronize: config.dbSync,
        logging: config.dbDebug,
        namingStrategy: new SnakeNamingStrategy(),
      }),
      inject: [CustomConfigService],
    }),
  ],
})
export class DatabaseModule {}
