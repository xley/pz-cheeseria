import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { Cheese } from "./cheese.entity";

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    userId!: string;

    @Column({ type: "numeric" })
    totalPrice!: number;

    @Column()
    totalItems!: number;

    @OneToMany((_type) => Cheese, (cheese: Cheese) => cheese)
    cheeses!: Array<Cheese>;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}