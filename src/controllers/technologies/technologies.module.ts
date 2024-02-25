
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { TechnologiesService } from './technologies.service';
import { TechnologiesController } from './technologies.controller';
import { TechnologieSchema } from 'src/models/technologies.model';

@Module({
  controllers: [TechnologiesController],
  imports: [
    MongooseModule.forFeature([{ name: 'Technologies', schema: TechnologieSchema}])
  ],
  providers: [TechnologiesService, JwtService],
})
export class TechnologiesModule {}
