const { program } = require("commander");
const clone = require("git-clone/promise");
const path = require("path");
const { vue3Template } = require("../config");
const { execCommand } = require("../utils/terminal");
const createPrompts = require("./prompts");
const { readFileByPath } = require("../utils/utils");
const Generator = require("./generator");

const createProjectAction = async (projectName) => {
  const { features } = await createPrompts();

  const destination = program.opts().dest
    ? path.resolve(program.opts().dest, `./${projectName}`)
    : `./${projectName}`;

  // 下载模板
  await clone(vue3Template, destination, {
    checkout: "main",
    shallow: true,
  });
  // 拿出模板中的package.json
  const pkg = readFileByPath(
    path.resolve(destination, `./package.json`),
    "utf-8",
  );
  const generator = new Generator(JSON.parse(pkg), destination);
  features.forEach((feature) => {
    require(`../generator/${feature}`)(generator); // eslint-disable-line
  });
  // 执行npm install
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  const commandStr = `${npm} install`;
  await execCommand(commandStr, { cwd: destination });
};

module.exports = {
  createProjectAction,
};
