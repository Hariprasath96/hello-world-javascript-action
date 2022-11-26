const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs-extra");
const path = require("path");

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello Hariiii prazz...!`);
  const time = new Date().toTimeString();

  let relativePath = "./products";
  console.log("🚀 ~ file: index.js ~ line 19 ~ relativePath", relativePath);
  let absolutePath = path.resolve(relativePath);
  console.log("🚀 ~ file: index.js ~ line 21 ~ absolutePath", absolutePath);

  const jsonsInDir = fs
    .readdirSync(absolutePath)
    .filter((file) => extname(file) === ".json");
  let arr = [];

  jsonsInDir.forEach((file) => {
    const fileData = fs.readFileSync(join(`${absolutePath}`, file));

    const json = JSON.parse(fileData.toString());
    console.log(
      "🚀 ~ file: test.js ~ line 18 ~ jsonsInDir.forEach ~ json",
      json
    );
    arr = [...arr, ...json];
  });

  // const fileData = fs.readFileSync(absolutePath);
  // const json = JSON.parse(fileData.toString());
  console.log("🚀 ~ file: index.js ~ line 26 ~ json", arr);
  console.log(`File read output ${arr}`);

  core.setOutput("time", arr);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
