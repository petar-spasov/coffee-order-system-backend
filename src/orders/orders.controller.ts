import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import {OrdersService} from "./orders.service";
import {Order} from "./order.entity";
import JwtAuthenticationGuard from "../auth/JwtAuth.guard";
import {OrderDto} from "./dto/Order.dto";

@Controller('orders')
export class OrdersController {

    constructor(
        private readonly ordersService: OrdersService,
    ) {
    }

    @Get()
    @UseGuards(JwtAuthenticationGuard)
    async getAllOrders(): Promise<OrderDto[]> {
        return this.ordersService.getAll();
    }
    //
    // @Get('/:id')
    // @UseGuards(JwtAuthenticationGuard)
    // async getOrderById(@Param('id') id: number): Promise<Order> {
    //     return this.ordersService.getById(id);
    // }

    @Post()
    @UseGuards(JwtAuthenticationGuard)
    async createOrder(@Body() order: Order): Promise<Order> {
        return this.ordersService.saveOrder(order);
    }

    @Put()
    @UseGuards(JwtAuthenticationGuard)
    async updateOrder(@Body() order: Order): Promise<Order> {
        return this.ordersService.saveOrder(order);
    }

    @Delete('/:id')
    @UseGuards(JwtAuthenticationGuard)
    async deleteOrder(@Param('id') id: number) {
        return this.ordersService.deleteOrder(id);
    }

}
