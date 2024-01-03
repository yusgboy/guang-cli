const { exec } = require("child_process");

const execCommand = (command, options) => {
  return new Promise((resolve, reject) => {
    exec(command, options, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};

module.exports = {
  execCommand,
};
