import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {Company} from "./Company";
@Entity()
export class Office {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    location: string;

    @Column()
    startDate: Date;

    @ManyToOne(type => Company, company => company.offices)
    company: Company;
}
