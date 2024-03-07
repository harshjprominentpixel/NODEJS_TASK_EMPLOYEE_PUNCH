import express from "express";
import { sequelize, initMySqlDB } from "./common/model/mysql";
const app = express();

//config dotenv
const dotenv = require("dotenv");
dotenv.config();

// start express server
app.listen(process.env.PORT, () => {
  console.log("Server started on port", `http://localhost:${process.env.PORT}`);
});

(async ()=>{
  try{
    initMySqlDB();
  }catch(e){
    console.log(e);
  }
})();