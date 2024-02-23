import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from "./auth.controller";
import { AuthService } from './auth.service';
import { UsersSchema } from 'src/models/users.model';
@Module({
    controllers: [AuthController],
    imports: [
        MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema}]),
        PassportModule,
        JwtModule.register({
            secret: "this is the auth key for jwt", //config.JWT_KEY,
            signOptions: { expiresIn: "10m"}// config.TOKEN_EXPIRATION },
        }),
    ],
    providers: [
        AuthService,
    ]
})

export class AuthModule {}