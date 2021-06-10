// @ts-nocheck 
import PurchaseController from '../controllers/purchases.controller';
import * as PurchaseRepository from "../repositories/purchases.repository";
import { generatePurchasesData, generatePurchaseData, generatePurchasePayload } from "test/utils/generate";

afterEach(() => {
    jest.resetAllMocks();
});

describe("PurchaseController", () => {
    describe("getPurchases", () => {
        test("should return empty array", async () => {
            const userId = "0dfafb58-53c3-4e03-b5cc-9447a6256931";
            const spy = jest
                .spyOn(PurchaseRepository, "getPurchases")
                .mockResolvedValueOnce([]);
            const controller = new PurchaseController();
            const purchases = await controller.getPurchases(userId);
            expect(purchases).toEqual([]);
            expect(spy).toHaveBeenCalledWith(userId);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        test("should return purchases list", async () => {
            const userId = "f8ad8b04-f46c-4d51-9f3a-1d85805d7587"
            const payload = { userId: userId };
            const purchaseData = generatePurchasesData(2, payload);
            const spy = jest
                .spyOn(PurchaseRepository, "getPurchases")
                .mockResolvedValueOnce(purchaseData);
            const controller = new PurchaseController();
            const purchases = await controller.getPurchases(userId);
            expect(purchases).toEqual(purchaseData);
            expect(spy).toHaveBeenCalledWith(userId);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("addPurchase", () => {
        test("should add purchase to the database", async () => {
            const payload = generatePurchasePayload();
            const purchaseData = generatePurchaseData(payload);
            const spy = jest
                .spyOn(PurchaseRepository, "createPurchase")
                .mockResolvedValueOnce(purchaseData);
            const controller = new PurchaseController();
            const purchase = await controller.createPurchase(payload);
            expect(purchase).toMatchObject(payload);
            expect(purchase).toEqual(purchaseData);
            expect(spy).toHaveBeenCalledWith(payload);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});