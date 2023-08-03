import { PartialType } from '@nestjs/swagger';
import { CreateSpendingRealityDto } from './create-spending-reality.dto';

export class UpdateSpendingRealityDto extends PartialType(
  CreateSpendingRealityDto,
) {}
