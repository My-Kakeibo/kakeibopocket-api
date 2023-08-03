import { Test, TestingModule } from '@nestjs/testing';
import { SpendingRealitiesService } from './spending-realities.service';

describe('SpendingRealitiesService', () => {
  let service: SpendingRealitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpendingRealitiesService],
    }).compile();

    service = module.get<SpendingRealitiesService>(SpendingRealitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
