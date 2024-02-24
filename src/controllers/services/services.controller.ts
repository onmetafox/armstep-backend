import { Controller, Body, Post, Get, Res, Put, UseGuards, Param, HttpStatus, Delete } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from 'src/dtos/services/create-service.dto';
import { UpdateServiceDto } from 'src/dtos/services/update-service.dto';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('services')
export class ServicesController {
  constructor(private readonly service: ServicesService) {}

  @UseGuards(AuthGuard)
  @Post()
  async createData(@Res() res, @Body() createDto: CreateServiceDto){
      try{
          const result = await this.service.create(createDto);
          return res.status(HttpStatus.OK).json({
              msg: "Service created successfully",
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
  async updateData(@Res() res, @Param("id") id: string, @Body() data:UpdateServiceDto){
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
              msg: "Category founds successfully",
              result
          })
      }catch(e){
          return res.status(e.status).json(e.response);
      }
  }
}
