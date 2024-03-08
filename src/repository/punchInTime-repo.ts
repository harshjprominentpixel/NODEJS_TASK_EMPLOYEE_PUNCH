import { EmployeeModel } from "../common/model/sequelize/employeeModel";
import { PunchInTimeModel } from "../common/model/sequelize/punchInTimeModel";

export const addPunchInTime = async (in_time_ist: Date, emp_id: number) => {
  try {
    await PunchInTimeModel.create({
      in_time_ist,
      emp_id,
    });
  } catch (error) {
    console.log("Adding Punch Time error : ", error);
  }
};

export const getPunchInTimeFromId = async (id: number) => {
  try {
    const punchInTimeData = await PunchInTimeModel.findByPk(id, {
      include: [
        {
          model: EmployeeModel,
          required: true,
          attributes: {
            exclude: ["id", "status"],
          },
        },
      ],
      attributes: { exclude: ["status", "id", "emp_id"] },
    });
    return punchInTimeData;
  } catch (error) {
    console.log("Error getting punch in time from id : ", error);
  }
};
