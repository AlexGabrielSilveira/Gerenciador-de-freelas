import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateProjectDto } from "./dto/project.dto";

@Injectable()
export class ProjectService {
    constructor(private readonly prismaService: PrismaService) {}

    async createProject(createProjectDto: CreateProjectDto) {
        await this.prismaService.project.create({
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

        return {
            message: "Project created successfully"
        };
    }
}