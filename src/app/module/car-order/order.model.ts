import mongoose, { Schema } from 'mongoose';
import { Order } from './order.interface';

const OrderSchema = new Schema<Order>(
  {
    email: { type: String, required: true },
    car: { type: mongoose.Schema.Types.ObjectId, ref: 'Car', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

export const OrderModel = mongoose.model<Order>('Order', OrderSchema);
