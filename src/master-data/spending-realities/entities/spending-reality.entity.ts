import { ApiProperty } from '@nestjs/swagger';
import { SpendingReality } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { CategoryBuyEntity } from 'src/master-data/category-buys/entities';

export class SpendingRealityEntity implements SpendingReality {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: Decimal;

  @ApiProperty()
  dateSpend: Date;

  @ApiProperty()
  categoryBuyId: string;

  @ApiProperty()
  categoryBuy: CategoryBuyEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  constructor(partial: Partial<SpendingRealityEntity>) {
    Object.assign(this, partial);

    if (this.categoryBuy) {
      this.categoryBuy = new CategoryBuyEntity(this.categoryBuy);
    }
  }
}
