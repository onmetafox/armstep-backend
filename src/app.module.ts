import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './contollers/users/users.module';
import { AuthModule } from './contollers/auth/auth.module';
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
    AppService],
})
export class AppModule {}
