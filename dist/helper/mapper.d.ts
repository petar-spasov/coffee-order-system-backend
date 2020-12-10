import { CreateUserDto } from "../users/create-user.dto";
import { User } from "../users/user.entity";
import { UserDto } from "../users/user.dto";
export declare const mapCreateUserDtoToUser: (createUser: CreateUserDto) => User;
export declare const mapUserToUserDto: (user: User) => UserDto;
