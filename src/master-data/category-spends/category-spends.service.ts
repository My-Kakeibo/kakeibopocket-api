import { Injectable } from '@nestjs/common';
import { CreateCategorySpendDto } from './dto/create-category-spend.dto';
import { UpdateCategorySpendDto } from './dto/update-category-spend.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryCategorySpendDto } from './dto';
import { Prisma } from '@prisma/client';
import { createPaginator } from 'prisma-pagination';

@Injectable()
export class CategorySpendsService {
  constructor(private prisma: PrismaService) {}

  async create(createCategorySpendDto: CreateCategorySpendDto) {
    return await this.prisma.categorySpend.create({
      data: createCategorySpendDto,
    });
  }

  async findAll(queryDto: QueryCategorySpendDto) {
    // Query conditions
    const where: Prisma.CategorySpendWhereInput = {};
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

    return await paginate(this.prisma.categorySpend, {
      where,
      orderBy: queryDto.getOrderBy,
    });
  }

  findOne(id: string) {
    return this.prisma.categorySpend.findUnique({
      where: { id },
    });
  }

  update(id: string, updateCategorySpendDto: UpdateCategorySpendDto) {
    return this.prisma.categorySpend.update({
      where: { id },
      data: updateCategorySpendDto,
    });
  }

  remove(id: string) {
    return this.prisma.categorySpend.delete({ where: { id } });
  }
}
