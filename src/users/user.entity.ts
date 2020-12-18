import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";
import * as bcrypt from 'bcrypt';

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

    @Column("char", {length: 60})
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
