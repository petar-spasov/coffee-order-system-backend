import {Module} from '@nestjs/common';
import {CoffeeSortsController} from './coffee-sorts.controller';
import {CoffeeSortsService} from './coffee-sorts.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/user.entity";
import {CoffeeSort} from "./coffee-sort.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([CoffeeSort]),
    ],
    controllers: [CoffeeSortsController],
    providers: [CoffeeSortsService]
})
export class CoffeeSortsModule {
}
