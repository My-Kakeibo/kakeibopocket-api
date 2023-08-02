import { Injectable } from '@nestjs/common';
import { CreateExpectationPerMonthDto } from './dto/create-expectation-per-month.dto';
import { UpdateExpectationPerMonthDto } from './dto/update-expectation-per-month.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { QueryExpectationPerMonthDto } from './dto';
import { Prisma } from '@prisma/client';
import { createPaginator } from 'prisma-pagination';

@Injectable()
export class ExpectationPerMonthsService {
  constructor(private prisma: PrismaService) {}

  async create(createExpectationPerMonthDto: CreateExpectationPerMonthDto) {
    return await this.prisma.expectationPerMonth.create({
      data: createExpectationPerMonthDto,
    });
  }

  async findAll(queryDto: QueryExpectationPerMonthDto) {
    // Query conditions
    const where: Prisma.ExpectationPerMonthWhereInput = {
      income: queryDto.income,
    };

    const paginate = createPaginator({
      perPage: queryDto.perPage,
      page: queryDto.page,
    });

    return await paginate(this.prisma.expectationPerMonth, {
      where,
      orderBy: queryDto.getOrderBy,
    });
  }

  findOne(id: string) {
    return this.prisma.expectationPerMonth.findUnique({
      where: { id },
    });
  }

  update(
    id: string,
    updateExpectationPerMonthDto: UpdateExpectationPerMonthDto,
  ) {
    return this.prisma.expectationPerMonth.update({
      where: { id },
      data: updateExpectationPerMonthDto,
    });
  }

  remove(id: string) {
    return this.prisma.expectationPerMonth.delete({ where: { id } });
  }
}
