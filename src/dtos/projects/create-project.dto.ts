import { IsString, IsPostalCode, IsNotEmpty, ValidateNested } from 'class-validator';

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    thumb: string;

    @IsString()
    @IsNotEmpty()
    img: string;

    @IsString()
    @IsNotEmpty()
    services: string;

    @IsString()
    @IsNotEmpty()
    industry: string;

    @IsString()
    @IsNotEmpty()
    platform: string;

    @IsString()
    @IsNotEmpty()
    client: string;

    @IsString()
    @IsNotEmpty()
    overview: string;

    @IsString()
    @IsNotEmpty()
    link: string;

    @IsNotEmpty()
    team: string[];

    @IsString()
    @IsNotEmpty()
    duration: string;

    @IsNotEmpty()
    stacks: string[];

    @IsString()
    @IsNotEmpty()
    result: string;

    // @IsString()
    @IsNotEmpty()
    status: string
}
