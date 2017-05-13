const fs = require('fs-extra');
const path = require('path');

module.exports = async (fileNameSuccess, fileNameFailure, logData = {}) => {
  const fileName = logData.value ? fileNameSuccess : fileNameFailure;
  const logsPath = path.resolve(process.cwd(), 'logs', fileName);
  const logToWrite = `${logData.algoName}:
    ${logData.spentTime},
    initial: ${logData.initial},
    founded index: ${logData.foundedIndex},
    value: ${logData.value}\n\n`;

  try {
    await fs.appendFile(logsPath, logToWrite);
    console.log('Successfully wrote a log');
  } catch (error) {
    console.error(error);
  }
};
