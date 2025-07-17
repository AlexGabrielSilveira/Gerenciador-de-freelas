import { PartialType } from "@nestjs/mapped-types";
import { CreateProjectDto } from "./project.dto";
import { IsNumber } from "class-validator";

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
    @IsNumber()
    timeWorked?: number | undefined;
}