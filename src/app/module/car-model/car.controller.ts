import { Request, Response } from 'express';
import { carService } from './car.service';
//Car Add
const AddCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;
    const data = await carService.carAddData_db(carData);
    res.status(200).json({
      massage: 'Car created successfully',
      success: true,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      massage: 'something went wrong',
      success: false,
      error: err,
    });
  }
};

//Car Get All
const GetALLCar = async (req: Request, res: Response) => {
  try {
    const data = await carService.carGetData_db();
    res.status(200).json({
      massage: 'Car created successfully',
      success: true,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      massage: 'something went wrong',
      success: false,
      error: err,
    });
  }
};
// Car get one
const GetOneCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const data = await carService.carGetOneData_db(carId);
    res.status(200).json({
      massage: 'Car created successfully',
      success: true,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      massage: 'something went wrong',
      success: false,
      error: err,
    });
  }
};
// Car Update One
const UpdetOneCar = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const updateData = req.body;
    const data = await carService.carPutData_db(carId, updateData);
    res.status(200).json({
      massage: 'Car created successfully',
      success: true,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      massage: 'something went wrong',
      success: false,
      error: err,
    });
  }
};

// Car Delete From DataBase
const CarDeletFormData = async (req: Request, res: Response) => {
  try {
    const { carId } = req.params;
    const result = await carService.carDeleteData_DB(carId);
    res.status(200).json({
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};
export const carController = {
  AddCar,
  GetALLCar,
  GetOneCar,
  UpdetOneCar,
  CarDeletFormData,
};
