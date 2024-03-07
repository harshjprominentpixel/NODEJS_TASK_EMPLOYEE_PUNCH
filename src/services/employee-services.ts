import { Request, Response } from "express";

export const addEmployee = async (req: Request, res: Response) => {
  try {
    res.status(200).json(req.body);
  } catch (error) {
    console.log("Error creating employee : ", error);
    res.status(500).json(req.body);
  }
};
