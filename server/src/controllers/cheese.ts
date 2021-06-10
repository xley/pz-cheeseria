import { Get, Path, Route } from "tsoa";
import ICheese from "../interfaces/cheese";
const fs = require('fs');
import * as _ from 'lodash';

@Route("cheeses")
export default class CheeseController {
    @Get("/")
    public async getCheeses(): Promise<ICheese[]> {
        let rawdata = fs.readFileSync('data/cheeses.json');
        let cheeses = JSON.parse(rawdata);
        return cheeses;
    }

    @Get("/:cheeseId/:weight")
    public async getCheeseTotalPrice(@Path() cheeseId: string, weight: string): Promise<number | null> {
        let rawdata = fs.readFileSync('data/cheeses.json');
        let cheeses = JSON.parse(rawdata);
        const selectCheese = _.find(cheeses, { "id": parseInt(cheeseId) });
        return selectCheese ? selectCheese.price * parseFloat(weight) : null;
    }
}
