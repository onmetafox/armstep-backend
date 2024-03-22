import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseWhereDto } from 'src/core/base-where.dto';
import { BaseService } from 'src/core/base.service';
import { Services } from 'src/models/services.model';

@Injectable()
export class ServicesService extends BaseService<Services>{
  constructor(@InjectModel('Services') private readonly servicesModel : Model<Services>){
    super(servicesModel);
  }
  async findOneWithCategory(serviceId: string): Promise<any | null> {
    try {
        const data = this.servicesModel.findById(serviceId).populate('category').exec();
        return data;
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        return null;
    }
  }
  async findAllWithCategory(where: BaseWhereDto): Promise<any | null> {
    try {
        this.PAGE = where.page;
        this.WHERE = where;
        delete where.page;
        
        const objectsCount = await this.servicesModel.countDocuments(where).exec();
        
        const pageCount = Math.ceil(objectsCount / this.PAGE_SIZE);

        const data = await this.servicesModel
        .find(where)
        .populate('category')
        .skip((this.PAGE - 1) * this.PAGE_SIZE)
        .limit(this.PAGE_SIZE);

        const pagination = {
            page: this.PAGE,
            pageSize: this.PAGE_SIZE,
            pageCount: pageCount,
            total: objectsCount,
        };

        return {
            data: data,
            meta: {
                pagination: pagination,
            },
        };
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        return null;
    }
  }
}
