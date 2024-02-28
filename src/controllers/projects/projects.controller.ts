import { Controller, Body, Post, Get, Res, Put, UseGuards, Param, HttpStatus, Delete, UploadedFile, UseInterceptors, } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from '../../dtos/projects/create-project.dto';
import { UpdateProjectDto } from '../../dtos/projects/update-project.dto';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { AuthGuard } from 'src/core/auth.strategy';
import { generateFileName } from 'src/core/helper';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly service: ProjectsService) {}

    @UseGuards(AuthGuard)
    @Post()
    async createData(@Res() res, @Body() createDto:CreateProjectDto){
            try{
                const result = await this.service.create(createDto);
                return res.status(HttpStatus.OK).json({
                    msg: "Project created successfully",
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
                msg: "Service founds successfully",
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
                destination: '/public/upload/projects',
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
    @Get(":id")
    async findOne(@Res() res, @Param('id') id: string){
        try{
            const result = await this.service.findOne(id);
            return res.status(HttpStatus.OK).json({
                msg: "Service created successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }

    @UseGuards(AuthGuard)
    @Put(":id")
    async updateData(@Res() res, @Param("id") id: string, @Body() data:UpdateProjectDto){
        try{
            const result = await this.service.update(id, data);
            return res.status(HttpStatus.OK).json({
                msg: "Service founds successfully",
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
                msg: "Service founds successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }
}
