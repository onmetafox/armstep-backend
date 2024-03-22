import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/validate.pipe';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {rawBody: true});
  app.useGlobalPipes(new ValidateInputPipe());
  app.useBodyParser('json');
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: '*',
  }); 
  app.useStaticAssets(join(__dirname, '..', 'public'));
  await app.listen(3000);
}
bootstrap();
