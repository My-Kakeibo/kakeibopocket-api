import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryBuyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  haveUserId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  categorySpendId: string;
}
