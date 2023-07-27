import { Injectable } from '@nestjs/common';
import { CreateCategoryBuyDto } from './dto/create-category-buy.dto';
import { UpdateCategoryBuyDto } from './dto/update-category-buy.dto';

@Injectable()
export class CategoryBuysService {
  create(createCategoryBuyDto: CreateCategoryBuyDto) {
    return 'This action adds a new categoryBuy';
  }

  findAll() {
    return `This action returns all categoryBuys`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryBuy`;
  }

  update(id: number, updateCategoryBuyDto: UpdateCategoryBuyDto) {
    return `This action updates a #${id} categoryBuy`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryBuy`;
  }
}
