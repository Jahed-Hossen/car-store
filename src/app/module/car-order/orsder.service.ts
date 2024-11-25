import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const carOrderIdDB = async (Order: Order) => {
    const carAdd = await OrderModel.create(Order);
    return carAdd;
  };

  export const carOrdeService={
    carOrderIdDB
  }