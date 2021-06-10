import * as express from 'express';

import CheeseController from './controllers/cheese';
import PurchaseController from './controllers/purchases';

const router = express.Router();

router.get('/cheeses', async (_req, res) => {
    const controller = new CheeseController();
    const response = await controller.getCheeses();
    return res.json(response);
});

router.get('/cheeses/:cheeseId/:weight', async (req, res) => {
    let { cheeseId, weight } = req.params;
    const controller = new CheeseController();
    const response = await controller.getCheeseTotalPrice(cheeseId, weight);
    return res.json(response);
});

router.get('/purchases/:userId', async (req, res) => {
    let { userId } = req.params;
    const controller = new PurchaseController();
    const response = await controller.getPurchases(userId);
    return res.json(response);
});

router.post('/purchases/create', async (req, res) => {
    const controller = new PurchaseController();
    const response = await controller.createPurchase(req.body);
    return res.json(response);
});

export default router;