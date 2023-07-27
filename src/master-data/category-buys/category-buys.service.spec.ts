import { Test, TestingModule } from '@nestjs/testing';
import { CategoryBuysService } from './category-buys.service';

describe('CategoryBuysService', () => {
  let service: CategoryBuysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryBuysService],
    }).compile();

    service = module.get<CategoryBuysService>(CategoryBuysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
