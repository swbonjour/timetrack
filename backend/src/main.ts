import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(process.env.GLOBAL_PREFIX ?? 'api/v1');

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
