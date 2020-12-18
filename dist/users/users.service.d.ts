import { User } from "./user.entity";
import { Repository } from "typeorm";
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getByEmail(email: string): Promise<User>;
    getById(id: number): Promise<User>;
    create(userData: User): Promise<User>;
}
