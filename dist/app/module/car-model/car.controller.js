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
Object.defineProperty(exports, "__esModule", { value: true });
exports.carController = void 0;
const car_service_1 = require("./car.service");
//Car Add
const AddCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carData = req.body;
        const data = yield car_service_1.carService.carAddData_db(carData);
        res.status(200).json({
            massage: 'Car created successfully',
            success: true,
            data: data,
        });
    }
    catch (err) {
        res.status(500).json({
            massage: 'something went wrong',
            success: false,
            error: err,
        });
    }
});
//Car Get All
const GetALLCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield car_service_1.carService.carGetData_db();
        res.status(200).json({
            massage: 'Car created successfully',
            success: true,
            data: data,
        });
    }
    catch (err) {
        res.status(500).json({
            massage: 'something went wrong',
            success: false,
            error: err,
        });
    }
});
// Car get one
const GetOneCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const data = yield car_service_1.carService.carGetOneData_db(carId);
        res.status(200).json({
            massage: 'Car created successfully',
            success: true,
            data: data,
        });
    }
    catch (err) {
        res.status(500).json({
            massage: 'something went wrong',
            success: false,
            error: err,
        });
    }
});
// Car Update One
const UpdetOneCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const updateData = req.body;
        const data = yield car_service_1.carService.carPutData_db(carId, updateData);
        res.status(200).json({
            massage: 'Car created successfully',
            success: true,
            data: data,
        });
    }
    catch (err) {
        res.status(500).json({
            massage: 'something went wrong',
            success: false,
            error: err,
        });
    }
});
// Car Delete From DataBase
const CarDeletFormData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { carId } = req.params;
        const result = yield car_service_1.carService.carDeleteData_DB(carId);
        res.status(200).json({
            success: true,
            message: 'Student is deleted succesfully',
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'something went wrong',
            error: err,
        });
    }
});
exports.carController = {
    AddCar,
    GetALLCar,
    GetOneCar,
    UpdetOneCar,
    CarDeletFormData,
};
