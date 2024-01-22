/// <reference types="multer" />
import { ProjectsService } from './projects.service';
import { CreateProjectDto } from '../../dtos/projects/create-project.dto';
import { UpdateProjectDto } from '../../dtos/projects/update-project.dto';
export declare class ProjectsController {
    private readonly service;
    constructor(service: ProjectsService);
    createData(res: any, createDto: CreateProjectDto): Promise<any>;
    findAll(res: any): Promise<any>;
    local(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
    findOne(res: any, id: string): Promise<any>;
    updateData(res: any, id: string, data: UpdateProjectDto): Promise<any>;
    removeData(res: any, id: string): Promise<any>;
}
