import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/project.dto";
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectDto: CreateProjectDto): Promise<void>;
    getProjects(): Promise<{
        name: string;
        description: string | null;
        clientName: string;
        clientEmail: string;
        amountHourly: number;
        timeWorked: number;
        status: import(".prisma/client").$Enums.Status;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
