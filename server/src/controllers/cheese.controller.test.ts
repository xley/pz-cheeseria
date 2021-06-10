// @ts-nocheck 
import CheeseController from '../controllers/cheese.controller';
import * as CheeseRepository from "../repositories/cheese.repository";
import { generateCheesesData, generateCheeseData, generateCheesePayload } from "test/utils/generate";

afterEach(() => {
    jest.resetAllMocks();
});

describe("CheeseController", () => {
    describe("getCheeses", () => {
        test("should return empty array", async () => {
            const spy = jest
                .spyOn(CheeseRepository, "getCheeses")
                .mockResolvedValueOnce([]);
            const controller = new CheeseController();
            const cheeses = await controller.getCheeses();
            expect(cheeses).toEqual([]);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });

        test("should return cheeses list", async () => {
            const cheeseData = generateCheesesData(2);
            const spy = jest
                .spyOn(CheeseRepository, "getCheeses")
                .mockResolvedValueOnce(cheeseData);
            const controller = new CheeseController();
            const cheeses = await controller.getCheeses();
            expect(cheeses).toEqual(cheeseData);
            expect(spy).toHaveBeenCalledWith();
            expect(spy).toHaveBeenCalledTimes(1);
            spy.mockRestore();
        });
    });

    describe("addCheese", () => {
        test("should add cheese to the database", async () => {
            const payload = generateCheesePayload();
            const cheeseData = generateCheeseData(payload);
            const spy = jest
                .spyOn(CheeseRepository, "createCheese")
                .mockResolvedValueOnce(cheeseData);
            const controller = new CheeseController();
            const cheese = await controller.createCheese(payload);
            expect(cheese).toMatchObject(payload);
            expect(cheese).toEqual(cheeseData);
            expect(spy).toHaveBeenCalledWith(payload);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });

    describe("getCheese", () => {
        test("should return cheese from the database", async () => {
            const id = 1;
            const cheeseData = generateCheeseData({ id });
            const spy = jest
                .spyOn(CheeseRepository, "getCheese")
                .mockResolvedValueOnce(cheeseData);
            const controller = new CheeseController();
            const cheese = await controller.getCheese(id.toString());
            expect(cheese).toEqual(cheeseData);
            expect(cheese?.id).toBe(id);
            expect(spy).toHaveBeenCalledWith(id);
            expect(spy).toHaveBeenCalledTimes(1);
        });

        test("should return null if cheese not found", async () => {
            const id = 1;
            const spy = jest
                .spyOn(CheeseRepository, "getCheese")
                .mockResolvedValueOnce(null);
            const controller = new CheeseController();
            const cheese = await controller.getCheese(id.toString());
            expect(cheese).toBeNull();
            expect(spy).toHaveBeenCalledWith(id);
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});