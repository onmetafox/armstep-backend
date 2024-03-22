import { Controller, Body, Post, Get, Res, Put, UseGuards, Param, HttpStatus, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';

import { CreateTeamDto } from 'src/dtos/teams/create-team.dto';
import { UpdateTeamDto } from 'src/dtos/teams/update-team.dto';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { AuthGuard } from 'src/core/auth.strategy';
import { TeamsService } from './teams.service';
import { generateFileName } from 'src/core/helper';

@Controller('teams')
export class TeamsController {
    constructor(private readonly service: TeamsService) {}

    @UseGuards(AuthGuard)
    @Post()
    async createData(@Res() res, @Body() data: CreateTeamDto){
        try{
            const result = await this.service.create(data);
            return res.status(HttpStatus.OK).json({
                msg: "Team created successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }

    @Get(":id")
    async findOne(@Res() res, @Param('id') id: string){
        try{
            const result = await this.service.findOne(id);
            return res.status(HttpStatus.OK).json({
                msg: "Team created successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll(@Res() res){
        const where:BaseWhereDto = new BaseWhereDto({})
        try{
            const result = await this.service.findAll(where);
            return res.status(HttpStatus.OK).json({
                msg: "Team founds successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }

    @UseGuards(AuthGuard)
    @Put(":id")
    async updateData(@Res() res, @Param("id") id: string, @Body() data:UpdateTeamDto){
        try{
            const result = await this.service.update(id, data);
            return res.status(HttpStatus.OK).json({
                msg: "Team founds successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async removeData(@Res() res, @Param('id') id: string){
        try{
            const result = await this.service.remove(id);
            return res.status(HttpStatus.OK).json({
                msg: "Category founds successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }
    @UseGuards(AuthGuard)
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './public/upload/teams',
                    filename: (req, file, cb) => {
                    cb(null, generateFileName(file.originalname));
                },
            }),
        }),
    )
    async local(@UploadedFile() file: Express.Multer.File) {
        console.log(file)
        return {
            statusCode: 200,
            data: file.path,
        };
    }
}
