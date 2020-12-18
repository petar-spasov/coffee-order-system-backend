import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class RegisterDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @IsNotEmpty()
    @IsString()
    readonly lastName: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
