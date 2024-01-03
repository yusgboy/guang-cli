#!/usr/bin/env node
const { program } = require("commander");
const createCommand = require("../lib/core/create");
const helpOptions = require("../lib/core/help");
program.version(require("../package.json").version);

createCommand();
helpOptions();
program.parse(process.argv);
