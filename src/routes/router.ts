import { Router } from "express";
const EmployeeModel = require("../common/model/sequelize/employeeModel");
import { addEmployeeRoute } from "../services/employee-services";

const router = Router();

router.post("/addEmployee", addEmployeeRoute);

module.exports = router;
