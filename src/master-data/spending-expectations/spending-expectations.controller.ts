import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpStatus,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { SpendingExpectationsService } from './spending-expectations.service';
import { CreateSpendingExpectationDto } from './dto/create-spending-expectation.dto';
import { UpdateSpendingExpectationDto } from './dto/update-spending-expectation.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { ResponseEntity } from 'utils/entities';
import { QuerySpendingExpectationDto } from './dto';
import { SpendingExpectationEntity } from './entities';

@Controller('spending-expectations')
export class SpendingExpectationsController {
  constructor(
    private readonly spendingExpectationsService: SpendingExpectationsService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createSpendingExpectationDto: CreateSpendingExpectationDto,
  ) {
    const spendingExpectation = await this.spendingExpectationsService.create(
      createSpendingExpectationDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'created',
      data: new SpendingExpectationEntity(spendingExpectation),
    });
  }

  @Get()
  @ApiQuery({ type: QuerySpendingExpectationDto })
  async findAll(@Query() queryDto: QuerySpendingExpectationDto) {
    const spendingExpectations = await this.spendingExpectationsService.findAll(
      queryDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      items: spendingExpectations.data.map(
        (spendingExpectation) =>
          new SpendingExpectationEntity(spendingExpectation),
      ),
      meta: spendingExpectations.meta,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const spendingExpectation = await this.spendingExpectationsService.findOne(
      id,
    );

    if (!spendingExpectation) {
      throw new NotFoundException(`CategorySpend with ${id} does not exist.`);
    }

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      data: new SpendingExpectationEntity(spendingExpectation),
    });
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateSpendingExpectationDto: UpdateSpendingExpectationDto,
  ) {
    const spendingExpectation = await this.spendingExpectationsService.update(
      id,
      updateSpendingExpectationDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'updated',
      data: new SpendingExpectationEntity(spendingExpectation),
    });
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const spendingExpectation = await this.spendingExpectationsService.remove(
      id,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'deleted',
      data: new SpendingExpectationEntity(spendingExpectation),
    });
  }
}
