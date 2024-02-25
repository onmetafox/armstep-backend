import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from 'src/core/base.service';
import { Technologies } from 'src/models/technologies.model';

@Injectable()
export class TechnologiesService extends BaseService<Technologies> {
  constructor(@InjectModel('Technologies') private readonly techModel: Model<Technologies>){
    super(techModel);
  }
}
