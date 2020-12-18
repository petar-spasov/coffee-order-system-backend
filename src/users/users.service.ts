import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
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
        throw new HttpException('Benutzer existiert nicht.', HttpStatus.NOT_FOUND);
    }

    async getById(id: number) {
        const user = await this.usersRepository.findOne({ id });
        if (user) {
            return user;
        }
        throw new HttpException('Benutzer existiert nicht.', HttpStatus.NOT_FOUND);
    }

    async create(userData: User) {
        return await this.usersRepository.save(userData);
    }
}
