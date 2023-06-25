import { Controller, Get, Post, Body } from '@nestjs/common';
import {AssetService} from "./asset.service";
import {CreateAssetDto} from "./dto/create-asset.dto";

@Controller('api/assets')
export class AssetController {
  constructor(private assetService: AssetService) {}

  @Get()
  listAssets() {
    return this.assetService.all();
  }

  @Post()
  createAsset(@Body() createAssetDto: CreateAssetDto) {
    return this.assetService.create(createAssetDto);
  }
}
