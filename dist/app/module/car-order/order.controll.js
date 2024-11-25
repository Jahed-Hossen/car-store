"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const car_model_1 = __importDefault(require("../car-model/car.model"));
const order_model_1 = require("./order.model");
// Create Order
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, car: carId, quantity, totalPrice } = req.body;
        // Validate required fields
        if (!email || !carId || !quantity || !totalPrice) {
            res.status(400).json({
                message: 'Missing required fields',
                status: false,
            });
            return;
        }
        // Find the car by ID
        const car = yield car_model_1.default.findById(carId);
        // Check if the car exists
        if (!car) {
            res.status(404).json({
                message: 'Car not found',
                status: false,
            });
            return;
        }
        // Check if there is sufficient stock
        if (car.quantity < quantity) {
            res.status(400).json({
                message: 'Insufficient stock',
                status: false,
            });
            return;
        }
        // Update car inventory
        car.quantity -= quantity;
        car.inStock = car.quantity > 0;
        yield car.save();
        // Create the order
        const order = new order_model_1.OrderModel({
            email,
            car: car._id,
            quantity,
            totalPrice,
        });
        const savedOrder = yield order.save();
        // Respond with success
        res.status(201).json({
            message: 'Order created successfully',
            status: true,
            data: savedOrder,
        });
    }
    catch (error) {
        next(error);
    }
});
//get Tottal revenue
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_model_1.OrderModel.aggregate([
            {
                $lookup: {
                    from: 'orders',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'OrderDetails',
                },
            },
            {
                $unwind: '$OrderDetails',
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: {
                        $sum: { $multiply: ['$OrderDetails.totalPrice', '$quantity'] },
                    },
                },
            },
        ]);
        const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0;
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue },
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Failed to calculate revenue',
            status: false,
            error,
        });
    }
});
exports.orderController = {
    createOrder,
    calculateRevenue,
};
