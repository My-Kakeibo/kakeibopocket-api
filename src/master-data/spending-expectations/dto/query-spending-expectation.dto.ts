import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { OrderType, PaginatorLimit, PaginatorLimitArray } from 'utils/enums';
import { toNumber } from 'utils/helpers';
import { InArray } from 'utils/validators';
import { OrderBy } from '../enums';

export class QuerySpendingExpectationDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  page?: number;

  @InArray(PaginatorLimitArray)
  @IsOptional()
  perPage?: PaginatorLimit;

  @IsEnum(OrderBy)
  @IsOptional()
  orderBy?: OrderBy;

  @IsEnum(OrderType)
  @IsOptional()
  orderType?: OrderType;

  @IsOptional()
  search?: string;

  get getOrderBy() {
    if (this.orderBy) {
      return {
        [this.orderBy]: this.orderType ?? OrderType.DESC,
      };
    }

    return {
      [OrderBy.UPDATEDAT]: OrderType.DESC,
    };
  }
}
