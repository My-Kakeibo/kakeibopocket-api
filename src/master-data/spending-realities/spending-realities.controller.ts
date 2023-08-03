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
import { SpendingRealitiesService } from './spending-realities.service';
import { CreateSpendingRealityDto } from './dto/create-spending-reality.dto';
import { UpdateSpendingRealityDto } from './dto/update-spending-reality.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseEntity } from 'utils/entities';
import { QuerySpendingRealityDto } from './dto';
import { SpendingRealityEntity } from './entities';

@Controller({
  path: 'master-data/spending-realities',
  version: ['1.0.0'],
})
@ApiTags('spending-realities')
export class SpendingRealitiesController {
  constructor(
    private readonly spendingRealitiesService: SpendingRealitiesService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createSpendingRealityDto: CreateSpendingRealityDto) {
    const spendingReality = await this.spendingRealitiesService.create(
      createSpendingRealityDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'created',
      data: new SpendingRealityEntity(spendingReality),
    });
  }

  @Get()
  @ApiQuery({ type: QuerySpendingRealityDto })
  async findAll(@Query() queryDto: QuerySpendingRealityDto) {
    const spendingRealities = await this.spendingRealitiesService.findAll(
      queryDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      items: spendingRealities.data.map(
        (spendingReality) => new SpendingRealityEntity(spendingReality),
      ),
      meta: spendingRealities.meta,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const spendingReality = await this.spendingRealitiesService.findOne(id);

    if (!spendingReality) {
      throw new NotFoundException(`SpendingReality with ${id} does not exist.`);
    }

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      data: new SpendingRealityEntity(spendingReality),
    });
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateSpendingRealityDto: UpdateSpendingRealityDto,
  ) {
    const spendingReality = await this.spendingRealitiesService.update(
      id,
      updateSpendingRealityDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'updated',
      data: new SpendingRealityEntity(spendingReality),
    });
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const spendingReality = await this.spendingRealitiesService.remove(id);

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'deleted',
      data: new SpendingRealityEntity(spendingReality),
    });
  }
}
