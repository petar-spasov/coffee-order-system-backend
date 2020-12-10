import { UsersService } from "./users.service";
import { CreateUserDto } from "./create-user.dto";
import { UserDto } from "./user.dto";
import { AuthService } from "../auth/auth.service";
export declare class UsersController {
    private usersService;
    private authService;
    constructor(usersService: UsersService, authService: AuthService);
    findOne(id: any): Promise<UserDto>;
    create(user: CreateUserDto): Promise<import("./user.entity").User>;
}
