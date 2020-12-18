import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Status} from "./status.entity";

@Injectable()
export class StatusesService {

    constructor(
        @InjectRepository(Status)
        private statusRepository: Repository<Status>,
    ) {
    }

    public async getStatuses(): Promise<Status[]> {
        return await this.statusRepository.find();
    }
}
