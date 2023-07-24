import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './master-data/users/users.module';
import { AuthModule } from './auth/auth.module';
import { CategorySpendsModule } from './master-data/category-spends/category-spends.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, CategorySpendsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
