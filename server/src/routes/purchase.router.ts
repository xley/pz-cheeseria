import * as express from 'express';
import PurchaseController from '../controllers/purchases.controller';

const router = express.Router();

router.get('/:userId', async (req, res) => {
    let { userId } = req.params;
    const controller = new PurchaseController();
    const response = await controller.getPurchases(userId);
    return res.json(response);
});

router.post('/create', async (req, res) => {
    const controller = new PurchaseController();
    const response = await controller.createPurchase(req.body);
    return res.json(response);
});

export default router;