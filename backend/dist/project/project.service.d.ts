import { PrismaService } from "src/prisma/prisma.service";
import { CreateProjectDto } from "./dto/project.dto";
import { SocketGateway } from "src/socket/socket.gateway";
export declare class ProjectService {
    private readonly prismaService;
    private readonly socketGateway;
    constructor(prismaService: PrismaService, socketGateway: SocketGateway);
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
