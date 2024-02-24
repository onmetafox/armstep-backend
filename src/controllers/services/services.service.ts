import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/core/base.service';
import { Services } from 'src/models/services.model';

@Injectable()
export class ServicesService extends BaseService<Services>{
  constructor(@InjectModel('Services') private readonly servicesModel : Model<Services>){
    super(servicesModel);
  }
}
