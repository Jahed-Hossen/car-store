import { Request, Response, NextFunction } from 'express';
import CarModel from '../car-model/car.model';
import { OrderModel } from './order.model';

// Create Order
const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
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
    const car = await CarModel.findById(carId);

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
    await car.save();

    // Create the order
    const order = new OrderModel({
      email,
      car: car._id,
      quantity,
      totalPrice,
    });
    const savedOrder = await order.save();

    // Respond with success
    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: savedOrder,
    });
  } catch (error) {
    next(error);
  }
};
//get Tottal revenue
const calculateRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await OrderModel.aggregate([
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
  } catch (error) {
    res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error,
    });
  }
};
export const orderController = {
  createOrder,
  calculateRevenue,
};
