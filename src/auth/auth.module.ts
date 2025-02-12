import { Module } from '@nestjs/common';
import {UsersModule} from "../users/users.module";
import { PassportModule } from '@nestjs/passport';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {AuthService} from "./auth.service";
import {LocalStrategy} from "./local.strategy";
import { AuthController } from './auth.controller';
import {JwtStrategy} from "./jwt.strategy";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: {
                    expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
                },
            }),
        }),
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthService]
})
export class AuthModule {}
