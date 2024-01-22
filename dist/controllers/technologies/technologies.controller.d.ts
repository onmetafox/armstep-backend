/// <reference types="multer" />
import { TechnologiesService } from './technologies.service';
import { CreateTechnologyDto } from 'src/dtos/technologies/create-technology.dto';
import { UpdateTechnologyeDto } from 'src/dtos/technologies/update-technology';
export declare class TechnologiesController {
    private readonly service;
    constructor(service: TechnologiesService);
    createData(res: any, createDto: CreateTechnologyDto): Promise<any>;
    findAll(res: any): Promise<any>;
    findOne(res: any, id: string): Promise<any>;
    updateData(res: any, id: string, data: UpdateTechnologyeDto): Promise<any>;
    removeData(res: any, id: string): Promise<any>;
    local(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
}
