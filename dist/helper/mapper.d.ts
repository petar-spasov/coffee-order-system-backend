import { User } from "../users/user.entity";
import { RegisterDto } from "../users/dto/Register.dto";
import { UserDto } from "../users/dto/User.dto";
export declare const mapRegisterDtoToUser: (createUser: RegisterDto) => User;
export declare const mapUserToUserDto: (user: User) => UserDto;
