/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _primary_category_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./primary-category-selector */ \"./src/js/primary-category-selector.js\");\n\nvar __ = wp.i18n.__;\nvar registerPlugin = wp.plugins.registerPlugin;\nvar PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;\nvar Fragment = wp.element.Fragment;\nregisterPlugin(\"primary-category\", {\n  icon: '',\n  render: function render() {\n    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(PluginDocumentSettingPanel, {\n      title: __('Primary Category', 'primary-category')\n    }, /*#__PURE__*/React.createElement(_primary_category_selector__WEBPACK_IMPORTED_MODULE_0__.default, null)));\n  }\n});\n\n//# sourceURL=webpack://primary-category/./src/js/index.js?");

/***/ }),

/***/ "./src/js/primary-category-selector.js":
/*!*********************************************!*\
  !*** ./src/js/primary-category-selector.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _defineProperty(a, b, c) { if (b in a) { Object.defineProperty(a, b, { value: c, enumerable: true, configurable: true, writable: true }); } else { a[b] = c; } return a; }\n\nfunction _slicedToArray(a, b) { return _arrayWithHoles(a) || _iterableToArrayLimit(a, b) || _unsupportedIterableToArray(a, b) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(a, b) { if (!a) return; if (typeof a === \"string\") return _arrayLikeToArray(a, b); var c = Object.prototype.toString.call(a).slice(8, -1); if (c === \"Object\" && a.constructor) c = a.constructor.name; if (c === \"Map\" || c === \"Set\") return Array.from(a); if (c === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return _arrayLikeToArray(a, b); }\n\nfunction _arrayLikeToArray(a, b) { if (b == null || b > a.length) b = a.length; for (var c = 0, d = new Array(b); c < b; c++) { d[c] = a[c]; } return d; }\n\nfunction _iterableToArrayLimit(a, b) { var c = a == null ? null : typeof Symbol !== \"undefined\" && a[Symbol.iterator] || a[\"@@iterator\"]; if (c == null) return; var d = []; var _n = true; var e = false; var f, g; try { for (c = c.call(a); !(_n = (f = c.next()).done); _n = true) { d.push(f.value); if (b && d.length === b) break; } } catch (a) { e = true; g = a; } finally { try { if (!_n && c[\"return\"] != null) c[\"return\"](); } finally { if (e) throw g; } } return d; }\n\nfunction _arrayWithHoles(a) { if (Array.isArray(a)) return a; }\n\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    Fragment = _wp$element.Fragment,\n    useState = _wp$element.useState;\nvar SelectControl = wp.components.SelectControl;\nvar _wp$data = wp.data,\n    withDispatch = _wp$data.withDispatch,\n    withSelect = _wp$data.withSelect,\n    useSelect = _wp$data.useSelect;\nvar PrimaryCategorySelector = withSelect(function (a) {\n  // We'll need to wait for the API to return the categories before we can render.\n  var b = a('core/data'),\n      c = b.isResolving;\n  var d = {\n    per_page: 100\n  }; // Limit for now to be safe.\n  // Ensures that every time we check for the list of categories we know if\n  // we're still waiting, so we can keep waiting.\n\n  return {\n    categories: a('core').getEntityRecords('taxonomy', 'category', d),\n    isRequesting: c('core', 'getEntityRecords', ['taxonomy', 'category', d])\n  };\n})(function (a) {\n  if (a.isRequesting) {\n    // If we don't have the data yet, just render a loading message.\n    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(\"p\", null, \"Loading data...\"));\n  } // We can use state for our primary category selection.\n\n\n  var b = useState(false),\n      c = _slicedToArray(b, 2),\n      d = c[0],\n      e = c[1];\n\n  return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(SelectControl, {\n    label: __(\"Choose a primary category\", \"primary-category\"),\n    value: d,\n    options: a.categories.map(function (a) {\n      return {\n        label: a.name,\n        value: a.id\n      };\n    }),\n    onChange: function onChange(b) {\n      a.setMetaFieldValue(\"_pjpc_primary_category\", b);\n      e(b);\n    }\n  }));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withDispatch(function (a) {\n  return {\n    setMetaFieldValue: function setMetaFieldValue(b, c) {\n      a(\"core/editor\").editPost({\n        meta: _defineProperty({}, b, c)\n      });\n    }\n  };\n})(PrimaryCategorySelector));\n\n//# sourceURL=webpack://primary-category/./src/js/primary-category-selector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;