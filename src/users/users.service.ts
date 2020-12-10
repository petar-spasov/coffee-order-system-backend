import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {mapCreateUserDtoToUser, mapUserToUserDto} from "../helper/mapper";
import {UserDto} from "./user.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {
    }

    async getByEmail(email: string): Promise<User> {
        const user: User=  await this.usersRepository.findOne({email});
        if (user){
            return user;
        }
        throw new HttpException('User doesn\'t exist.', HttpStatus.NOT_FOUND);
    }

    async getById(id: number) {
        const user = await this.usersRepository.findOne({ id });
        if (user) {
            return user;
        }
        throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
    }

    async createUser(user): Promise<User> {
        return await this.usersRepository.save(mapCreateUserDtoToUser(user));
    }
}
