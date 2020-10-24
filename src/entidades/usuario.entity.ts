import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 50})
    name: string;

    @Column({ type: "varchar", length: 50})
    email: string;

    @Column({ type: "int"})
    role: number
}