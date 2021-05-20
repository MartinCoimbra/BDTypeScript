import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany} from "typeorm"
import {Esposo} from "./Esposo"
import {Hijos} from "./Hijos"

@Entity()
export class Mujer extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellido:string

    @Column()
    edad:number
    
    @OneToOne(() => Esposo, esposo => esposo.mujer)
    esposo: Esposo;

    @OneToMany(()=>Hijos, hijos => hijos.mujer)
    hijos: Hijos[];
}