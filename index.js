const core = require("@actions/core");
const github = require("@actions/github");
const yaml = require("js-yaml");
const fs = require("fs-extra");
const path = require("path");

try {
  console.log(`starting script...!`);
  let relativePath = "./products";
  let products = [];

  const getAllFiles = fs
    .readdirSync(path.resolve(relativePath))
    .filter((file) => path.extname(file) === ".yml");

  getAllFiles.forEach((file) => {
    const fileData = yaml.load(
      fs.readFileSync(path.join(`${path.resolve(relativePath)}`, file))
    );
    let product = JSON.parse(JSON.stringify(fileData));
    products = [...products, product];
  });

  console.log("🚀 ~ file: index.js ~ line 26 ~ json", products);

  // fs.writeFileSync('./test.json', JSON.stringify(products))

  core.setOutput("products", products);

  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
