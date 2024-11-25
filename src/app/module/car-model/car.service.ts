import { Car } from './car.interface';
import CarModel from './car.model';
// create data
const carAddData_db = async (Car: Car) => {
  const carAdd = await CarModel.create(Car);
  return carAdd;
};
//Find all data
const carGetData_db = async () => {
  const carGet = await CarModel.find();
  return carGet;
};
//Find One data
const carGetOneData_db = async (_id: string) => {
  const carGet = await CarModel.findOne({ _id });
  return carGet;
};
// Update One data
const carPutData_db = async (_id: string, updateData: Partial<Car>) => {
  const carUdpdate = await CarModel.findByIdAndUpdate(
    { _id },
    { $set: updateData },
    { new: true },
  );
  return carUdpdate;
};
//Delete One data
const carDeleteData_DB = async (_id: string) => {
  const result = await CarModel.deleteOne({ _id });
  return result;
};
export const carService = {
  carAddData_db,
  carGetData_db,
  carGetOneData_db,
  carPutData_db,
  carDeleteData_DB,
};
