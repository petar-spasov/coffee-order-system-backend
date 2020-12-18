import { UserDto } from "../../users/dto/User.dto";
import { CoffeeSort } from "../../coffee-sorts/coffee-sort.entity";
import { Status } from "../../statuses/status.entity";
export declare class OrderDto {
    orderId: number;
    user: UserDto;
    sort: CoffeeSort;
    amount: number;
    status: Status;
}
