import { CoffeeSortsService } from "./coffee-sorts.service";
import { CoffeeSort } from "./coffee-sort.entity";
export declare class CoffeeSortsController {
    private readonly coffeeSortsService;
    constructor(coffeeSortsService: CoffeeSortsService);
    getAll(): Promise<CoffeeSort[]>;
}
