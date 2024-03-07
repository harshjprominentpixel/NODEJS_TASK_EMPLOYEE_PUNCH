import { Sequelize } from "sequelize";
const dotenv = require("dotenv");
dotenv.config();

const sequelize: Sequelize = new Sequelize(
  process.env.DATABASE!,
  process.env.DB_USERNAME!,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    logging: false,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
