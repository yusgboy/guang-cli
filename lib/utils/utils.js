const clear = require("clear-console");
const fs = require("fs");

const clearConsole = () => {
  clear();
};
const readFileByPath = (path, encoding) => {
  const data = fs.readFileSync(path, encoding);
  return data;
};
const writeToFile = (path, content) => {
  fs.promises.writeFile(path, content);
};

module.exports = { clearConsole, readFileByPath, writeToFile };
