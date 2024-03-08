const cron = require("node-cron");

export const copyAllFilesCron = () => {
  cron.schedule("* * * * *", () => {
    console.log("running a task every minute");
  });
};
