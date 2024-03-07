import { Router } from "express";
const EmployeeModel = require("../common/model/sequelize/employeeModel");
import { addEmployee } from "../services/employee-services";

const router = Router();

router.post("/addEmployee", addEmployee);

module.exports = router;
