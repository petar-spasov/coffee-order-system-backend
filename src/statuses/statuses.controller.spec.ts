import {Test, TestingModule} from '@nestjs/testing';
import {StatusesController} from './statuses.controller';
import {StatusesService} from "./statuses.service";
import {getRepositoryToken} from "@nestjs/typeorm";
import {Status} from "./status.entity";

describe('StatusesController', () => {
    let controller: StatusesController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                StatusesService,
                {
                    provide: getRepositoryToken(Status),
                    useValue: {
                        find: jest.fn().mockResolvedValue(
                            [
                                {
                                    statusId: 1,
                                    status: "In Bearbeitung"
                                },
                                {
                                    statusId: 2,
                                    status: "Bestellt"
                                },
                                {
                                    statusId: 3,
                                    status: "In Lieferung"
                                },
                                {
                                    statusId: 4,
                                    status: "Storniert"
                                }
                            ])
                    }
                }
            ],
            controllers: [StatusesController],
        }).compile();

        controller = module.get<StatusesController>(StatusesController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should get all statuses', () => {
        expect(controller.getAll()).resolves.toEqual([
            {
                statusId: 1,
                status: "In Bearbeitung"
            },
            {
                statusId: 2,
                status: "Bestellt"
            },
            {
                statusId: 3,
                status: "In Lieferung"
            },
            {
                statusId: 4,
                status: "Storniert"
            }
        ]);
    });
});
