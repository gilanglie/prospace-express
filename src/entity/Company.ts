import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Office} from "./Office";
@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    revenue: string;

    @Column()
    phone: string;

    @OneToMany(type => Office, office => office.company) // note: we will create author property in the Photo class below
    offices: Office[];

}
