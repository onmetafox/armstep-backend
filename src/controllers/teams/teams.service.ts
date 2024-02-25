import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from 'src/core/base.service';
import { Teams } from 'src/models/teams.model';

@Injectable()
export class TeamsService extends BaseService<Teams>{
  constructor (@InjectModel("Teams") private readonly teamModel: Model<Teams>)
  {
    super(teamModel)
  }
}
