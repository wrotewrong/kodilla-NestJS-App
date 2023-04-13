/* eslint-disable prettier/prettier */
import {
  IsNotEmpty,
  IsString,
  //  Length,
  IsUUID,
} from 'class-validator';

export class CreateOrderDTO {
  @IsNotEmpty()
  @IsUUID()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsUUID()
  @IsString()
  clientId: string;

  // @IsNotEmpty()
  // @IsString()
  // @Length(10, 20)
  // client: string;

  // @IsNotEmpty()
  // @IsString()
  // address: string;
}
