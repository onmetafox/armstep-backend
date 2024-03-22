import { IsString, IsNotEmpty, IsArray, IsMongoId } from 'class-validator';

export class CreateServiceDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    subtitle: string;

    @IsString()
    @IsNotEmpty()
    icon: string;

    @IsString()
    @IsNotEmpty()
    intro: string;

    @IsString()
    @IsNotEmpty()
    detail: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    subcontent: string;

    @IsNotEmpty()
    @IsArray()
    @IsMongoId({
        each: true,
    })
    category: string[];

    @IsNotEmpty()
    status: string
}