const cron = require("node-cron");
const fs = require("fs");
const path = require("path");

export const copyAllFilesCron = () => {
  cron.schedule("0 */3 * * *", () => {
    const sourceFolder = "./generatedPDFs";
    const destinationFolder = "./movedGeneratedFilePDFs";

    if (!fs.existsSync(sourceFolder)) {
      console.error("Source folder not found!");
      return;
    }

    if (!fs.existsSync(destinationFolder)) {
      fs.mkdirSync(destinationFolder);
    }

    fs.readdir(sourceFolder, (err: Error, files: File[]) => {
      if (err) {
        console.error("Error reading source folder:", err);
        return;
      }

      files.forEach((file) => {
        const sourceFilePath = path.join(sourceFolder, file);
        const destinationFilePath = path.join(destinationFolder, file);

        fs.rename(sourceFilePath, destinationFilePath, (err: Error) => {
          if (err) {
            console.error("Error moving file:", err);
          } else {
            console.log(`Moved file: ${file}`);
          }
        });
      });
    });
  });
};
