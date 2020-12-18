import { AuthService } from "./auth.service";
import { LoginDto } from "../users/dto/Login.dto";
import { RegisterDto } from "../users/dto/Register.dto";
import { UserDto } from "../users/dto/User.dto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginData: LoginDto): Promise<any>;
    register(user: RegisterDto): Promise<UserDto>;
}
