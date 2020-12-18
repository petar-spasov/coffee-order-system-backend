import { StatusesService } from "./statuses.service";
import { Status } from "./status.entity";
export declare class StatusesController {
    private readonly statusesService;
    constructor(statusesService: StatusesService);
    getAll(): Promise<Status[]>;
}
