"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapUserToUserDto = exports.mapCreateUserDtoToUser = void 0;
const user_entity_1 = require("../users/user.entity");
const user_dto_1 = require("../users/user.dto");
const mapCreateUserDtoToUser = (createUser) => {
    const user = new user_entity_1.User();
    for (const [key, value] of Object.entries(createUser)) {
        user[key] = value;
    }
    return user;
};
exports.mapCreateUserDtoToUser = mapCreateUserDtoToUser;
const mapUserToUserDto = (user) => {
    const userDto = new user_dto_1.UserDto();
    for (const [key, value] of Object.entries(user)) {
        if (key == "password") {
            continue;
        }
        userDto[key] = value;
    }
    return userDto;
};
exports.mapUserToUserDto = mapUserToUserDto;
//# sourceMappingURL=mapper.js.map