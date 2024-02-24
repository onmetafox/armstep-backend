import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Categories } from 'src/models/categories.model';
import { BaseService } from 'src/core/base.service';

@Injectable()
export class CategoriesService extends BaseService<Categories>{
    constructor(@InjectModel('Categories') private readonly categoriesModel: Model<Categories>){
        super(categoriesModel)
    }
}
