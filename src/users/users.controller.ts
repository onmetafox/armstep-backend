import { Body, Controller, Post, Res, HttpStatus } from '@nestjs/common';
import * as rawbody from 'raw-body';
import { Request } from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from 'src/dtos/users/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Post('create')
    async createUser(@Res() response, @Body() createUserDto: CreateUserDto){
        try {
            const newUser = await this.usersService.create(createUserDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Student has been created successfully',
                newUser,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Student not created!',
                error: 'Bad Request'
            });
        }
    }
    
}
