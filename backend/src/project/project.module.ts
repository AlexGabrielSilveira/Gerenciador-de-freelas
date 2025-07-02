import { Module } from "@nestjs/common";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { PrismaModule } from "src/prisma/prisma.module";
import { SocketGateway } from "src/socket/socket.gateway";

@Module({
    imports: [PrismaModule],
    controllers: [ProjectController],
    providers: [ProjectService, SocketGateway],
})
export class ProjectModule {}
