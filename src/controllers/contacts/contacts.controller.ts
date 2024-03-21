import { Controller, Body, Post, Get, Res, Put, UseGuards, Param, HttpStatus, Delete } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from '../../dtos/contacts/create-contact.dto';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { AuthGuard } from 'src/core/auth.strategy';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly service: ContactsService) {}

  @Post()
  async createData(@Res() res, @Body() createDto: CreateContactDto){
      try{
          const result = await this.service.create(createDto);
          await this.service.sendEmail(result);
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
  @UseGuards(AuthGuard)
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
