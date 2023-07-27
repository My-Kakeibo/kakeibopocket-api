import { PartialType } from '@nestjs/swagger';
import { CreateCategoryBuyDto } from './create-category-buy.dto';

export class UpdateCategoryBuyDto extends PartialType(CreateCategoryBuyDto) {}
