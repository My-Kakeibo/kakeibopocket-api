import { ApiProperty } from '@nestjs/swagger';
import { ExpectationPerMonth } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { Exclude } from 'class-transformer';
import { UserEntity } from 'src/master-data/users/entities';

export class ExpectationPerMonthEntity implements ExpectationPerMonth {
  @ApiProperty()
  id: string;

  @ApiProperty()
  income: Decimal;

  @ApiProperty()
  @Exclude()
  userId: string;

  @ApiProperty()
  user: UserEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  constructor(partial: Partial<ExpectationPerMonthEntity>) {
    Object.assign(this, partial);

    if (partial.user) {
      this.user = new UserEntity(partial.user);
    }
  }
}
