import {Controller, Get, Post, Body, Param, Req, NotFoundException} from '@nestjs/common';
import {Request} from "express";
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService) {}

    @Get()
    listMessages() {
        return this.messagesService.findAll();
        //console.log('testing');
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto, @Req() request: Request) {
        
        return this.messagesService.create(body.content);
        //console.log(request.headers);
        //console.log('test');
        //console.log(body);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: any) {

        var message = await this.messagesService.findOne(id);
        
        if (!message) {
            throw new NotFoundException('Message not found');
        }

        return message;

        //console.log(id);
    }

}
