import { Sequelize } from "sequelize";
import getConfig from "../../config/config";

let sequelize: Sequelize;

const initMySqlDB = async (): Promise<void> => {
  const {
    MYSQL_DB: { DATABASE, DB_USERNAME, PASSWORD, HOST },
  } = getConfig();

  sequelize = new Sequelize(DATABASE, DB_USERNAME, PASSWORD, {
    host: HOST,
    logging: false,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  });
  
  const testConnections = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connected to Database successfully!");
    } catch (e) {
      console.log(e);
    }
  };
  testConnections();
};

export { sequelize, initMySqlDB };
