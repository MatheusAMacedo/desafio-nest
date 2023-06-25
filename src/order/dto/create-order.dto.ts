import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
    id?: string;

    @IsNotEmpty()
    asset_id: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;
}

