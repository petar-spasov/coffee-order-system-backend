import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from './users/users.module';
import {ConfigModule} from '@nestjs/config';
import * as Joi from 'joi';
import {AuthModule} from "./auth/auth.module";

@Module({
    imports: [
        ConfigModule.forRoot({
            validationSchema: Joi.object({
                //todo export in env var
                JWT_SECRET: '123',
                JWT_EXPIRATION_TIME: '3900',
            })
        }),
        TypeOrmModule.forRoot(),
        UsersModule,
        AuthModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule {
}
