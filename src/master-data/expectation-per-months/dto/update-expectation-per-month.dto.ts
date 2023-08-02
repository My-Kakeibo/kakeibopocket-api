import { PartialType } from '@nestjs/swagger';
import { CreateExpectationPerMonthDto } from './create-expectation-per-month.dto';

export class UpdateExpectationPerMonthDto extends PartialType(
  CreateExpectationPerMonthDto,
) {}
