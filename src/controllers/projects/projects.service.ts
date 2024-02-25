import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from 'src/core/base.service';
import { Projects } from 'src/models/projects.model';

@Injectable()
export class ProjectsService extends BaseService<Projects>{
  constructor (@InjectModel('Projects') private readonly projectModel: Model<Projects>)
  {
    super(projectModel)
  }
  
}
