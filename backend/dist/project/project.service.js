"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const socket_gateway_1 = require("../socket/socket.gateway");
let ProjectService = class ProjectService {
    prismaService;
    socketGateway;
    constructor(prismaService, socketGateway) {
        this.prismaService = prismaService;
        this.socketGateway = socketGateway;
    }
    async createProject(createProjectDto) {
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
        });
        if (project) {
            return this.socketGateway.sendProjectMessage("success", "Project created successfully");
        }
        else {
            return this.socketGateway.sendProjectMessage("error", "Project failed to create");
        }
    }
    async getProjects() {
        return await this.prismaService.project.findMany();
    }
    async updateProjectStatus(name, status) {
        const projet = await this.prismaService.project.findUnique({
            where: { name }
        });
        if (projet) {
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
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        socket_gateway_1.SocketGateway])
], ProjectService);
//# sourceMappingURL=project.service.js.map