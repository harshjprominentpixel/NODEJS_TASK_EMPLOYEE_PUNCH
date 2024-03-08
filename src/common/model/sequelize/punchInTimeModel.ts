import { EmployeeModel } from "./employeeModel";

const { DataTypes } = require("sequelize");
const sequelize = require("../mysql/index");

export const PunchInTimeModel = sequelize.define(
  "punch_in_time",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    in_time_ist: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    out_time_ist: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    emp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: EmployeeModel,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.TINYINT,
      defaultValue: 1,
    },
  },
  {
    freezeTableName: true,
    tableName: "punch_in_time",
  }
);
