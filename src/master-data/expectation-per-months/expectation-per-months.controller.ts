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
import { ExpectationPerMonthsService } from './expectation-per-months.service';
import { CreateExpectationPerMonthDto } from './dto/create-expectation-per-month.dto';
import { UpdateExpectationPerMonthDto } from './dto/update-expectation-per-month.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponseEntity } from 'utils/entities';
import { ExpectationPerMonthEntity } from './entities';
import { QueryExpectationPerMonthDto } from './dto';

@Controller({
  path: 'master-data/expectation-per-months',
  version: ['1.0.0'],
})
@ApiTags('expectation-per-months')
export class ExpectationPerMonthsController {
  constructor(
    private readonly expectationPerMonthsService: ExpectationPerMonthsService,
  ) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async create(
    @Body() createExpectationPerMonthDto: CreateExpectationPerMonthDto,
  ) {
    const expectationPerMonth = await this.expectationPerMonthsService.create(
      createExpectationPerMonthDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'created',
      data: new ExpectationPerMonthEntity(expectationPerMonth),
    });
  }

  @Get()
  @ApiQuery({ type: QueryExpectationPerMonthDto })
  async findAll(@Query() queryDto: QueryExpectationPerMonthDto) {
    const expectationPerMonth = await this.expectationPerMonthsService.findAll(
      queryDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      items: expectationPerMonth.data.map(
        (expectationPerMonth) =>
          new ExpectationPerMonthEntity(expectationPerMonth),
      ),
      meta: expectationPerMonth.meta,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const expectationPerMonth = await this.expectationPerMonthsService.findOne(
      id,
    );

    if (!expectationPerMonth) {
      throw new NotFoundException(
        `ExpectationPerMonth with ${id} does not exist.`,
      );
    }

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'success',
      data: new ExpectationPerMonthEntity(expectationPerMonth),
    });
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateExpectationPerMonthDto: UpdateExpectationPerMonthDto,
  ) {
    const expectationPerMonth = await this.expectationPerMonthsService.update(
      id,
      updateExpectationPerMonthDto,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'updated',
      data: new ExpectationPerMonthEntity(expectationPerMonth),
    });
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async remove(@Param('id') id: string) {
    const expectationPerMonth = await this.expectationPerMonthsService.remove(
      id,
    );

    return new ResponseEntity({
      statusCode: HttpStatus.OK,
      message: 'deleted',
      data: new ExpectationPerMonthEntity(expectationPerMonth),
    });
  }
}
