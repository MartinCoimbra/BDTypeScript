import {Entity, PrimaryGeneratedColumn, Column, BaseEntity , ManyToOne } from "typeorm"
import {Mujer} from "./Mujer"
 

@Entity()
export class Hijos extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido:string

    @Column()
    edad:number
     
    @ManyToOne(()=> Mujer, Mujer => Mujer.hijos)
    mujer: Mujer;
}