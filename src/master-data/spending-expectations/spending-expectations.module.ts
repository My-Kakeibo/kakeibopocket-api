import { Module } from '@nestjs/common';
import { SpendingExpectationsService } from './spending-expectations.service';
import { SpendingExpectationsController } from './spending-expectations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SpendingExpectationsController],
  providers: [SpendingExpectationsService],
  imports: [PrismaModule],
})
export class SpendingExpectationsModule {}
