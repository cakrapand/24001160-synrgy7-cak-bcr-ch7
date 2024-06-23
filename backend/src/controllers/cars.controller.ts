import { Request, Response, Router } from "express";
import {
  createCar,
  deleteCar,
  getAvailable,
  getCar,
  getCars,
  updateCar,
} from "../services/cars.service";

export const create = async (req: Request, res: Response) => {
  try {
    const { name, price, isAvailable, startRent, finishRent, photoUrl } = req.body;
    if (!name || !price || !isAvailable || !startRent || !finishRent || !photoUrl)
      return res.status(400).json({ message: "Invalid Input" });

    await createCar({
      name,
      price,
      isAvailable,
      startRent,
      finishRent,
      photoUrl,
      createdBy: req.user!.id,
      updatedBy: req.user!.id,
    });

    return res.status(201).json({ message: "New car created" });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const cars = await getCars();
    return res.status(200).json({ message: "OK", data: cars });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const get = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cars = await getCar(+id);
    return res.status(200).json({ message: "OK", data: cars });
  } catch (error: any) {
    return res.status(error.statusCode ? error.statusCode : 500).json({ message: error.message });
  }
};

export const available = async (req: Request, res: Response) => {
  try {
    const cars = await getAvailable();
    return res.status(200).json({ message: "OK", data: cars });
  } catch (error: any) {
    return res.status(error.statusCode ? error.statusCode : 500).json({ message: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, price, isAvailable, startRent, finishRent, photoUrl } = req.body;

    if (!name && !price && !isAvailable && !startRent && !finishRent)
      return res.status(400).json({ message: "Invalid Input" });

    await getCar(+id);
    await updateCar(+id, {
      name,
      price,
      isAvailable,
      startRent,
      finishRent,
      photoUrl,
      updatedBy: req.user!.id,
    });

    return res.status(200).json({ message: "Car updated" });
  } catch (error: any) {
    return res.status(error.statusCode ? error.statusCode : 500).json({ message: error.message });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await getCar(+id);
    await deleteCar(+id, req.user!.id);

    return res.status(200).json({ message: "Car Deleted" });
  } catch (error: any) {
    return res.status(error.statusCode ? error.statusCode : 500).json({ message: error.message });
  }
};
