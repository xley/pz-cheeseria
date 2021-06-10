import * as express from 'express';
import CheeseController from '../controllers/cheese';

const router = express.Router();

router.get('/', async (_req, res) => {
    const controller = new CheeseController();
    const response = await controller.getCheeses();
    return res.json(response);
});

router.get('/:id', async (req, res) => {
    let { id } = req.params;
    const controller = new CheeseController();
    const response = await controller.getCheese(id);
    return res.json(response);
});

router.post('/', async (req, res) => {
    const controller = new CheeseController();
    const response = await controller.createCheese(req.body);
    return res.json(response);
});

router.get('/:id/:weight', async (req, res) => {
    let { id, weight } = req.params;
    const controller = new CheeseController();
    const response = await controller.getCheeseTotalPrice(id, weight);
    if (!response) res.status(404).send({ message: "No cheese found" });
    return res.json(response);
});

export default router;