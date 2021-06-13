import { Body, Get, Path, Post, Route, Tags } from "tsoa";
import { createPurchase, getPurchases, IPurchasePayload } from "../repositories/purchases.repository";
import { Purchase } from "../entities/purchase.entity";

@Route("api/purchases")
@Tags("Purchase")
export default class PurchaseController {
    @Get("/:userId")
    public async getPurchases(@Path() userId: string): Promise<Array<Purchase> | null> {
        return getPurchases(userId);
    }

    @Post("/create")
    public async createPurchase(@Body() body: IPurchasePayload): Promise<Purchase> {
        return createPurchase(body);
    }
}
