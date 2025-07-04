import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/project.dto";
import { Status } from "@prisma/client";

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) {}

    @Post('create')
    async createProject(@Body() createProjectDto: CreateProjectDto) {
        return await this.projectService.createProject(createProjectDto);
    }
    @Get('all')
    async getProjects() {
        return await this.projectService.getProjects();
    }
    @Put(':name/status/:status')
    async updateProjectStatus(@Param('name') name: string, @Param('status') status: string) {
        const parsedStatus = Status[status.toUpperCase() as keyof typeof Status];
        return await this.projectService.updateProjectStatus(name, parsedStatus);
    }
}