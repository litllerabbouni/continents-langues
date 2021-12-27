import { IsString, Length } from "class-validator";

export class CreateContinentDto {

    @IsString()
    @Length(2, 2)
    code: string;

    @IsString()
    @Length(2, 30)
    name: string;

}