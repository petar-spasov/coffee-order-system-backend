"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapUserToUserDto = exports.mapRegisterDtoToUser = void 0;
const user_entity_1 = require("../users/user.entity");
const User_dto_1 = require("../users/dto/User.dto");
const mapRegisterDtoToUser = (createUser) => {
    const user = new user_entity_1.User();
    for (const [key, value] of Object.entries(createUser)) {
        user[key] = value;
    }
    return user;
};
exports.mapRegisterDtoToUser = mapRegisterDtoToUser;
const mapUserToUserDto = (user) => {
    const userDto = new User_dto_1.UserDto();
    for (const [key, value] of Object.entries(user)) {
        if (key === 'password') {
            continue;
        }
        userDto[key] = value;
    }
    return userDto;
};
exports.mapUserToUserDto = mapUserToUserDto;
//# sourceMappingURL=mapper.js.map