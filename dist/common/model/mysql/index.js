"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE, process.env.DB_USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    logging: false,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
});
module.exports = sequelize;
