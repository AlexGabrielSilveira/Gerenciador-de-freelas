import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProjectDto } from "./dto/project.dto";
import { SocketGateway } from "src/socket/socket.gateway";

@Injectable()
export class ProjectService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly socketGateway: SocketGateway, 
    ) {}

    async createProject(createProjectDto: CreateProjectDto) {
        const project = await this.prismaService.project.create({
            data: {
                name: createProjectDto.name,
                description: createProjectDto.description,
                clientName: createProjectDto.clientName,
                clientEmail: createProjectDto.clientEmail,
                amountHourly: createProjectDto.amountHourly,
                timeWorked: createProjectDto.timeWorked,
                status: createProjectDto.status
            }
        })  
        
        if(project) {
            return this.socketGateway.sendProjectMessage("success","Project created successfully")
        } else {
            return this.socketGateway.sendProjectMessage("error","Project failed to create")
        }

    }
    async getProjects() {
        return await this.prismaService.project.findMany();
    }
}