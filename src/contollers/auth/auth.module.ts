import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from "./auth.controller";
import { AuthService } from './auth.service';
import { UsersSchema } from 'src/models/users.model';
import { LocalStrategy } from 'src/core/local.strategy';
import { JwtStrategy } from 'src/core/jwt.strategy';

@Module({
    controllers: [AuthController],
    imports: [
        MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema}]),
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_KEY,
            signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
        }),
    ],
    providers: [
        LocalStrategy,
        JwtStrategy,
        AuthService
    ]
})

export class AuthModule {}