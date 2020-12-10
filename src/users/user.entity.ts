import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({
        nullable: false,
        unique: true
    })
    email: string;

    @Column()
    password: string;
}
