import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryBuysService } from './category-buys.service';
import { CreateCategoryBuyDto } from './dto/create-category-buy.dto';
import { UpdateCategoryBuyDto } from './dto/update-category-buy.dto';

@Controller('category-buys')
export class CategoryBuysController {
  constructor(private readonly categoryBuysService: CategoryBuysService) {}

  @Post()
  create(@Body() createCategoryBuyDto: CreateCategoryBuyDto) {
    return this.categoryBuysService.create(createCategoryBuyDto);
  }

  @Get()
  findAll() {
    return this.categoryBuysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryBuysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryBuyDto: UpdateCategoryBuyDto) {
    return this.categoryBuysService.update(+id, updateCategoryBuyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryBuysService.remove(+id);
  }
}
