import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/project.dto";
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectDto: CreateProjectDto): Promise<{
        message: string;
    }>;
}
