import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './db/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.dev', '.env'],
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync(databaseConfig.asProvider()),
  ],
  controllers: [AppController],
})
export class AppModule {}
