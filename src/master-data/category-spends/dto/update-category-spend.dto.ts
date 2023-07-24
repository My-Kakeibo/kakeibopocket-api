import { PartialType } from '@nestjs/swagger';
import { CreateCategorySpendDto } from './create-category-spend.dto';

export class UpdateCategorySpendDto extends PartialType(CreateCategorySpendDto) {}
