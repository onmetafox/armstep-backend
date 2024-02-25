import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { TeamsService } from './teams.service';
import { TeamsSchema } from 'src/models/teams.model';
import { TeamsController } from './teams.controller';

@Module({
  controllers: [TeamsController],
  imports: [
      MongooseModule.forFeature([{ name: 'Teams', schema: TeamsSchema}])
  ],
  providers: [
    TeamsService,
    JwtService
  ],
})
export class TeamsModule {}
