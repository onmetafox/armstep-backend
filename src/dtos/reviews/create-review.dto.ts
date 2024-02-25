import { IsString, IsPostalCode, IsNotEmpty, ValidateNested } from 'class-validator';
export class CreateReviewDto {
    @IsString()
    @IsNotEmpty()
    logo: string;

    @IsString()
    @IsNotEmpty()
    user: string;

    @IsString()
    @IsNotEmpty()
    company: string;

    @IsString()
    @IsNotEmpty()
    review: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    role: string 
    
    @IsString()
    @IsNotEmpty()
    status: string
}
