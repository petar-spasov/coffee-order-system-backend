import { AuthService } from "./auth.service";
import { CreateUserDto } from "../users/create-user.dto";
import RequestWithUser from "./requestWithUser.interface";
import { Response } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: CreateUserDto): Promise<import("../users/user.entity").User>;
    logIn(request: RequestWithUser, response: Response): Promise<Response<any>>;
    logOut(request: RequestWithUser, response: Response): Promise<Response<any>>;
    authenticate(request: RequestWithUser): import("../users/user.entity").User;
}
