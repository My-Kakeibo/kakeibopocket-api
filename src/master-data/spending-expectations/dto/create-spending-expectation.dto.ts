import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { IsString, IsNotEmpty, IsDecimal, IsDate } from 'class-validator';

export class CreateSpendingExpectationDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty()
  budget: Decimal;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  startDateSpend: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  endDateSpend: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  categoryBuyId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  expectationPerMonthId: string;
}
