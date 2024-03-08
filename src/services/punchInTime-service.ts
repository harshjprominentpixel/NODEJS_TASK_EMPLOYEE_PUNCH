import { Request, Response } from "express";
import { addPunchInTime } from "../repository/punchInTime-repo";
import { PunchInTime } from "../common/types/types";

export const addPunchInTimeRoute = async (req: Request, res: Response) => {
  try {
    const punchInTime: PunchInTime = {
      in_time_ist: req.body.in_time_ist,
      emp_id: req.body.emp_id,
    };
    await addPunchInTime(punchInTime.in_time_ist, punchInTime.emp_id);
    res.status(200).json({ message: "Punch In Time Added Successfully" });
  } catch (error) {
    console.log("Error creating employee : ", error);
    res.status(500).json({ message: "An error ocurred!" });
  }
};

// export const getPunchInTimeFromIdRoute = async
