import { ProjectService } from "./project.service";
import { CreateProjectDto } from "./dto/project.dto";
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    createProject(createProjectDto: CreateProjectDto): Promise<void>;
    getProjects(): Promise<{
        description: string | null;
        id: string;
        name: string;
        clientName: string;
        clientEmail: string;
        amountHourly: number;
        timeWorked: number;
        status: import(".prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    updateProjectStatus(name: string, status: string): Promise<void | {
        description: string | null;
        id: string;
        name: string;
        clientName: string;
        clientEmail: string;
        amountHourly: number;
        timeWorked: number;
        status: import(".prisma/client").$Enums.Status;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
