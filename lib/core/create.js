const { program } = require("commander");
const { createProjectAction } = require("./action");

const createCommand = () => {
  program
    .command("create <projectName> [otherArgs...]")
    .description("创建项目")
    .action(createProjectAction);
};

module.exports = createCommand;
