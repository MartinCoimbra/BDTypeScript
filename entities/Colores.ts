import {Entity, PrimaryGeneratedColumn, Column, BaseEntity , ManyToMany, JoinTable } from "typeorm"
import {Mujer} from "./Mujer"
 

@Entity()
export class Colores extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    color: string

    @ManyToMany(()=>Mujer)
    @JoinTable()
    mujer: Mujer[];
      
}