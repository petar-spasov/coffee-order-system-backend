import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {JwtService} from "@nestjs/jwt";
import {User} from "../users/user.entity";
import * as bcrypt from 'bcrypt';
import {LoginDto} from "../users/dto/Login.dto";
import {RegisterDto} from "../users/dto/Register.dto";
import {mapRegisterDtoToUser, mapUserToUserDto} from "../helper/mapper";
import {UserDto} from "../users/dto/User.dto";

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {
    }

    public async checkIfUserExists(loginData: LoginDto): Promise<User> {
        try {
            const user: User = await this.usersService.getByEmail(loginData.email);
            await this.checkPassword(loginData.password, user.password)
            return user;
        } catch (error){
            throw new HttpException('Ungültige Angaben.', HttpStatus.BAD_REQUEST);
        }
    }

    public async checkPassword(passwordData: string, hashedPassowrd: string) {
        const isPasswordCorrect = await bcrypt.compare(passwordData, hashedPassowrd);
        if (!isPasswordCorrect) {
            throw new HttpException('Ungültige Angaben.', HttpStatus.BAD_REQUEST);
        }
    }

    public async login(loginData: LoginDto): Promise<any | { status: number }> {
        const foundUser: User = await this.checkIfUserExists(loginData);
        const payload: UserDto = {
            id: foundUser.id,
            name: foundUser.name,
            lastName: foundUser.lastName,
            email: foundUser.email
        };
        const accessToken = this.jwtService.sign(payload);
        return {
            access_token: accessToken,
            payload,
        };
    }

    public async register(registrationData: RegisterDto): Promise<UserDto> {
        const user: User = mapRegisterDtoToUser(registrationData);
        try {
            return mapUserToUserDto(await this.usersService.create(user));
        } catch (error) {
            if (error.code === 'ER_DUP_ENTRY'){
                throw new HttpException('Diese E-Mail Adresse wird bereits verwendet', HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Server-Error. Bitte Kontaktieren Sie den Support', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
