import { Request, Response } from "express";
import {
  addEmployee,
  getAllEmployees,
  getEmployeeWithPunchDetails,
} from "../repository/employee-repo";
import { Employee } from "../common/types/types";
const puppeteer = require("puppeteer");
const fs = require("fs");
const moment = require("moment");

export const addEmployeeRoute = async (req: Request, res: Response) => {
  try {
    const employee: Employee = {
      name: req.body.name,
      dob: req.body.dob,
    };
    await addEmployee(employee.name, employee.dob);
    res.status(200).json({ message: "User Created Successfully" });
  } catch (error) {
    console.log("Error creating employee : ", error);
    res.status(500).json({ message: "An error ocurred!" });
  }
};

export const getEmployeeFromPunchDetailsRoute = async (
  req: Request,
  res: Response
) => {
  try {
    const employeeWithPunchdata = await getEmployeeWithPunchDetails(
      req.body.id
    );
    if (employeeWithPunchdata === null) {
      res.status(200).json({ message: "No Data Found" });
    } else {
      res.status(200).json(employeeWithPunchdata);
    }
  } catch (error) {
    console.log("Error getting employee with punch details");
  }
};

export const getAllEmployeesRoute = async (req: Request, res: Response) => {
  try {
    const allEmployees: Employee[] = await getAllEmployees();
    if (allEmployees === null || allEmployees.length === 0) {
      res.status(200).json({ message: "No Employees Available" });
    } else {
      res.status(200).send(allEmployees);
    }
  } catch (error) {
    console.log("getting employees error : ", error);
  }
};

export const generatePDFRoute = async (req: Request, res: Response) => {
  try {
    const employeeWithPunchdata = await getEmployeeWithPunchDetails(
      req.body.id
    );
    if (employeeWithPunchdata === null) {
      res.status(200).json({ message: "No Data Found" });
    } else {
      // res.status(200).json(employeeWithPunchdata);
      (async () => {
        const browser = await puppeteer.launch({
          headless: true,
        });
        const page = await browser.newPage();
        const html1 = fs.readFileSync(
          `${__dirname}/../../template.html`,
          "utf8"
        );
        const middleHtml = `<h1>Name : ${employeeWithPunchdata.name}</h1><h1>DOB : ${employeeWithPunchdata.dob}</h1><h1>Punch Times</h1>`;
        let middleHtml1;
        middleHtml1 = `<table><tr><th style="background-color:'#04aa6d'">Punch Date</th><th>In Time</th><th>Out Time</th><th>Total Spend Hours</th></tr>`;
        for (let i = 0; i < employeeWithPunchdata.punch_in_times.length; i++) {
          middleHtml1 =
            middleHtml1 +
            `<tr><td>${moment(
              employeeWithPunchdata.punch_in_times[i].in_time_ist
            ).format("dddd, Do MMMM YYYY")}</td><td>${moment(
              moment(employeeWithPunchdata.punch_in_times[i].out_time_ist).utc()
            ).format("LT")}</td><td>${moment(
              moment(employeeWithPunchdata.punch_in_times[i].out_time_ist).utc()
            ).format("LT")}</td><td>${moment(
              moment(employeeWithPunchdata.punch_in_times[i].out_time_ist).utc()
            ).diff(
              moment(employeeWithPunchdata.punch_in_times[i].in_time_ist),
              "hours"
            )}</td></tr>`;
        }
        let html =
          html1 +
          middleHtml +
          middleHtml1 +
          `
          </table>
        </body>
        </html>
        `;
        await page.setContent(html, {
          waitUntil: "domcontentloaded",
        });
        await page.pdf({
          format: "A4",
          path: `${__dirname}/../../generatedPDFs/${new Date()}.pdf`,
          printBackground:true
        });
        await browser.close();
      })();
      res.status(200).json({
        message: "PDF generated Successfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
