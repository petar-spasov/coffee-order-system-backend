import { UsersService } from "../users/users.service";
import { CreateUserDto } from "../users/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(user: CreateUserDto): Promise<import("../users/user.entity").User>;
    authenticateUser(email: string, password: string): Promise<import("../users/user.entity").User>;
    getCookieWithJwtToken(userId: number): string;
    getCookieForLogOut(): string;
}
