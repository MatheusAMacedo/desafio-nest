import {Body, Controller, Get, Post} from '@nestjs/common';
import { OrderService } from './order.service';
import {CreateOrderDto} from "./dto/create-order.dto";

@Controller('api/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  listOrders() {
    return this.orderService.all();
  }
}

