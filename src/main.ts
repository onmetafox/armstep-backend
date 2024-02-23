import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {rawBody: true});
  app.useGlobalPipes(new ValidateInputPipe());
  app.setGlobalPrefix('api');
  app.enableCors();
  await app.listen(3000);

}
bootstrap();
