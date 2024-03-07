import { Request, Response } from "express";
import { addEmployee } from "../repository/employee-repo";
import { Employee } from "../common/types/types";

export const addEmployeeRoute = async (req: Request, res: Response) => {
  try {
    const employee : Employee = {
      name: req.body.name,
      dob: req.body.dob
    }
    await addEmployee(employee.name,employee.dob);
    res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log("Error creating employee : ", error);
    res.status(500).json({ message: "An error ocurred!" });
  }
};
