import * as express from 'express';

import CheeseRouter from "./cheese.router";
import PurchaseRouter from "./purchase.router";

const router = express.Router();

router.use("/api/cheeses", CheeseRouter);
router.use("/api/purchases", PurchaseRouter);

export default router;