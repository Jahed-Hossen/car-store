import express, { NextFunction, Request, Response } from 'express';
import { orderController } from './order.controll';
const router = express.Router();

router.post('/orders', (req: Request, res: Response, next: NextFunction) => {
  orderController.createOrder(req, res, next);
});
router.get('/orders/revenue', orderController.calculateRevenue);

export const OrderRouter = router;
