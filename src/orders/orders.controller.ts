import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  NotFoundException,
  Delete,
  Post,
  Put,
  Body,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {
    this.ordersService = ordersService;
  }

  @Get('/')
  public getAll(): any {
    return this.ordersService.getAll();
  }

  @Get('/:id')
  public getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const order = this.ordersService.getById(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    if (!this.ordersService.getById(id)) {
      throw new NotFoundException('Order not found');
    }

    this.ordersService.delete(id);
    return { success: true };
  }

  @Post('/')
  create(@Body() orderData: CreateOrderDTO) {
    return this.ordersService.create(orderData);
  }

  @Put('/:id')
  update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() orderData: UpdateOrderDTO,
  ) {
    if (!this.ordersService.getById(id)) {
      throw new NotFoundException('Order not found');
    }

    this.ordersService.updateById(id, orderData);
    return { success: true };
  }
}
