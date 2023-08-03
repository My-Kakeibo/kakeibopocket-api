import { ApiProperty } from '@nestjs/swagger';
import { SpendingExpectation } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Exclude } from 'class-transformer';
import { CategoryBuyEntity } from 'src/master-data/category-buys/entities';
import { ExpectationPerMonthEntity } from 'src/master-data/expectation-per-months/entities';

export class SpendingExpectationEntity implements SpendingExpectation {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  budget: Decimal;

  @ApiProperty()
  startDateSpend: Date;

  @ApiProperty()
  endDateSpend: Date;

  @ApiProperty()
  @Exclude()
  categoryBuyId: string;

  @ApiProperty()
  categoryBuy: CategoryBuyEntity;

  @ApiProperty()
  @Exclude()
  expectationPerMonthId: string;

  @ApiProperty()
  expectationPerMonth: ExpectationPerMonthEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  constructor(partial: Partial<SpendingExpectationEntity>) {
    Object.assign(this, partial);

    if (partial.categoryBuy) {
      this.categoryBuy = new CategoryBuyEntity(partial.categoryBuy);
    }

    if (partial.expectationPerMonth) {
      this.expectationPerMonth = new ExpectationPerMonthEntity(
        partial.expectationPerMonth,
      );
    }
  }
}
