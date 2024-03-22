import { IsString, IsNotEmpty, IsArray, IsMongoId } from 'class-validator';


export class CreateTechnologyDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    logo: string;

    @IsNotEmpty()
    @IsArray()
    @IsMongoId({
        each: true,
    })
    category: string[];

    @IsNotEmpty()
    readonly status: string;

}