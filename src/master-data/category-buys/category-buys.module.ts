import { Module } from '@nestjs/common';
import { CategoryBuysService } from './category-buys.service';
import { CategoryBuysController } from './category-buys.controller';

@Module({
  controllers: [CategoryBuysController],
  providers: [CategoryBuysService]
})
export class CategoryBuysModule {}
