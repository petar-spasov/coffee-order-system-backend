import {Controller, Get, UseGuards} from '@nestjs/common';
import {CoffeeSortsService} from "./coffee-sorts.service";
import {CoffeeSort} from "./coffee-sort.entity";
import JwtAuthenticationGuard from "../auth/JwtAuth.guard";

@Controller('coffee-sorts')
export class CoffeeSortsController {

    constructor(private readonly coffeeSortsService: CoffeeSortsService) {
    }

    @Get()
    @UseGuards(JwtAuthenticationGuard)
    getAll(): Promise<CoffeeSort[]>{
        return this.coffeeSortsService.getCoffeeSorts();
    }
}
