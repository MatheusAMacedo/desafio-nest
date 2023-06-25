import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma/prisma.service";
import {CreateAssetDto} from "./dto/create-asset.dto";

@Injectable()
export class AssetService {
    constructor(private prismaService: PrismaService) {}

    all(){
        return this.prismaService.asset.findMany();
    }

    create(createAssetDto: CreateAssetDto){
        return this.prismaService.asset.create({
            data: createAssetDto
        });
    }

}
