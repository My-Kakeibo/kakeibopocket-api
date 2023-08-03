import { Test, TestingModule } from '@nestjs/testing';
import { SpendingExpectationsController } from './spending-expectations.controller';
import { SpendingExpectationsService } from './spending-expectations.service';

describe('SpendingExpectationsController', () => {
  let controller: SpendingExpectationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendingExpectationsController],
      providers: [SpendingExpectationsService],
    }).compile();

    controller = module.get<SpendingExpectationsController>(SpendingExpectationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
