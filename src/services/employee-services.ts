import { Request, Response } from "express";
import {
  addEmployee,
  getAllEmployees,
  getEmployeeFromPunchDetails,
} from "../repository/employee-repo";
import { Employee } from "../common/types/types";

export const addEmployeeRoute = async (req: Request, res: Response) => {
  try {
    const employee: Employee = {
      name: req.body.name,
      dob: req.body.dob,
    };
    await addEmployee(employee.name, employee.dob);
    res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log("Error creating employee : ", error);
    res.status(500).json({ message: "An error ocurred!" });
  }
};

export const getEmployeeFromPunchDetailsRoute = async (
  req: Request,
  res: Response
) => {
  try {
    const employeeWithPunchdata = await getEmployeeFromPunchDetails(
      req.body.id
    );
    if (employeeWithPunchdata === null) {
      res.status(200).json({ message: "No Data Found" });
    } else {
      res.status(200).json(employeeWithPunchdata);
    }
  } catch (error) {
    console.log("Error getting employee with punch details");
  }
};

export const getAllEmployeesRoute = async (req: Request, res: Response) => {
  try {
    const allEmployees: Employee[] = await getAllEmployees();
    if (allEmployees === null || allEmployees.length === 0) {
      res.status(200).json({ message: "No Employees Available" });
    } else {
      res.status(200).send(allEmployees);
    }
  } catch (error) {
    console.log("getting employees error : ", error);
  }
};
