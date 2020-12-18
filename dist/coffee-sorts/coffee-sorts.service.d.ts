import { CoffeeSort } from "./coffee-sort.entity";
import { Repository } from "typeorm";
export declare class CoffeeSortsService {
    private coffeeSortRepository;
    constructor(coffeeSortRepository: Repository<CoffeeSort>);
    getCoffeeSorts(): Promise<CoffeeSort[]>;
}
