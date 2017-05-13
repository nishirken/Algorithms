const fs = require('fs-extra');
const path = require('path');

module.exports = async (fileNameSuccess, fileNameFailure, logData = {}) => {
  const fileName = logData.foundedIndex ? fileNameSuccess : fileNameFailure;
  const logsPath = path.resolve(process.cwd(), 'logs', fileName);
  const logToWrite = `${logData.algoName}:
    ${logData.spentTime},
    array length: ${logData.arrayLength},
    founded index: ${logData.foundedIndex},
    founded value: ${logData.foundedValue}\n\n`;

  try {
    await fs.appendFile(logsPath, logToWrite);
    console.log('Successfully wrote a log');
  } catch (error) {
    console.log(error);
  }
};
