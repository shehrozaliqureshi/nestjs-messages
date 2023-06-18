import {Controller, Get, Post, Body, Param, Req} from '@nestjs/common';
import {Request} from "express";

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
        console.log('testing');
    }

    @Post()
    createMessage(@Body() body: any, @Req() request: Request) {
        console.log(request.headers);
        console.log('test');
        console.log(body);
    }

    @Get('/:id')
    getMessage(@Param('id') id: any) {
        console.log(id);
    }

}
