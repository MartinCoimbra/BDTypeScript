import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany, JoinColumn} from "typeorm"
import {Mujer} from "./Mujer"
 

@Entity()
export class Esposo extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido:string

    @Column()
    edad:number
    
    @OneToOne(()=> Mujer, mujer => mujer.esposo)
    @JoinColumn()
    mujer: Mujer;
}