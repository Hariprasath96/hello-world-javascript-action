const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  const jsonArray = [
    { name: 'repo 1', repoName: 'repo-1', version: 'v1.0.0' },
    { name: 'repo 2', repoName: 'repo-1', version: 'v1.0.0' },
    { name: 'repo 3', repoName: 'repo-3', version: 'v1.0.0' },
    { name: 'test 1', repoName: 'test-1', version: 'v1.0.0' },
    { name: 'test 2', repoName: 'test-2', version: 'v1.0.0' }
  ]
  core.setOutput("time", jsonArray);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}