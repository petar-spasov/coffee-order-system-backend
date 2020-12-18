import {Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserDto} from "../../users/dto/User.dto";
import {CoffeeSort} from "../../coffee-sorts/coffee-sort.entity";
import {Status} from "../../statuses/status.entity";
import {IsNotEmpty, IsNumber} from "class-validator";


export class OrderDto {

    @IsNotEmpty()
    @IsNumber()
    orderId: number;

    @IsNotEmpty()
    user: UserDto;

    @IsNotEmpty()
    sort: CoffeeSort;

    @IsNotEmpty()
    @IsNumber()
    amount: number;

    @IsNotEmpty()
    status: Status;

}
