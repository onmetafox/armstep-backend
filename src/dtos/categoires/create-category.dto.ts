import { IsString, IsPostalCode, IsNotEmpty, ValidateNested } from 'class-validator';
import { Icon } from 'src/models/categories.model';

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    detail: string;

    icons: Icon[]

    @IsNotEmpty()
    status: string;
}