import { Order } from "./order.entity";
import { Repository } from "typeorm";
import { OrderDto } from "./dto/Order.dto";
export declare class OrdersService {
    private orderRepository;
    constructor(orderRepository: Repository<Order>);
    getAll(): Promise<OrderDto[]>;
    getById(orderId: number): Promise<Order>;
    saveOrder(order: Order): Promise<Order>;
    updateStatus(order: Order): Promise<Order>;
    deleteOrder(orderId: number): Promise<import("typeorm").DeleteResult>;
}
