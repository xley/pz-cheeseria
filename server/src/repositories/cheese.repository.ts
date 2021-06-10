import { getRepository } from "typeorm";
import { Cheese } from "../entities";

export interface ICheesePayload {
    title: string;
    price: number;
    colour: string;
    description: string;
    category: string;
    image: string;
}

export const getCheeses = async (): Promise<Array<Cheese>> => {
    const cheeseRepository = getRepository(Cheese);
    return cheeseRepository.find();
};

export const createCheese = async (payload: ICheesePayload): Promise<Cheese> => {
    const cheeseRepository = getRepository(Cheese);
    const cheese = new Cheese();
    return cheeseRepository.save({
        ...cheese,
        ...payload,
    });
};

export const getCheese = async (id: number): Promise<Cheese | null> => {
    const cheeseRepository = getRepository(Cheese);
    const cheese = await cheeseRepository.findOne({ id: id });
    if (!cheese) return null;
    return cheese;
};

export const getCheesePrice = async (id: number, weight: number): Promise<number | null> => {
    const cheeseRepository = getRepository(Cheese);
    const cheese = await cheeseRepository.findOne({ id: id });
    if (!cheese) return null;
    const totalPrice = cheese.price * weight;
    return totalPrice;
};