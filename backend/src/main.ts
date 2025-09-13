import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ConfigurationType } from './config/configuration.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService<ConfigurationType>);

  app.setGlobalPrefix(
    String(
      config.getOrThrow<ConfigurationType>('global_prefix', {
        infer: true,
      }),
    ),
  );

  await app.listen(
    Number(config.getOrThrow<ConfigurationType>('port', { infer: true })),
  );
}
void bootstrap();
