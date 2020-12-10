import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user.entity";
import { UsersController } from './users.controller';
import {AuthService} from "../auth/auth.service";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";

@Module({
    imports: [TypeOrmModule.forFeature([User]), JwtModule],
    providers: [
        UsersService,
        AuthService,
        JwtService,
        ConfigService,
    ],
    controllers: [UsersController]
})
export class UsersModule {
}
