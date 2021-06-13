import { Body, Get, Path, Post, Route, Tags } from "tsoa";
import { Cheese } from "src/entities";
import { createCheese, getCheese, getCheesePrice, getCheeses, ICheesePayload } from "../repositories/cheese.repository";
@Route("api/cheeses")
@Tags("Cheese")
export default class CheeseController {
    @Get("/")
    public async getCheeses(): Promise<Array<Cheese>> {
        return getCheeses();
    }

    @Post("/")
    public async createCheese(@Body() body: ICheesePayload): Promise<Cheese> {
        return createCheese(body);
    }

    @Get("/:id")
    public async getCheese(@Path() id: number): Promise<Cheese | null> {
        return getCheese(Number(id));
    }

    @Get("/:id/:weight")
    public async getCheeseTotalPrice(@Path() id: string, weight: string): Promise<number | null> {
        return getCheesePrice(Number(id), Number(weight));
    }
}
