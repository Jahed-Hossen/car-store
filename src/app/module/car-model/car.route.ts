import express from 'express';
import { carController } from './car.controller';

const route = express.Router();

route.post('/cars', carController.AddCar);
route.get('/cars', carController.GetALLCar);
route.get('/cars/:carId', carController.GetOneCar);
route.put('/cars/:carId', carController.UpdetOneCar);
route.delete('/cars/:carId', carController.CarDeletFormData);

export const carRouter = route;
