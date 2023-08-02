import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  NotFoundException,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CategoryBuysService } from './category-buys.service';
import { CreateCategoryBuyDto } from './dto/create-category-buy.dto';
import { UpdateCategoryBuyDto } from './dto/update-category-buy.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseEntity } from 'utils/entities';
import { QueryCategoryBuyDto } from './dto';
import { CategoryBuyEntity } from './entities';

@Controller({
  path: 'master-data/category-buys',
  version: ['1.0.0'],
})
@ApiTags('category-buys')
export class CategoryBuysController {
  constructor(private readonly categoryBuysService: CategoryBuysService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCategoryBuyDto: CreateCategoryBuyDto) {
    const categoryBuy = await this.categoryBuysService.create(
      createCategoryBuyDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'created',
      data: new CategoryBuyEntity(categoryBuy),
    });
  }

  @Get()
  @ApiQuery({ type: QueryCategoryBuyDto })
  async findAll(@Query() queryDto: QueryCategoryBuyDto) {
    const categoryBuys = await this.categoryBuysService.findAll(queryDto);

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      items: categoryBuys.data.map(
        (categoryBuy) => new CategoryBuyEntity(categoryBuy),
      ),
      meta: categoryBuys.meta,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const categoryBuy = await this.categoryBuysService.findOne(id);

    if (!categoryBuy) {
      throw new NotFoundException(`CategoryBuy with ${id} does not exist.`);
    }

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      data: new CategoryBuyEntity(categoryBuy),
    });
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateCategoryBuyDto: UpdateCategoryBuyDto,
  ) {
    const categoryBuy = await this.categoryBuysService.update(
      id,
      updateCategoryBuyDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'updated',
      data: new CategoryBuyEntity(categoryBuy),
    });
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const categoryBuy = await this.categoryBuysService.remove(id);

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'deleted',
      data: new CategoryBuyEntity(categoryBuy),
    });
  }
}
