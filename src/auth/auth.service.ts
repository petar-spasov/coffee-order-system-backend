import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/create-user.dto";
import * as bcrypt from 'bcrypt';
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService) {}

    public async register(user: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        try {
            const createdUser = await this.usersService.createUser({
                ...user,
                password: hashedPassword,
            });
            //todo map to dto
            createdUser.password = undefined;
            return createdUser;
        } catch (error){
            if (error.code === 'ER_DUP_ENTRY'){
                throw new HttpException('User with that email already exists.', HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Internal server error.', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public async authenticateUser(email: string, password: string){
        try {
            const user = await this.usersService.getByEmail(email);
            const hashedPassword = await bcrypt.hash(password, 10);
            const isPasswordCorrect = await  bcrypt.compare(hashedPassword, user.password);
            if (!isPasswordCorrect){
                throw new HttpException('Wrong credentials.', HttpStatus.BAD_REQUEST);
            }
            //todo map to dto
            user.password = undefined;
            return user;
        } catch (error) {
            throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
        }
    }

    public getCookieWithJwtToken(userId: number) {
        const payload: TokenPayload = { userId };
        const token = this.jwtService.sign(payload);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.configService.get('JWT_EXPIRATION_TIME')}`;
    }

    public getCookieForLogOut() {
        return `Authentication=; HttpOnly; Path=/; Max-Age=0`;
    }
}
