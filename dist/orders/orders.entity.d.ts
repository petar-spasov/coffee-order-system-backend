import { User } from "../users/user.entity";
import { CoffeeSort } from "../coffeeSorts/coffeeSort.entity";
import { Status } from "../statuses/status.entity";
export declare class Orders {
    orderId: number;
    user: User;
    sort: CoffeeSort;
    amount: number;
    status: Status;
}
