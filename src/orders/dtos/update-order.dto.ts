/* eslint-disable prettier/prettier */
import {
  IsOptional,
  IsNotEmpty,
  IsString,
  // Length,
  IsUUID,
} from 'class-validator';

export class UpdateOrderDTO {
  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;

  // @IsOptional()
  // @IsNotEmpty()
  // @IsString()
  // @Length(10, 20)
  // client: string;

  // @IsOptional()
  // @IsNotEmpty()
  // @IsString()
  // address: string;
}
