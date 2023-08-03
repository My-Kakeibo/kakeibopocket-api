import { PartialType } from '@nestjs/swagger';
import { CreateSpendingExpectationDto } from './create-spending-expectation.dto';

export class UpdateSpendingExpectationDto extends PartialType(
  CreateSpendingExpectationDto,
) {}
