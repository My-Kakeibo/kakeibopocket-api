import { ApiProperty } from '@nestjs/swagger';
import { CategoryBuy, CategorySpend, User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class CategoryBuyEntity implements CategoryBuy {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  @Exclude()
  haveUserId: string;

  @ApiProperty()
  haveUser: User;

  @ApiProperty()
  @Exclude()
  categorySpendId: string;

  @ApiProperty()
  categorySpend: CategorySpend;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  constructor(partial?: Partial<CategoryBuyEntity>) {
    Object.assign(this, partial);
  }
}
