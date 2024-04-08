import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateNewsDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
  @IsString()
  date: string;
}

export class UpdateNewsDto extends PartialType(CreateNewsDto) {}
