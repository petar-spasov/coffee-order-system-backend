import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Order} from "./order.entity";
import {Repository} from "typeorm";
import {mapUserToUserDto} from "../helper/mapper";
import {OrderDto} from "./dto/Order.dto";

@Injectable()
export class OrdersService {

    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
    ) {
    }

    async getAll(): Promise<OrderDto[]> {
        const orders: Order[] = await this.orderRepository.find({
            relations: ["user", "status", "sort"]
        });
        const ordersDto: Array<OrderDto> = new Array();
        orders.map(order => {
            ordersDto.push({
                ...order,
                user: mapUserToUserDto(order.user),
            });
        })
        return ordersDto;
    }

    async getById(orderId: number): Promise<Order> {
        return await this.orderRepository.findOne({
            where: {
                orderId
            },
            relations: ["user", "status", "sort"]
        });
    }

    async saveOrder(order: Order): Promise<Order> {
        return await this.orderRepository.save(order);
    }

    async updateStatus(order: Order): Promise<Order> {
        return await this.orderRepository.save(order);
    }

    async deleteOrder(orderId: number) {
        return await this.orderRepository.delete({orderId});
    }

}
