import { Test, TestingModule } from '@nestjs/testing';
import { SpendingExpectationsService } from './spending-expectations.service';

describe('SpendingExpectationsService', () => {
  let service: SpendingExpectationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpendingExpectationsService],
    }).compile();

    service = module.get<SpendingExpectationsService>(SpendingExpectationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
