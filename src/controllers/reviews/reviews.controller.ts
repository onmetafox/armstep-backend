import { Controller, Body, Post, Get, Res, Put, UseGuards, Param, UploadedFile, UseInterceptors, HttpStatus, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { diskStorage } from 'multer';

import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from '../../dtos/reviews/create-review.dto';
import { UpdateReviewDto } from '../../dtos/reviews/update-review.dto';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { AuthGuard } from 'src/core/auth.strategy';
import { generateFileName } from 'src/core/helper';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly service: ReviewsService) {}
    @UseGuards(AuthGuard)
    @Post()
    async createData(@Res() res, @Body() createDto: CreateReviewDto){
        try{
            const result = await this.service.create(createDto);
            return res.status(HttpStatus.OK).json({
                msg: "Review created successfully",
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
                msg: "Review founds successfully",
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
                msg: "Review created successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }

    @UseGuards(AuthGuard)
    @Put(":id")
    async updateData(@Res() res, @Param("id") id: string, @Body() data:UpdateReviewDto){
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
    @UseGuards(AuthGuard)
    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: '/public/upload/reviews',
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
