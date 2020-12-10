import {CreateUserDto} from "../users/create-user.dto";
import {User} from "../users/user.entity";
import {UserDto} from "../users/user.dto";

export const mapCreateUserDtoToUser = (createUser: CreateUserDto): User => {
    const user = new User();
    for (const [key, value] of Object.entries(createUser)) {
        user[key] = value;
    }
    return user;
}

export const mapUserToUserDto = (user: User): UserDto => {
    const userDto = new UserDto();
    for (const [key, value] of Object.entries(user)) {
        if (key == "password"){
            continue;
        }
        userDto[key] = value;
    }
    return userDto;
}
