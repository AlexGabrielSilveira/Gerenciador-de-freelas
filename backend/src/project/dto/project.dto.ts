import { Status } from "@prisma/client";
import { IsEmail, IsEnum, isInt, IsNotEmpty, IsPositive, IsString, Length, Max, Min, MinLength } from "class-validator";

export class CreateProjectDto {
    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    name: string;

    @IsString()
    @MinLength(10)
    description?: string;

    @IsString()
    @MinLength(5)
    @IsNotEmpty()
    clientName: string;
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    clientEmail: string;

    @IsPositive()
    @IsNotEmpty()
    amountHourly: number;

    @Min(0)
    timeWorked: number;

    @IsEnum(Status)
    status: Status;
}

