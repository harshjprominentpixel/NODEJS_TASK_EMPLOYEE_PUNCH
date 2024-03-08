import { Router } from "express";
import { addEmployeeRoute } from "../services/employee-services";
import { addPunchInTimeRoute } from "../services/punchInTime-service";

const router = Router();

router.post("/addEmployee", addEmployeeRoute);
router.post("/addPunchInTime", addPunchInTimeRoute);

module.exports = router;
