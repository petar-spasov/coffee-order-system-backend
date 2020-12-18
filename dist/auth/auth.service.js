"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const mapper_1 = require("../helper/mapper");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async checkIfUserExists(loginData) {
        try {
            const user = await this.usersService.getByEmail(loginData.email);
            await this.checkPassword(loginData.password, user.password);
            return user;
        }
        catch (error) {
            throw new common_1.HttpException('Ungültige Angaben.', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async checkPassword(passwordData, hashedPassowrd) {
        const isPasswordCorrect = await bcrypt.compare(passwordData, hashedPassowrd);
        if (!isPasswordCorrect) {
            throw new common_1.HttpException('Ungültige Angaben.', common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async login(loginData) {
        const foundUser = await this.checkIfUserExists(loginData);
        const payload = {
            id: foundUser.id,
            name: foundUser.name,
            lastName: foundUser.lastName,
            email: foundUser.email
        };
        const accessToken = this.jwtService.sign(payload);
        return {
            access_token: accessToken,
            payload,
        };
    }
    async register(registrationData) {
        const user = mapper_1.mapRegisterDtoToUser(registrationData);
        try {
            return mapper_1.mapUserToUserDto(await this.usersService.create(user));
        }
        catch (error) {
            if (error.code === 'ER_DUP_ENTRY') {
                throw new common_1.HttpException('Diese E-Mail Adresse wird bereits verwendet', common_1.HttpStatus.BAD_REQUEST);
            }
            throw new common_1.HttpException('Server-Error. Bitte Kontaktieren Sie den Support', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map