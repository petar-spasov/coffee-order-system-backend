import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class CoffeeSort {

    @PrimaryGeneratedColumn()
    sortId: number;

    @Column()
    sortName: string;

    @Column()
    price: number;

    @Column()
    imageLink: string;
}
