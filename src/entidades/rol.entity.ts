import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar"})
    name: string;

    @Column({ type: "varchar"})
    code: string;

}