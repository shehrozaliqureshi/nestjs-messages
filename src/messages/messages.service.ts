import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessagesService {


    /*This is also the approach to explicitly define properties and assign
    values to them inside constructor
    */
    //messageRepo: MessageRepository;

    /*constructor(messagesRepo: MessageRepository) {
        this.messageRepo = messagesRepo;
    }*/

    /*
        In this approach rather than defining properties in class
        we are defining properties in the constructor 
    */
    constructor(public messagesRepo: MessageRepository) {}

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    async findAll() {
        return this.messagesRepo.findAll();
    }

    async create(content: string) {
        return this.messagesRepo.create(content);
    }
    
}