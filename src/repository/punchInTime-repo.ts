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
