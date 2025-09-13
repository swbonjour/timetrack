import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './config/configuration.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService<ConfigurationType>);

  app.setGlobalPrefix(
    (config.getOrThrow<ConfigurationType>('global_prefix', {
      infer: true,
    }) as string) ?? 'api/v1',
  );

  await app.listen(
    config.getOrThrow<ConfigurationType>('port', { infer: true }) as number,
  );
}
void bootstrap();
