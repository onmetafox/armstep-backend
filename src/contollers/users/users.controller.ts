import { Body, Controller, Post, Res, Get, HttpStatus, Put, UseGuards, Param } from '@nestjs/common';
import * as rawbody from 'raw-body';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dtos/users/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Put("/:id")
    async updateUser(){

    }
    @Get("/:id")
    async getUser(@Res() response, @Param('id') id: string){
        try{
            const user = await this.usersService.findOne(id);
            return response.status(HttpStatus.OK).json({
                message: 'Student found successfully',
                user
            })
        }catch (e){
            return response.status(e.status).json(e.response);
        }
    }
    
}
