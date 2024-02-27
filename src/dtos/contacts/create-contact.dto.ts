import { IsNotEmpty, IsString, IsEmail, IsPhoneNumber } from "class-validator";
export class CreateContactDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber()
    phone: string;

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    duration: string;

    @IsNotEmpty()
    @IsString()
    service: string;

    @IsNotEmpty()
    @IsString()
    stack: string;

    @IsNotEmpty()
    @IsString()
    about: string;

    @IsNotEmpty()
    @IsString()
    status: string;
}
