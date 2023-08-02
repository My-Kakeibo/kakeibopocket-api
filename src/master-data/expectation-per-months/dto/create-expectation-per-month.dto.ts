import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateExpectationPerMonthDto {
  @IsDecimal()
  @IsNotEmpty()
  @ApiProperty()
  income: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  userId: string;
}
