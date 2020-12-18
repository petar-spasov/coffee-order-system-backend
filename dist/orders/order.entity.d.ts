import { User } from "../users/user.entity";
import { CoffeeSort } from "../coffee-sorts/coffee-sort.entity";
import { Status } from "../statuses/status.entity";
export declare class Order {
    orderId: number;
    user: User;
    sort: CoffeeSort;
    amount: number;
    status: Status;
}
