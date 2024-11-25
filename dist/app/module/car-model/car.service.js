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
exports.carService = void 0;
const car_model_1 = __importDefault(require("./car.model"));
// create data
const carAddData_db = (Car) => __awaiter(void 0, void 0, void 0, function* () {
    const carAdd = yield car_model_1.default.create(Car);
    return carAdd;
});
//Find all data
const carGetData_db = () => __awaiter(void 0, void 0, void 0, function* () {
    const carGet = yield car_model_1.default.find();
    return carGet;
});
//Find One data
const carGetOneData_db = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const carGet = yield car_model_1.default.findOne({ _id });
    return carGet;
});
// Update One data
const carPutData_db = (_id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const carUdpdate = yield car_model_1.default.findByIdAndUpdate({ _id }, { $set: updateData }, { new: true });
    return carUdpdate;
});
//Delete One data
const carDeleteData_DB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield car_model_1.default.deleteOne({ _id });
    return result;
});
exports.carService = {
    carAddData_db,
    carGetData_db,
    carGetOneData_db,
    carPutData_db,
    carDeleteData_DB,
};
