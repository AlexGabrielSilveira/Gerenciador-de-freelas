import { Status } from "@prisma/client";
export declare class CreateProjectDto {
    name: string;
    description?: string;
    clientName: string;
    clientEmail: string;
    amountHourly: number;
    timeWorked: number;
    status: Status;
}
