import { Repository } from "typeorm";
import { Status } from "./status.entity";
export declare class StatusesService {
    private statusRepository;
    constructor(statusRepository: Repository<Status>);
    getStatuses(): Promise<Status[]>;
}
