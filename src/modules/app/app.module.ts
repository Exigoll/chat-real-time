import { Module } from "@nestjs/common";
import { AppGateway } from "app/app.gateway";
import { PrismaService } from "prisma.service";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppGateway, PrismaService],
})
export class AppModule {}
