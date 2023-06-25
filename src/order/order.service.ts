import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma/prisma.service";
import {CreateOrderDto} from "./dto/create-order.dto";

@Injectable()
export class OrderService {
    constructor(private prismaService: PrismaService) {}

    all(){
        return this.prismaService.order.findMany();
    }

    create(createOrderDto: CreateOrderDto){
        return this.prismaService.order.create({
            data: createOrderDto
        });
    }

}
