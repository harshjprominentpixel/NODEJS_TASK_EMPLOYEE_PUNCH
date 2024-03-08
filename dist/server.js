"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employeeModel_1 = require("./common/model/sequelize/employeeModel");
const punchInTimeModel_1 = require("./common/model/sequelize/punchInTimeModel");
const sequelize = require("./common/model/mysql/index");
const app = (0, express_1.default)();
const router = require("./routes/router");
const bodyParser = require("body-parser");
//config dotenv
const dotenv = require("dotenv");
dotenv.config();
employeeModel_1.EmployeeModel.hasMany(punchInTimeModel_1.PunchInTimeModel, { foreignKey: "emp_id" });
punchInTimeModel_1.PunchInTimeModel.belongsTo(employeeModel_1.EmployeeModel, { foreignKey: "emp_id" });
// start express server
app.listen(process.env.PORT, () => {
    console.log("Server started on port", `http://localhost:${process.env.PORT}`);
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log("Connected to Database successfully!");
    }
    catch (e) {
        console.log(e);
    }
}))();
//added body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//all-routes
app.use("/", router);
app.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //handling 404 routes
    res.status(200).end("Wrong Place!");
    res.end();
    next();
}));
