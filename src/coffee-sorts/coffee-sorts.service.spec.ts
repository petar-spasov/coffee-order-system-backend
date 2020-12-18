import { Test, TestingModule } from '@nestjs/testing';
import { CoffeeSortsService } from './coffee-sorts.service';
import {CoffeeSort} from "./coffee-sort.entity";

describe('CoffeeSortsService', () => {
  let service: CoffeeSortsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeeSortsService],
    }).compile();

    service = module.get<CoffeeSortsService>(CoffeeSortsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
