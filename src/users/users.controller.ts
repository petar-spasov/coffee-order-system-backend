import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./create-user.dto";
import {UserDto} from "./user.dto";
import {AuthService} from "../auth/auth.service";

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
        private authService: AuthService,
                ) {
    }

    @Get('/:id')
    async findOne(@Param('id') id): Promise<UserDto> {
        return await this.usersService.getById(id);
    }

    @Post()
    async create(@Body() user: CreateUserDto) {
        return await this.authService.register(user);
    }
}
