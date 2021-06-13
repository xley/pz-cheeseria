import { IPurchasedCheesePayload } from "src/repositories/purchases.repository";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToMany,
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

    @Column("simple-json")
    cheeses!: IPurchasedCheesePayload[];

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}