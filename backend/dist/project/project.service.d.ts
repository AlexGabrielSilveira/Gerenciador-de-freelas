import { PrismaService } from "src/prisma/prisma.service";
import { CreateProjectDto } from "./dto/project.dto";
import { SocketGateway } from "src/socket/socket.gateway";
import { Status } from "@prisma/client";
export declare class ProjectService {
    private readonly prismaService;
    private readonly socketGateway;
    constructor(prismaService: PrismaService, socketGateway: SocketGateway);
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
    updateProjectStatus(name: string, status: Status): Promise<void | {
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
