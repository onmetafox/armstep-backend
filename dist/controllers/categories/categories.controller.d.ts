/// <reference types="multer" />
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from 'src/dtos/categoires/create-category.dto';
import { UpdateCategoryDto } from 'src/dtos/categoires/update-category.dto';
export declare class CategoriesController {
    private readonly service;
    constructor(service: CategoriesService);
    createData(res: any, category: CreateCategoryDto): Promise<any>;
    findOne(res: any, id: string): Promise<any>;
    local(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
    findAll(res: any, params: any): Promise<any>;
    updateData(res: any, id: string, data: UpdateCategoryDto): Promise<any>;
    removeData(res: any, id: string): Promise<any>;
}
