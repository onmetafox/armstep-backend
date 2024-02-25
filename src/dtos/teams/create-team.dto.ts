import { IsString, IsPostalCode, IsNotEmpty, ValidateNested } from 'class-validator';
import { stack } from 'src/models/teams.model';

export class CreateTeamDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    role: string;

    @IsString()
    @IsNotEmpty()
    imgUrl: string;

    @IsString()
    @IsNotEmpty()
    upwork: string;

    @IsString()
    @IsNotEmpty()
    linkedin: string;

    @IsString()
    @IsNotEmpty()
    contra: string;

    @IsString()
    @IsNotEmpty()
    about: string;

    stacks: stack[];

    @IsNotEmpty()
    status: string;
}