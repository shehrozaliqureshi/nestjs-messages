import {Controller, Get, Post, Body, Param, Req} from '@nestjs/common';
import {Request} from "express";
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    MessagesService: MessagesService;

    constructor() {
        this.MessagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.MessagesService.findAll();
        //console.log('testing');
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto, @Req() request: Request) {
        
        return this.MessagesService.create(body.content);
        //console.log(request.headers);
        //console.log('test');
        //console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id: any) {
        return this.MessagesService.findOne(id);
        //console.log(id);
    }

}
