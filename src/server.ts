import express from "express";
const sequelize = require("./common/model/mysql/index");
const app = express();
const router = require("./routes/router");

//config dotenv
const dotenv = require("dotenv");
dotenv.config();

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

app.use("/", router);
