import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersModule } from './controllers/users/users.module';
import { AuthModule } from './controllers/auth/auth.module';
import { CategoriesModule } from './controllers/categories/categories.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ServiceModel } from './models/services.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017',{dbName: 'armstep'}),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UsersModule,
    AuthModule,
    CategoriesModule,
    // ServiceModel
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
