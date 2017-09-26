/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1);\n\nvar _utils = __webpack_require__(6);\n\nfunction init() {\n  var formContainer = document.querySelector('#order-form-container');\n\n  if (formContainer) {\n    var formData = (0, _utils.getFormData)();\n\n    console.log(formData);\n  }\n}\n\ndocument.addEventListener('DOMContentLoaded', init);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/style.scss\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./src/style.scss?");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getFormData = undefined;\n\nvar _getFormData = __webpack_require__(7);\n\nvar _getFormData2 = _interopRequireDefault(_getFormData);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nexports.getFormData = _getFormData2.default;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/utils/index.js\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = getFormData;\nfunction getFormData() {\n  var formData = {};\n\n  formData.chosenProduct = window.app.chosenProduct;\n  window.app.data.forEach(function (product) {\n    var productId = product.product_id;\n\n    if (!formData[productId]) {\n      var productObject = {\n        label: '',\n        id: productId,\n        packages: []\n      };\n\n      formData[productId] = productObject;\n    }\n\n    var packageObject = {\n      id: product.package_id,\n      price: product.price,\n      weight: product.weight,\n      label: product.option_value\n    };\n\n    formData[productId].label = product.label;\n    formData[productId].packages.push(packageObject);\n  });\n\n  return formData;\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/utils/getFormData.js\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///./src/utils/getFormData.js?");

/***/ })
/******/ ]);