import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetModule } from './asset/asset.module';
import { OrderModule } from './order/order.module';
import { PrismaModule } from './prisma/prisma.module';
import {PrismaService} from "./prisma/prisma/prisma.service";

@Module({
  imports: [AssetModule, OrderModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
