const core = require("@actions/core");
const github = require("@actions/github");
const yaml = require('js-yaml');
const fs = require("fs-extra");
const path = require("path");

try {
  console.log(`starting script...!`);
  let relativePath = "./products-1";
  let products = [];

  const getAllFiles = fs
    .readdirSync(path.resolve(relativePath))
    .filter((file) => path.extname(file) === ".yml");

  getAllFiles.forEach((file) => {
    const fileData = yaml.load(
      fs.readFileSync(path.join(`${path.resolve(relativePath)}`, file), "utf8")
    );
    console.log("🚀 ~ file: index.js:20 ~ getAllFiles.forEach ~ fileData", fileData)
    console.log("🚀 ~ file: index.js:22 ~ getAllFiles.forEach ~ fileData.on.workflow_call.inputs", fileData.on.workflow_call.inputs)
    const product = JSON.parse(fileData);
    // console.log("🚀 ~ file: index.js:22 ~ getAllFiles.forEach ~ product", product)
    products = [...products, ...product];
  });

  console.log("🚀 ~ file: index.js ~ line 26 ~ json", products);

  core.setOutput("products", products);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
