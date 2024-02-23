import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseService } from 'src/core/base.service';
import { UsersController } from "./users.controller";
import { UsersService } from './users.service';
import { UsersSchema } from 'src/models/users.model';
@Module({
    controllers: [UsersController],
    imports: [
        MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema}])
    ],
    providers: [
        // BaseService,
        UsersService
    ]
})

export class UsersModule {}