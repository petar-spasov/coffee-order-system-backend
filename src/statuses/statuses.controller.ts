import {Controller, Get, UseGuards} from '@nestjs/common';
import {StatusesService} from "./statuses.service";
import {Status} from "./status.entity";
import JwtAuthenticationGuard from "../auth/JwtAuth.guard";

@Controller('statuses')
export class StatusesController {

    constructor(private readonly statusesService: StatusesService){}

    @Get()
    @UseGuards(JwtAuthenticationGuard)
    getAll(): Promise<Status[]> {
        return this.statusesService.getStatuses();
    }
}
