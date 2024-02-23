import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

import { UsersModule } from './contollers/users/users.module';
import { AuthModule } from './contollers/auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { config } from './config/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'armstep'}),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
