import {IsString, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  public ProductName: string;
}

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  public ProductName: string;
}