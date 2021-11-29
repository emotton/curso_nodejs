import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cnpj: string;

}
