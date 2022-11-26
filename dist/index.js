/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 832:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 962:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 139:
/***/ ((module) => {

module.exports = eval("require")("fs-extra");


/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(832);
const github = __nccwpck_require__(962);
const fs = __nccwpck_require__(139);
const path = __nccwpck_require__(17);

try {
  console.log(`starting script...!`);
  let relativePath = "./products";
  let products = [];

  const getAllFiles = fs
    .readdirSync(__nccwpck_require__.ab + "products")
    .filter((file) => path.extname(file) === ".json");

  getAllFiles.forEach((file) => {
    const fileData = fs.readFileSync(
      __nccwpck_require__.ab + "products/" + file
    );
    const product = JSON.parse(fileData.toString());
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

})();

module.exports = __webpack_exports__;
/******/ })()
;