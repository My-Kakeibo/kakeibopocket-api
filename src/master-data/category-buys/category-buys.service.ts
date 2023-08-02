import { Injectable } from '@nestjs/common';
import { CreateCategoryBuyDto } from './dto/create-category-buy.dto';
import { UpdateCategoryBuyDto } from './dto/update-category-buy.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryCategoryBuyDto } from './dto';
import { Prisma } from '@prisma/client';
import { createPaginator } from 'prisma-pagination';

@Injectable()
export class CategoryBuysService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoryBuyDto: CreateCategoryBuyDto) {
    return await this.prisma.categoryBuy.create({
      data: createCategoryBuyDto,
    });
  }

  async findAll(queryDto: QueryCategoryBuyDto) {
    // Query conditions
    const where: Prisma.CategoryBuyWhereInput = {};
    if (queryDto.search) {
      where.OR = [
        { name: { contains: queryDto.search } },
        { description: { contains: queryDto.search } },
      ];
    }

    const paginate = createPaginator({
      perPage: queryDto.perPage,
      page: queryDto.page,
    });

    return await paginate(this.prisma.categoryBuy, {
      where,
      orderBy: queryDto.getOrderBy,
    });
  }

  findOne(id: string) {
    return this.prisma.categoryBuy.findUnique({
      where: { id },
    });
  }

  update(id: string, updateCategoryBuyDto: UpdateCategoryBuyDto) {
    return this.prisma.categoryBuy.update({
      where: { id },
      data: updateCategoryBuyDto,
    });
  }

  remove(id: string) {
    return this.prisma.categoryBuy.delete({ where: { id } });
  }
}
