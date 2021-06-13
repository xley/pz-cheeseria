import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
} from "typeorm";
import { Purchase } from "./purchase.entity";

@Entity()
export class Cheese {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({ type: "numeric" })
    price!: number;

    @Column()
    colour!: string;

    @Column()
    description!: string;

    @Column()
    category!: string;

    @Column()
    image!: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}