import { Request, Response } from "express";
import {
  addPunchInTime,
  getPunchInTimeFromId,
} from "../repository/punchInTime-repo";
import { PunchInTime } from "../common/types/types";

export const addPunchInTimeRoute = async (req: Request, res: Response) => {
  try {
    const punchInTime: PunchInTime = {
      in_time_ist: req.body.in_time_ist,
      out_time_ist: req.body.out_time_ist,
      emp_id: req.body.emp_id,
    };
    await addPunchInTime(
      punchInTime.in_time_ist,
      punchInTime.out_time_ist,
      punchInTime.emp_id
    );
    res.status(200).json({ message: "Punch In Time Added Successfully" });
  } catch (error) {
    console.log("Error creating employee : ", error);
    res.status(500).json({ message: "An error ocurred!" });
  }
};

export const getPunchInTimeFromIdRoute = async (
  req: Request,
  res: Response
) => {
  try {
    const punchInTimeData = await getPunchInTimeFromId(req.body.id);
    if (punchInTimeData === null) {
      res.status(200).json({ message: "Data Not Found" });
    } else {
      res.status(200).json(punchInTimeData);
    }
  } catch (error) {
    console.log("Error getting punch in time from id : ", error);
  }
};
