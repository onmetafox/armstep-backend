import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { ReviewsSchema } from 'src/models/reviews.model';

@Module({
  controllers: [ReviewsController],
  imports: [
    MongooseModule.forFeature([{ name: 'Reviews', schema: ReviewsSchema}])
  ],
  providers: [ReviewsService, JwtService],
})
export class ReviewsModule {}
