import {User} from "../users/user.entity";
import {RegisterDto} from "../users/dto/Register.dto";
import {UserDto} from "../users/dto/User.dto";

export const mapRegisterDtoToUser = (createUser: RegisterDto): User => {
    const user = new User();
    for (const [key, value] of Object.entries(createUser)) {
        user[key] = value;
    }
    return user;
}

export const mapUserToUserDto = (user: User): UserDto => {
    const userDto = new UserDto();
    for (const [key, value] of Object.entries(user)) {
        if(key === 'password'){
            continue;
        }
        userDto[key] = value;
    }
    return userDto;
}
