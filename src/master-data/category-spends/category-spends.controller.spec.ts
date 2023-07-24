import { Test, TestingModule } from '@nestjs/testing';
import { CategorySpendsController } from './category-spends.controller';
import { CategorySpendsService } from './category-spends.service';

describe('CategorySpendsController', () => {
  let controller: CategorySpendsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorySpendsController],
      providers: [CategorySpendsService],
    }).compile();

    controller = module.get<CategorySpendsController>(CategorySpendsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
