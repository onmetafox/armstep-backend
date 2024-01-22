import { ContactsService } from './contacts.service';
import { CreateContactDto } from '../../dtos/contacts/create-contact.dto';
export declare class ContactsController {
    private readonly service;
    constructor(service: ContactsService);
    createData(res: any, createDto: CreateContactDto): Promise<any>;
    findAll(res: any): Promise<any>;
    findOne(res: any, id: string): Promise<any>;
    removeData(res: any, id: string): Promise<any>;
}
