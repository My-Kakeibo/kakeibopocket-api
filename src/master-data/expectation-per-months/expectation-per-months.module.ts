import { Module } from '@nestjs/common';
import { ExpectationPerMonthsService } from './expectation-per-months.service';
import { ExpectationPerMonthsController } from './expectation-per-months.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ExpectationPerMonthsController],
  providers: [ExpectationPerMonthsService],
  imports: [PrismaModule],
})
export class ExpectationPerMonthsModule {}
