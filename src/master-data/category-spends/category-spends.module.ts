import { Module } from '@nestjs/common';
import { CategorySpendsService } from './category-spends.service';
import { CategorySpendsController } from './category-spends.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CategorySpendsController],
  providers: [CategorySpendsService],
  imports: [PrismaModule],
})
export class CategorySpendsModule {}
