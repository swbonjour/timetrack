import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'database',
  () =>
    ({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: false,
      migrations: ['./migartions'],
      migrationsTableName: 'typeorm_migration',
      logging: ['error', 'warn', 'migration'],
      logger: 'simple-console',
    }) satisfies TypeOrmModuleOptions,
);
