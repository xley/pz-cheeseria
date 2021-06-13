import { getRepository } from "typeorm";
import { Purchase } from "../entities";

export interface IPurchasePayload {
    userId: string
    totalPrice: number
    totalItems: number
    cheeses: IPurchasedCheesePayload[]
}

export interface IPurchasedCheesePayload {
    id: number
    amount: number
    title: string
    price: number
    colour: string
    description: string
    category: string
    image: string
}

export const getPurchases = async (userId: string): Promise<Purchase[] | null> => {
    const purchaseRepository = getRepository(Purchase);
    const purchases = await purchaseRepository.find({ userId: userId });
    if (!purchases) return null;
    return purchases;
};

export const createPurchase = async (payload: IPurchasePayload): Promise<Purchase> => {
    const purchaseRepository = getRepository(Purchase);
    const purchase = new Purchase();
    return purchaseRepository.save({
        ...purchase,
        ...payload,
    });
};