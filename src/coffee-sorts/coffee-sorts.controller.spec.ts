import {Test, TestingModule} from '@nestjs/testing';
import {CoffeeSortsController} from './coffee-sorts.controller';
import {CoffeeSortsService} from "./coffee-sorts.service";
import {getRepositoryToken} from "@nestjs/typeorm";
import {CoffeeSort} from "./coffee-sort.entity";

describe('CoffeeSortsController', () => {
    let controller: CoffeeSortsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CoffeeSortsService,
                {
                    provide: getRepositoryToken(CoffeeSort),
                    useValue: {
                        find: jest.fn().mockResolvedValue([
                            {
                                orderId: 12,
                                amount: 2,
                                user: {
                                    id: 2,
                                    name: "Petar",
                                    lastName: "Spasov",
                                    email: "peta1r.spasov@abv.bg"
                                },
                                status: {
                                    statusId: 1,
                                    status: "In Bearbeitung"
                                },
                                sort: {
                                    sortId: 3,
                                    sortName: "Ristretto Intenso",
                                    price: 21,
                                    imageLink: "https://www.nespresso.com/shared_res/nc2/free_html/int/b2b-capsule-plp/img/C-0124-quickViewMediaFormat.png"
                                }
                            }
                        ]),
                    }
                }
            ],
            controllers: [CoffeeSortsController],
        }).compile();

        controller = module.get<CoffeeSortsController>(CoffeeSortsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return all sorts', () => {
        expect(controller.getAll()).resolves.toEqual([
            {
                orderId: 12,
                amount: 2,
                user: {
                    id: 2,
                    name: "Petar",
                    lastName: "Spasov",
                    email: "peta1r.spasov@abv.bg"
                },
                status: {
                    statusId: 1,
                    status: "In Bearbeitung"
                },
                sort: {
                    sortId: 3,
                    sortName: "Ristretto Intenso",
                    price: 21,
                    imageLink: "https://www.nespresso.com/shared_res/nc2/free_html/int/b2b-capsule-plp/img/C-0124-quickViewMediaFormat.png"
                }
            }
        ]);
    })
});
