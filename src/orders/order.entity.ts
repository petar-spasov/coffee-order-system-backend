import {Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../users/user.entity";
import {CoffeeSort} from "../coffee-sorts/coffee-sort.entity";
import {Status} from "../statuses/status.entity";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    orderId: number;

    @ManyToOne(type => User, {onDelete: "CASCADE"})
    user: User;

    @ManyToOne(type => CoffeeSort, {onDelete: "CASCADE"})
    sort: CoffeeSort;

    @Column()
    amount: number;

    @ManyToOne(type => Status, {onDelete: "CASCADE"})
    status: Status;

}
