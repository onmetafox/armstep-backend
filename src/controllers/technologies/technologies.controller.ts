import { Controller, Body, Post, Get, Res, Put, UseGuards, Param, HttpStatus, Delete } from '@nestjs/common';
import { TechnologiesService } from './technologies.service';
import { CreateTechnologyDto } from 'src/dtos/technologies/create-technology.dto';
import { UpdateTechnologyeDto } from 'src/dtos/technologies/update-technology';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { AuthGuard } from 'src/core/auth.strategy';

@Controller('technologies')
export class TechnologiesController {
  constructor(private readonly service: TechnologiesService) {}
  @UseGuards(AuthGuard)
  @Post()
  async createData(@Res() res, @Body() createDto: CreateTechnologyDto){
      try{
          const result = await this.service.create(createDto);
          return res.status(HttpStatus.OK).json({
              msg: "Technology created successfully",
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
          const result = await this.service.findAllWithCategory(where);
          return res.status(HttpStatus.OK).json({
              msg: "Technology founds successfully",
              result
          })
      }catch(e){
          return res.status(e.status).json(e.response);
      }
  }

  @Get(":id")
  async findOne(@Res() res, @Param('id') id: string){
      try{
          const result = await this.service.findOneWithCategory(id);
          return res.status(HttpStatus.OK).json({
              msg: "Technology created successfully",
              result
          })
      }catch(e){
          return res.status(e.status).json(e.response);
      }
  }

  @UseGuards(AuthGuard)
  @Put(":id")
  async updateData(@Res() res, @Param("id") id: string, @Body() data:UpdateTechnologyeDto){
      try{
          const result = await this.service.update(id, data);
          return res.status(HttpStatus.OK).json({
              msg: "Technology founds successfully",
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
              msg: "Technology founds successfully",
              result
          })
      }catch(e){
          return res.status(e.status).json(e.response);
      }
  }
}
