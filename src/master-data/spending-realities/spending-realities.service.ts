import { Injectable } from '@nestjs/common';
import { CreateSpendingRealityDto } from './dto/create-spending-reality.dto';
import { UpdateSpendingRealityDto } from './dto/update-spending-reality.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { createPaginator } from 'prisma-pagination';
import { Prisma } from '@prisma/client';
import { QuerySpendingRealityDto } from './dto';

@Injectable()
export class SpendingRealitiesService {
  constructor(private prisma: PrismaService) {}

  async create(createSpendingRealityDto: CreateSpendingRealityDto) {
    return await this.prisma.spendingReality.create({
      data: createSpendingRealityDto,
    });
  }

  async findAll(queryDto: QuerySpendingRealityDto) {
    // Query conditions
    const where: Prisma.SpendingRealityWhereInput = {};
    if (queryDto.search) {
      where.OR = [{ name: { contains: queryDto.search, mode: 'insensitive' } }];
    }

    const paginate = createPaginator({
      perPage: queryDto.perPage,
      page: queryDto.page,
    });

    return await paginate(this.prisma.spendingReality, {
      where,
      orderBy: queryDto.getOrderBy,
    });
  }

  findOne(id: string) {
    return this.prisma.spendingReality.findUnique({
      where: { id },
    });
  }

  update(id: string, updateSpendingRealityDto: UpdateSpendingRealityDto) {
    return this.prisma.spendingReality.update({
      where: { id },
      data: updateSpendingRealityDto,
    });
  }

  remove(id: string) {
    return this.prisma.spendingReality.delete({ where: { id } });
  }
}
