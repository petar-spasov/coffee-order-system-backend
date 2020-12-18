import {Test, TestingModule} from '@nestjs/testing';
import {OrdersController} from './orders.controller';
import {getRepositoryToken} from "@nestjs/typeorm";
import {Order} from "./order.entity";
import {OrdersService} from "./orders.service";

describe('OrdersController', () => {
    let controller: OrdersController;
    let service: OrdersService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OrdersController],
            providers: [
                OrdersService,
                {
                    provide: getRepositoryToken(Order),
                    useValue: {
                        find: jest.fn().mockResolvedValue([
                            {
                                orderId: 1,
                                amount: 1,
                                status: {
                                    statusId: 1,
                                    status: "test",
                                },
                                user: {
                                    id: 1,
                                    name: "Test",
                                    lastName: "Test",
                                    email: "test",
                                },
                                sort: {
                                    sortId: 1,
                                    sortName: "test",
                                    price: 1,
                                    imageLink: "test",
                                }
                            }
                        ]),
                        save: jest.fn().mockResolvedValue({
                            orderId: 30,
                            amount: 2,
                            status: {
                                statusId: 1,
                                status: "test",
                            },
                            user: {
                                id: 1,
                                name: "Test",
                                lastName: "Test",
                                email: "test",
                            },
                            sort: {
                                sortId: 1,
                                sortName: "test",
                                price: 1,
                                imageLink: "test",
                            }
                        }),
                        delete: jest.fn().mockResolvedValue({
                            answer: 'deleted',
                        }),
                    }
                }
            ]
        }).compile();

        controller = module.get<OrdersController>(OrdersController);
        service = module.get<OrdersService>(OrdersService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return all orders', async () => {
        await expect(controller.getAllOrders()).resolves.toEqual([
            {
                orderId: 1,
                amount: 1,
                status: {
                    statusId: 1,
                    status: "test",
                },
                user: {
                    id: 1,
                    name: "Test",
                    lastName: "Test",
                    email: "test",
                },
                sort: {
                    sortId: 1,
                    sortName: "test",
                    price: 1,
                    imageLink: "test",
                }
            }])
    })

    it('should create an order', async () => {
        const orderToCreate: Order = {
            orderId: 30,
            amount: 2,
            status: {
                statusId: 1,
                status: "test",
            },
            // @ts-ignore -> Wird ignoriert, da dieser auch ein passwort zum benutzer erwartet, allerdings ist das beim Erstellen einer Bestellung nicht nötig
            user: {
                id: 1,
                name: "Test",
                lastName: "Test",
                email: "test",
            },
            sort: {
                sortId: 1,
                sortName: "test",
                price: 1,
                imageLink: "test",
            }
        };
        await expect(controller.createOrder(orderToCreate)).resolves.toEqual({
            orderId: 30,
            amount: 2,
            status: {
                statusId: 1,
                status: "test",
            },
            user: {
                id: 1,
                name: "Test",
                lastName: "Test",
                email: "test",
            },
            sort: {
                sortId: 1,
                sortName: "test",
                price: 1,
                imageLink: "test",
            }
        });
    })

    it('should delete order', async () => {
        await expect(controller.deleteOrder(1)).resolves.toEqual({answer: "deleted"});
    });

    it('should update order status', async () => {
        const orderToUpdate: Order = {
            orderId: 30,
            amount: 2,
            status: {
                statusId: 1,
                status: "test",
            },
            //@ts-ignore
            user: {
                id: 1,
                name: "Test",
                lastName: "Test",
                email: "test",
            },
            sort: {
                sortId: 1,
                sortName: "test",
                price: 1,
                imageLink: "test",
            }
        };
       await expect(controller.updateOrder(orderToUpdate)).resolves.toEqual({
           orderId: 30,
           amount: 2,
           status: {
               statusId: 1,
               status: "test",
           },
           user: {
               id: 1,
               name: "Test",
               lastName: "Test",
               email: "test",
           },
           sort: {
               sortId: 1,
               sortName: "test",
               price: 1,
               imageLink: "test",
           }
       });
    });
});
