/// <reference types="multer" />
import { ServicesService } from './services.service';
import { CreateServiceDto } from 'src/dtos/services/create-service.dto';
import { UpdateServiceDto } from 'src/dtos/services/update-service.dto';
export declare class ServicesController {
    private readonly service;
    constructor(service: ServicesService);
    createData(res: any, createDto: CreateServiceDto): Promise<any>;
    findAll(res: any): Promise<any>;
    findOne(res: any, id: string): Promise<any>;
    updateData(res: any, id: string, data: UpdateServiceDto): Promise<any>;
    removeData(res: any, id: string): Promise<any>;
    local(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
}
