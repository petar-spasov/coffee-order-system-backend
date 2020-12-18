import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {CoffeeSort} from "./coffee-sort.entity";
import {Repository} from "typeorm";

@Injectable()
export class CoffeeSortsService {

    constructor(
        @InjectRepository(CoffeeSort)
        private coffeeSortRepository: Repository<CoffeeSort>,
    ) {
    }

    public async getCoffeeSorts(): Promise<CoffeeSort[]> {
        return await this.coffeeSortRepository.find();
    }
}
