import * as express from 'express';

import CheeseRouter from "./cheese.router";
import PurchaseRouter from "./purchase.router";

const router = express.Router();

router.use("/cheeses", CheeseRouter);
router.use("/purchases", PurchaseRouter);

export default router;