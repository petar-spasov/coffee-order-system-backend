import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesController } from './statuses.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Status} from "./status.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Status]),
  ],
  providers: [StatusesService],
  controllers: [StatusesController]
})
export class StatusesModule {}
