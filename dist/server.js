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
const mysql_1 = require("./common/model/mysql");
const app = (0, express_1.default)();
//config dotenv
const dotenv = require("dotenv");
dotenv.config();
// start express server
app.listen(process.env.PORT, () => {
    console.log("Server started on port", `http://localhost:${process.env.PORT}`);
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, mysql_1.initMySqlDB)();
    }
    catch (e) {
        console.log(e);
    }
}))();
