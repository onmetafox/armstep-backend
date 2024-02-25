import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from 'src/core/base.service';
import { Reviews } from 'src/models/reviews.model';
@Injectable()
export class ReviewsService extends BaseService<Reviews>{
  constructor(@InjectModel('Reviews') private readonly reviewModel: Model<Reviews>){
    super(reviewModel)
  }
  
}
