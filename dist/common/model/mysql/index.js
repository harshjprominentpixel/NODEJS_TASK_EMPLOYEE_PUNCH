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
exports.initMySqlDB = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config/config"));
let sequelize;
const initMySqlDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const { MYSQL_DB: { DATABASE, DB_USERNAME, PASSWORD, HOST }, } = (0, config_1.default)();
    exports.sequelize = sequelize = new sequelize_1.Sequelize(DATABASE, DB_USERNAME, PASSWORD, {
        host: HOST,
        logging: false,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            idle: 10000,
        },
    });
    const testConnections = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            console.log("Connected to Database successfully!");
        }
        catch (e) {
            console.log(e);
        }
    });
    testConnections();
});
exports.initMySqlDB = initMySqlDB;
