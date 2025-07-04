import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProjectDto } from "./dto/project.dto";
import { SocketGateway } from "src/socket/socket.gateway";
import { Status } from "@prisma/client";

@Injectable()
export class ProjectService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly socketGateway: SocketGateway, 
    ) {}

    async createProject(createProjectDto: CreateProjectDto) {
        const project = await this.prismaService.project.create({
            data: {
                name: createProjectDto.name.toLowerCase(),
                description: createProjectDto.description?.toLowerCase(),
                clientName: createProjectDto.clientName.toLowerCase(),
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
    async updateProjectStatus(name: string, status: Status) {

        const projet = await this.prismaService.project.findUnique({
            where: { name }
        })
         if(projet) {

            const updatedProject = await this.prismaService.project.update({
                where: { name },
                data: { status }
            });

            if (updatedProject) {
                this.socketGateway.sendProjectMessage("success", `Project status updated to ${status}`);
                console.log(`Project status updated to ${status}`);
                return updatedProject;
            }
        }
        if (!projet) {
            console.error(`Project with name ${name} not found`);
            return this.socketGateway.sendProjectMessage("error", "Project not found");
        }

       
    }
}