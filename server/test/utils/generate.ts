import faker from "faker";
import { IPurchasePayload } from "src/repositories/purchases.repository";

export function generateCheeseData(overide = {}) {
    return {
        id: faker.datatype.number(),
        title: faker.name.title(),
        price: faker.datatype.number(),
        colour: faker.datatype.string(),
        description: faker.datatype.string(),
        category: faker.datatype.string(),
        image: faker.datatype.string(),
        createdAt: new Date(),
        updatedAt: new Date(),
        ...overide,
    };
}

export function generateCheesesData(n: number = 1, overide = {}) {
    return Array.from(
        {
            length: n,
        },
        (_, i) => {
            return generateCheeseData({ id: i, ...overide });
        }
    );
}

export function generateCheesePayload() {
    return {
        title: faker.name.title(),
        price: faker.datatype.number(),
        colour: faker.datatype.string(),
        description: faker.datatype.string(),
        category: faker.datatype.string(),
        image: faker.datatype.string(),
    }
}

export function generatePurchaseData(overide = {}) {
    return {
        id: faker.datatype.number(),
        userId: faker.datatype.string(),
        totalPrice: faker.datatype.number(),
        totalItems: faker.datatype.number(),
        cheeses: [
            {
                id: faker.datatype.number(),
                amount: faker.datatype.number(),
                title: faker.datatype.string(),
                price: faker.datatype.number(),
                colour: faker.datatype.string(),
                description: faker.datatype.string(),
                category: faker.datatype.string(),
                image: faker.datatype.string()
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
        ...overide,
    };
}

export function generatePurchasesData(n: number = 1, overide = {}) {
    return Array.from(
        {
            length: n,
        },
        (_, i) => {
            return generatePurchaseData({ id: i, ...overide });
        }
    );
}

export function generatePurchasePayload(): IPurchasePayload {
    return {
        userId: faker.datatype.string(),
        totalPrice: faker.datatype.number(),
        totalItems: faker.datatype.number(),
        cheeses: [
            {
                id: faker.datatype.number(),
                amount: faker.datatype.number(),
                title: faker.datatype.string(),
                price: faker.datatype.number(),
                colour: faker.datatype.string(),
                description: faker.datatype.string(),
                category: faker.datatype.string(),
                image: faker.datatype.string()
            }
        ]
    }
}