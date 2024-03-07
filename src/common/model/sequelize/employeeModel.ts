const { DataTypes } = require("sequelize");
const sequelize = require("../mysql/index");

export const EmployeeModel = sequelize.define(
  "employee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
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
  }
);
