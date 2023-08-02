import { Test, TestingModule } from '@nestjs/testing';
import { ExpectationPerMonthsController } from './expectation-per-months.controller';
import { ExpectationPerMonthsService } from './expectation-per-months.service';

describe('ExpectationPerMonthsController', () => {
  let controller: ExpectationPerMonthsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpectationPerMonthsController],
      providers: [ExpectationPerMonthsService],
    }).compile();

    controller = module.get<ExpectationPerMonthsController>(ExpectationPerMonthsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
