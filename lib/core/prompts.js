const inquirer = require("inquirer");
const { clearConsole } = require("../utils/utils");

const createPrompts = async () => {
  clearConsole();
  const initPrompts = {
    name: "features",
    message: "Check the features needed for your project:",
    pageSize: 10,
    type: "checkbox",
    choices: [{ name: "eslint", value: "eslint" }],
  };
  const answers = await inquirer.prompt(initPrompts);
  return answers;
};

module.exports = createPrompts;
