const program = require("commander");

const helpOptions = () => {
  program.option("-d --dest <dest>", "目标文件夹");
};

module.exports = helpOptions;
