import express from "express";
import { EmployeeModel } from "./common/model/sequelize/employeeModel";
import { PunchInTimeModel } from "./common/model/sequelize/punchInTimeModel";
import { copyAllFilesCron } from "./cronJobs/cron";
const sequelize = require("./common/model/mysql/index");
const app = express();
const router = require("./routes/router");
const bodyParser = require("body-parser");

//config dotenv
const dotenv = require("dotenv");
dotenv.config();

EmployeeModel.hasMany(PunchInTimeModel, { foreignKey: "emp_id" });
PunchInTimeModel.belongsTo(EmployeeModel, { foreignKey: "emp_id" });

// start express server
app.listen(process.env.PORT, () => {
  console.log("Server started on port", `http://localhost:${process.env.PORT}`);
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to Database successfully!");
  } catch (e) {
    console.log(e);
  }
})();

//added body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//all-routes
app.use("/", router);

app.use(async (req, res, next) => {
  //handling 404 routes
  res.status(200).end("Wrong Place!");
  res.end();
  next();
});

//run cron job
copyAllFilesCron();
