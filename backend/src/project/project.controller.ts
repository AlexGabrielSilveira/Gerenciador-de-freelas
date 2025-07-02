import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/project.dto";

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
}