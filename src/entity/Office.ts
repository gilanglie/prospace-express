import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Office {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    companyId: number;

    @Column()
    location: string;

    @Column()
    startDate: Date;
}
