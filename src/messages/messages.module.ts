import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageRepository } from './messages.repository';
import { MessagesService } from './messages.service';

//Providers are things that can be used as dependencies for other classes
@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessageRepository]
})
export class MessagesModule {}
