import { Module } from '@nestjs/common';
import { SpendingExpectationsService } from './spending-expectations.service';
import { SpendingExpectationsController } from './spending-expectations.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [SpendingExpectationsController],
  providers: [SpendingExpectationsService],
  imports: [PrismaClient],
})
export class SpendingExpectationsModule {}
