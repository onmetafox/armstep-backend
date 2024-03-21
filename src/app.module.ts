import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';

import { AppService } from './app.service';

import { AuthModule } from './controllers/auth/auth.module';
import { UsersModule } from './controllers/users/users.module';
import { CategoriesModule } from './controllers/categories/categories.module';
import { ServicesModule } from './controllers/services/services.module';
import { TeamsModule } from './controllers/teams/teams.module';
import { TechnologiesModule } from './controllers/technologies/technologies.module';
import { ProjectsModule } from './controllers/projects/projects.module';
import { ReviewsModule } from './controllers/reviews/reviews.module';
import { ContactsModule } from './controllers/contacts/contacts.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(config: ConfigService) => ({
        uri: config.get<string>('MONGO_URL')
      })
    }),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    ServicesModule,
    TeamsModule,
    TechnologiesModule,
    ProjectsModule,
    ReviewsModule,
    ContactsModule
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
