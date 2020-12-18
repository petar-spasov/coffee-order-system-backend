import {IsEmail, IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class UserDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;
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
}
