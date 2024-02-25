import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { ProjectsSchema } from 'src/models/projects.model';

@Module({
  controllers: [ProjectsController],
  imports: [
    MongooseModule.forFeature([{ name: 'Projects', schema: ProjectsSchema}])
  ],
  providers: [ProjectsService,JwtService],
})
export class ProjectsModule {}
