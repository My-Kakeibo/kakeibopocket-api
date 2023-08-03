import { Module } from '@nestjs/common';
import { SpendingRealitiesService } from './spending-realities.service';
import { SpendingRealitiesController } from './spending-realities.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SpendingRealitiesController],
  providers: [SpendingRealitiesService],
  imports: [PrismaModule],
})
export class SpendingRealitiesModule {}
