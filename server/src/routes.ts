import * as express from 'express';
const cheeses = require('../data/cheeses.json');

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {
    console.log('cheeses', cheeses);
    res.json(cheeses);
});

export default router;