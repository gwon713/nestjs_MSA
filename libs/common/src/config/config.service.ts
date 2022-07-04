import { Injectable, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoggerOptions } from 'typeorm';

import { Environment } from '../constant';

@Injectable()
export class CustomConfigService {
  constructor(private readonly configService: ConfigService) {}

  get nodeEnv(): Environment {
    return this.configService.get<Environment>('NODE_ENV', Environment.DEFAULT);
  }

  get logLevel(): LogLevel {
    return this.configService.get<LogLevel>('LOG_LEVEL', <LogLevel>'debug');
  }

  get rootDir(): string {
    return this.configService.get<string>('ROOT_DIR', process.env.PWD);
  }

  get dbHost(): string {
    return this.configService.get<string>('DB_HOST', 'localhost');
  }

  get dbPort(): number {
    return this.configService.get<number>('DB_PORT', 5432);
  }

  get dbUsername(): string {
    return this.configService.get<string>('DB_USERNAME', 'postgres');
  }

  get dbPassword(): string {
    return this.configService.get<string>('DB_PASSWORD', 'postgres');
  }

  get dbDatabase(): string {
    return this.configService.get<string>('DB_DATABASE', 'postgres');
  }

  get dbSchema(): string {
    return this.configService.get<string>('DB_SCHEMA', 'public');
  }

  get dbSync(): boolean {
    return this.configService.get<boolean>('DB_SYNC', false);
  }

  get dbDebug(): LoggerOptions {
    return this.configService.get<LoggerOptions>(
      'DB_DEBUG',
      <LoggerOptions>'error',
    );
  }

  get gqlPlayGround(): boolean {
    return this.configService.get<boolean>('GQL_PLAYGROUND', true);
  }

  get rmqProto(): string {
    return this.configService.get<string>('RMQ_PROTO', 'amqp');
  }

  get rmqHost(): string {
    return this.configService.get<string>('RMQ_HOST', 'localhost');
  }

  get rmqPort(): number {
    return this.configService.get<number>('RMQ_PORT', 5672);
  }

  get rmqUser(): string {
    return this.configService.get<string>('RMQ_USER', 'rabbitmq');
  }

  get rmqPass(): string {
    return this.configService.get<string>('RMQ_PASS', 'rabbitmq');
  }

  get rmqUrl(): string {
    return this.configService.get<string>(
      'RMQ_URL',
      `${this.rmqProto}://${this.rmqUser}:${this.rmqPass}@${this.rmqHost}:${this.rmqPort}`,
    );
  }

  get jwtSecret(): string {
    return this.configService.get<string>(
      'JWT_SECRET',
      'O8jSX9Su4hM8CrDJMbgr1HgAsGMpxYRcnXbVQE6gryw',
    );
  }
}
