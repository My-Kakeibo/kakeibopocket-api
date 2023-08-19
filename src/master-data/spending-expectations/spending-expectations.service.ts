import { Injectable } from '@nestjs/common';
import { CreateSpendingExpectationDto } from './dto/create-spending-expectation.dto';
import { UpdateSpendingExpectationDto } from './dto/update-spending-expectation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { createPaginator } from 'prisma-pagination';
import { QuerySpendingExpectationDto } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class SpendingExpectationsService {
  constructor(private prisma: PrismaService) {}

  async create(createSpendingExpectationDto: CreateSpendingExpectationDto) {
    return await this.prisma.spendingExpectation.create({
      data: createSpendingExpectationDto,
    });
  }

  async findAll(queryDto: QuerySpendingExpectationDto) {
    // Query conditions
    const where: Prisma.SpendingExpectationWhereInput = {};
    if (queryDto.search) {
      where.OR = [
        {
          name: { contains: queryDto.search, mode: 'insensitive' },
        },
      ];
    }

    const paginate = createPaginator({
      perPage: queryDto.perPage,
      page: queryDto.page,
    });

    return await paginate(this.prisma.spendingExpectation, {
      where,
      orderBy: queryDto.getOrderBy,
    });
  }

  findOne(id: string) {
    return this.prisma.spendingExpectation.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateSpendingExpectationDto: UpdateSpendingExpectationDto,
  ) {
    return this.prisma.spendingExpectation.update({
      where: { id },
      data: updateSpendingExpectationDto,
    });
  }

  remove(id: string) {
    return this.prisma.spendingExpectation.delete({ where: { id } });
  }
}
