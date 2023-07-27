import { Test, TestingModule } from '@nestjs/testing';
import { CategoryBuysController } from './category-buys.controller';
import { CategoryBuysService } from './category-buys.service';

describe('CategoryBuysController', () => {
  let controller: CategoryBuysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryBuysController],
      providers: [CategoryBuysService],
    }).compile();

    controller = module.get<CategoryBuysController>(CategoryBuysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
