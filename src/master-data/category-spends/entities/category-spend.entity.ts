import { ApiProperty } from '@nestjs/swagger';
import { CategorySpend } from '@prisma/client';

export class CategorySpendEntity implements CategorySpend {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  constructor(partial?: Partial<CategorySpendEntity>) {
    Object.assign(this, partial);
  }
}
