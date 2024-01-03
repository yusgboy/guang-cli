const isObject = (value) => value && typeof value === "object";

class Generator {
  constructor(pkg, targetPath) {
    this.pkg = pkg;
    this.targetPath = targetPath;
  }

  extendPackage(fileds) {
    const { pkg } = this;
    Object.keys(fileds).forEach((key) => {
      const value = fileds[key];
      const existing = pkg[key];
      if (
        isObject(value) &&
        (key === "dependencies" ||
          key === "devDependencies" ||
          key === "scripts")
      ) {
        pkg[key] = Object.assign(existing || {}, value);
      } else {
        pkg[key] = value;
      }
    });
  }
}

module.exports = Generator;
