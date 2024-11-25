"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.carRouter = void 0;
const express_1 = __importDefault(require("express"));
const car_controller_1 = require("./car.controller");
const route = express_1.default.Router();
route.post('/cars', car_controller_1.carController.AddCar);
route.get('/cars', car_controller_1.carController.GetALLCar);
route.get('/cars/:carId', car_controller_1.carController.GetOneCar);
route.put('/cars/:carId', car_controller_1.carController.UpdetOneCar);
route.delete('/cars/:carId', car_controller_1.carController.CarDeletFormData);
exports.carRouter = route;
