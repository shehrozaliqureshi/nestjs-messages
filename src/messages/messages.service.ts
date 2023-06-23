import { MessageRepository } from "./messages.repository";


export class MessagesService {

    messageRepo : MessageRepository;

    //Service is creating its own dependencies
    // Dont do this on real apps
    constructor() {
        this.messageRepo = new MessageRepository();
    }

    async findOne(id: string) {
        return this.messageRepo.findOne(id);
    }

    async findAll() {
        return this.messageRepo.findAll();
    }

    async create(content: string) {
        return this.messageRepo.create(content);
    }
    
}