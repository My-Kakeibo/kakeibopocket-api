import { Module } from '@nestjs/common';
import { CategoryBuysService } from './category-buys.service';
import { CategoryBuysController } from './category-buys.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CategoryBuysController],
  providers: [CategoryBuysService],
  imports: [PrismaModule],
})
export class CategoryBuysModule {}
