import { Test, TestingModule } from '@nestjs/testing';
import { SpendingRealitiesController } from './spending-realities.controller';
import { SpendingRealitiesService } from './spending-realities.service';

describe('SpendingRealitiesController', () => {
  let controller: SpendingRealitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendingRealitiesController],
      providers: [SpendingRealitiesService],
    }).compile();

    controller = module.get<SpendingRealitiesController>(
      SpendingRealitiesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
