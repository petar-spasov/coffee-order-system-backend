import { OrdersService } from "./orders.service";
import { Order } from "./order.entity";
import { OrderDto } from "./dto/Order.dto";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAllOrders(): Promise<OrderDto[]>;
    createOrder(order: Order): Promise<Order>;
    updateOrder(order: Order): Promise<Order>;
    deleteOrder(id: number): Promise<import("typeorm").DeleteResult>;
}
