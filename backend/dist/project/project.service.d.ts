import { PrismaService } from "src/prisma/prisma.service";
import { CreateProjectDto } from "./dto/project.dto";
export declare class ProjectService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createProject(createProjectDto: CreateProjectDto): Promise<{
        message: string;
    }>;
}
