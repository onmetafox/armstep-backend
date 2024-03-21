import { IsString, IsPostalCode, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateCategoryDto } from '../categoires/create-category.dto';
import { Type } from 'class-transformer';

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
    catetory: string[];

    @IsNotEmpty()
    status: string
}