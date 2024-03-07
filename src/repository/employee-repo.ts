import { EmployeeModel } from "../common/model/sequelize/employeeModel";

export const addEmployee = async (name: string, dob: Date) => {
  try {
    await EmployeeModel.create({
      name,
      dob,
    });
  } catch (error) {
    console.log("creating employee error : ", error);
  }
};
