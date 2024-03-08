import { EmployeeModel } from "../common/model/sequelize/employeeModel";
import { PunchInTimeModel } from "../common/model/sequelize/punchInTimeModel";

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

export const getEmployeeFromPunchDetails = async (id: number) => {
  try {
    const employeeWithPunchDetails = await EmployeeModel.findByPk(id, {
      include: {
        model: PunchInTimeModel,
        // required: true,
      },
      order: [[PunchInTimeModel, "id", "DESC"]],
    });
    return employeeWithPunchDetails;
  } catch (error) {
    console.log("creating employee error : ", error);
  }
};

export const getAllEmployees = async () => {
  try {
    const allEmployees = await EmployeeModel.findAll();
    return allEmployees;
  } catch (error) {
    console.log("getting employees error : ", error);
  }
};
