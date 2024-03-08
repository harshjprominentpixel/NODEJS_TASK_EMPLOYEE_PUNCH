import { Router } from "express";
import { addEmployeeRoute } from "../services/employee-services";
import {
  addPunchInTimeRoute,
  getPunchInTimeFromIdRoute,
} from "../services/punchInTime-service";

const router = Router();

router.post("/addEmployee", addEmployeeRoute);
router.post("/addPunchInTime", addPunchInTimeRoute);
router.get("/getPunchInTimeFromId", getPunchInTimeFromIdRoute);

module.exports = router;
