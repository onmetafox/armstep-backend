import { IsString, IsPostalCode, IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateCategoryDto } from '../categoires/create-category.dto';
import { Type } from 'class-transformer';

export class CreateTechnologyDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    logo: string;

    @Type(()=> CreateCategoryDto)
    catetory: CreateCategoryDto[];

    @IsNotEmpty()
    readonly status: string;

}