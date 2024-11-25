"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const car_route_1 = require("./app/module/car-model/car.route");
const order_Router_1 = require("./app/module/car-order/order.Router");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// car Router
app.use('/api', car_route_1.carRouter);
// order Router
app.use('/api', order_Router_1.OrderRouter);
app.get('/', (req, res) => {
    res.send('Server Is Ready');
});
exports.default = app;
