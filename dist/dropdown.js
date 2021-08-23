/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dropdown.js":
/*!****************************!*\
  !*** ./src/js/dropdown.js ***!
  \****************************/
/***/ (() => {

eval("// Watch the dropdown for any changes.\ndocument.getElementsByName('primary-category-select')[0].onchange = function () {\n  var a = this.value; // Chosen value.\n  // Set a cookie with the new value.\n\n  document.cookie = 'pjpc_primary_cat=' + this.value; // Won't take effect until we reload.\n\n  location.reload();\n};\n\n//# sourceURL=webpack://primary-category/./src/js/dropdown.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/dropdown.js"]();
/******/ 	
/******/ })()
;