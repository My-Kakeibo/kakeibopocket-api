import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  @Exclude()
  password: string;

  @ApiProperty()
  fullname: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  deletedAt: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
