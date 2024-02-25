import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

import { AppService } from './app.service';

import { AuthModule } from './controllers/auth/auth.module';
import { UsersModule } from './controllers/users/users.module';
import { CategoriesModule } from './controllers/categories/categories.module';
import { ServicesModule } from './controllers/services/services.module';
import { TeamsModule } from './controllers/teams/teams.module';
import { TechnologiesModule } from './controllers/technologies/technologies.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'armstep'}),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    ServicesModule,
    TeamsModule,
    TechnologiesModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
