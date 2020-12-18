import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Status {

    @PrimaryGeneratedColumn()
    statusId: number;

    @Column()
    status: string;
}
