import { Controller, Body, Post, Get, Res, Put, UseGuards, Param, HttpStatus, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from 'src/dtos/categoires/create-category.dto';
import { UpdateCategoryDto } from 'src/dtos/categoires/update-category.dto';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('categories')
export class CategoriesController {
    constructor (private readonly service: CategoriesService){}

    @UseGuards(AuthGuard)
    @Post()
    async createData(@Res() res, @Body() category: CreateCategoryDto){
        try{
            const result = await this.service.create(category);
            return res.status(HttpStatus.OK).json({
                msg: "Category created successfully",
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
                msg: "Category created successfully",
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
                msg: "Category founds successfully",
                result
            })
        }catch(e){
            return res.status(e.status).json(e.response);
        }
    }

    @UseGuards(AuthGuard)
    @Put(":id")
    async updateData(@Res() res, @Param("id") id: string, @Body() data:UpdateCategoryDto){
        try{
            const result = await this.service.update(id, data);
            return res.status(HttpStatus.OK).json({
                msg: "Category founds successfully",
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
}
