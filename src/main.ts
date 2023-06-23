import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  //This validation pipe tries to validate all the requests. If there is no validation defined this will
  //do anything.
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
