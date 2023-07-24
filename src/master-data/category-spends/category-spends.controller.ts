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
import { CategorySpendsService } from './category-spends.service';
import { CreateCategorySpendDto } from './dto/create-category-spend.dto';
import { UpdateCategorySpendDto } from './dto/update-category-spend.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseEntity } from 'utils/entities';
import { QueryCategorySpendDto } from './dto';
import { CategorySpendEntity } from './entities';

@Controller({
  path: 'master-data/category-spends',
  version: ['1.0.0'],
})
@ApiTags('categori-spends')
export class CategorySpendsController {
  constructor(private readonly categorySpendsService: CategorySpendsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createCategorySpendDto: CreateCategorySpendDto) {
    const categorySpend = await this.categorySpendsService.create(
      createCategorySpendDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'created',
      data: new CategorySpendEntity(categorySpend),
    });
  }

  @Get()
  @ApiQuery({ type: QueryCategorySpendDto })
  async findAll(@Query() queryDto: QueryCategorySpendDto) {
    const categorySpends = await this.categorySpendsService.findAll(queryDto);

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      items: categorySpends.data.map(
        (categorySpend) => new CategorySpendEntity(categorySpend),
      ),
      meta: categorySpends.meta,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const categorySpend = await this.categorySpendsService.findOne(id);

    if (!categorySpend) {
      throw new NotFoundException(`CategorySpend with ${id} does not exist.`);
    }

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      data: new CategorySpendEntity(categorySpend),
    });
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateCategorySpendDto: UpdateCategorySpendDto,
  ) {
    const categorySpend = await this.categorySpendsService.update(
      id,
      updateCategorySpendDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'updated',
      data: new CategorySpendEntity(categorySpend),
    });
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const categorySpend = await this.categorySpendsService.remove(id);

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'deleted',
      data: new CategorySpendEntity(categorySpend),
    });
  }
}
