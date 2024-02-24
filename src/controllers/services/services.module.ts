import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { ServicesSchema } from 'src/models/services.model';

@Module({
  controllers: [ServicesController],
  imports: [
    MongooseModule.forFeature([{ name: 'Services', schema: ServicesSchema}])
  ],
  providers: [ServicesService, JwtService],
})
export class ServicesModule {}
