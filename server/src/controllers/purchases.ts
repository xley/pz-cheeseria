import { Body, Get, Path, Post, Route } from "tsoa";
const fs = require('fs');
import * as _ from 'lodash';
import IPurchase from "../interfaces/purchase";

@Route("purchases")
export default class PurchaseController {
    @Get("/:userId")
    public async getPurchases(@Path() userId: string): Promise<IPurchase[]> {
        let rawdata = fs.readFileSync('data/purchases.json');
        let purchases = JSON.parse(rawdata);
        const usersPurchases = _.filter(purchases, { "userId": userId });
        return usersPurchases;
    }

    @Post("/create")
    public async createPurchase(@Body() purchase: IPurchase): Promise<string> {
        let rawdata = fs.readFileSync('data/purchases.json');
        let purchases = JSON.parse(rawdata);
        console.log('purchase', purchase);
        fs.writeFile('data/purchases.json', JSON.stringify(purchases), (err: any) => {
            if (err) throw err;
        });
        return 'Successfully Created Purchase!';
    }
}
