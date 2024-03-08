import { Router } from "express";
import {
  addEmployeeRoute,
  getAllEmployeesRoute,
  getEmployeeFromPunchDetailsRoute,
} from "../services/employee-services";
import {
  addPunchInTimeRoute,
  getPunchInTimeFromIdRoute,
} from "../services/punchInTime-service";

const router = Router();

router.post("/addEmployee", addEmployeeRoute);
router.post("/addPunchInTime", addPunchInTimeRoute);
router.get("/getPunchInTimeFromId", getPunchInTimeFromIdRoute);
router.post("/getEmployeeWithPunchDetails", getEmployeeFromPunchDetailsRoute);
router.get("/getAllEmployee", getAllEmployeesRoute);

module.exports = router;
