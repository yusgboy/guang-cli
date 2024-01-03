const fs = require("fs");
const path = require("path");
const { writeToFile } = require("../../utils/utils");

module.exports = (generator) => {
  generator.extendPackage({
    devDependencies: {
      "@typescript-eslint/eslint-plugin": "^6.17.0",
      "@typescript-eslint/parser": "^6.17.0",
      eslint: "^8.56.0",
      "eslint-config-airbnb-base": "^15.0.0",
      "eslint-plugin-vue": "^9.19.2",
    },
  });
  const data = fs.readFileSync(
    path.resolve(__dirname, "./template/.eslintrc.cjs"),
    "utf-8",
  );
  writeToFile(path.resolve(generator.targetPath, "./eslintrc.cjs"), data);
};
