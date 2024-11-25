import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { carRouter } from './app/module/car-model/car.route';
import { OrderRouter } from './app/module/car-order/order.Router';
const app: Application = express();

app.use(express.json());
app.use(cors());
// car Router
app.use('/api', carRouter);
// order Router
app.use('/api', OrderRouter);
app.get('/', (req:Request, res:Response) => {
    res.send('Server Is Ready')
  })
export default app;
