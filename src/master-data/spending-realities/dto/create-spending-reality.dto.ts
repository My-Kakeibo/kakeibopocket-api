import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { IsString, IsNotEmpty, IsDecimal, IsDate } from 'class-validator';

export class CreateSpendingRealityDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty()
  amount: Decimal;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  dateSpend: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  categoryBuyId: string;
}
