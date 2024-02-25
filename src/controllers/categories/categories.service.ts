import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from 'src/core/base.service';
import { Categories } from 'src/models/categories.model';

@Injectable()
export class CategoriesService extends BaseService<Categories>{
    constructor (@InjectModel("Categories") private readonly categoryModel: Model<Categories>){
        super(categoryModel)
    }
}
