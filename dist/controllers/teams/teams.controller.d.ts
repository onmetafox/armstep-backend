/// <reference types="multer" />
import { CreateTeamDto } from 'src/dtos/teams/create-team.dto';
import { UpdateTeamDto } from 'src/dtos/teams/update-team.dto';
import { TeamsService } from './teams.service';
export declare class TeamsController {
    private readonly service;
    constructor(service: TeamsService);
    createData(res: any, data: CreateTeamDto): Promise<any>;
    findOne(res: any, id: string): Promise<any>;
    findAll(res: any): Promise<any>;
    updateData(res: any, id: string, data: UpdateTeamDto): Promise<any>;
    removeData(res: any, id: string): Promise<any>;
    local(file: Express.Multer.File): Promise<{
        statusCode: number;
        data: string;
    }>;
}
