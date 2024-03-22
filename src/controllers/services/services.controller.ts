import {
  Controller,
  Body,
  Post,
  Get,
  Res,
  Put,
  UseGuards,
  Param,
  HttpStatus,
  Delete,
  UseInterceptors, UploadedFile,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from 'src/dtos/services/create-service.dto';
import { UpdateServiceDto } from 'src/dtos/services/update-service.dto';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { AuthGuard } from 'src/core/auth.strategy';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { generateFileName } from '../../core/helper';
import { Express } from 'express';
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
            return res.json(e.response);
        }
    }

    @UseGuards(AuthGuard)
    @Get()
    async findAll(@Res() res){
        const where:BaseWhereDto = new BaseWhereDto({})
        try{
            const result = await this.service.findAllWithCategory(where);
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
            const result = await this.service.findOneWithCategory(id);
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
        destination: '/public/upload/services',
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
