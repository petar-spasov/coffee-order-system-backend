import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDto} from "../users/dto/Login.dto";
import {RegisterDto} from "../users/dto/Register.dto";
import {UserDto} from "../users/dto/User.dto";

@Controller('auth')
export class AuthController {
    constructor(private  readonly  authService:  AuthService) {}

    @Post('login')
    async login(@Body() loginData: LoginDto): Promise<any> {
        return this.authService.login(loginData);
    }

    @Post('register')
    async register(@Body() user: RegisterDto): Promise<UserDto> {
        return this.authService.register(user);
    }
}
