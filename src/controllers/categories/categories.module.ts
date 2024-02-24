import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './categories.controller';
import { JwtService } from '@nestjs/jwt';
import { CategoriesSchema } from 'src/models/categories.model';

@Module({
  controllers: [CategoriesController],
    imports: [
        MongooseModule.forFeature([{ name: 'Categories', schema: CategoriesSchema}])
    ],
    providers: [
      CategoriesService,
      JwtService
    ]
})
export class CategoriesModule {}
