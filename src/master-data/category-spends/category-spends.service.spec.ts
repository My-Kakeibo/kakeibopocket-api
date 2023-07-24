import { Test, TestingModule } from '@nestjs/testing';
import { CategorySpendsService } from './category-spends.service';

describe('CategorySpendsService', () => {
  let service: CategorySpendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorySpendsService],
    }).compile();

    service = module.get<CategorySpendsService>(CategorySpendsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
