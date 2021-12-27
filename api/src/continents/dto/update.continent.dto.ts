import { IsOptional, IsString, Length } from "class-validator";

export class UpdateContinentDto {
    @IsOptional()
    @IsString()
    @Length(2, 2)
    code: string;

    @IsOptional()
    @IsString()
    @Length(2, 30)
    name: string;
}