import { Test, TestingModule } from '@nestjs/testing';
import { ExpectationPerMonthsService } from './expectation-per-months.service';

describe('ExpectationPerMonthsService', () => {
  let service: ExpectationPerMonthsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpectationPerMonthsService],
    }).compile();

    service = module.get<ExpectationPerMonthsService>(ExpectationPerMonthsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
