import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../users/user.entity";
import { LoginDto } from "../users/dto/Login.dto";
import { RegisterDto } from "../users/dto/Register.dto";
import { UserDto } from "../users/dto/User.dto";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    checkIfUserExists(loginData: LoginDto): Promise<User>;
    checkPassword(passwordData: string, hashedPassowrd: string): Promise<void>;
    login(loginData: LoginDto): Promise<any | {
        status: number;
    }>;
    register(registrationData: RegisterDto): Promise<UserDto>;
}
