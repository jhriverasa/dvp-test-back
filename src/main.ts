import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  await app.listen(PORT);
  console.log('Using port:' + PORT);
}
bootstrap();
