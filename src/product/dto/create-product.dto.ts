import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;
  @IsString()
  price: number;
  @IsString()
  date: string;
}
export class UpdateProductDto extends PartialType(CreateProductDto) {}
