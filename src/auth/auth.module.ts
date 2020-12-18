import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../users/user.entity";
import {JwtModule} from "@nestjs/jwt";
import {UsersService} from "../users/users.service";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {JWT_EXPIRATION_TIME, JWT_SECRET} from "../const/jwt.const";
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: {
                expiresIn: JWT_EXPIRATION_TIME,
            }
        })
    ],
    providers: [UsersService, AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {}
