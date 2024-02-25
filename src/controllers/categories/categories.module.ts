import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { CategoriesController } from './categories.controller';
import { CategoriesSchema } from 'src/models/categories.model';
import { CategoriesService } from './categories.service';
@Module({
  controllers: [CategoriesController],
    imports: [
        MongooseModule.forFeature([{ name: 'Categories', schema: CategoriesSchema}])
    ],
    providers: [
      CategoriesService,
      JwtService,
    ]
})
export class CategoriesModule {}
