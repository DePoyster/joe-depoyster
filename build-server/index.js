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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_components_App_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/components/App.js */ \"./src/components/App.js\");\n/* harmony import */ var _src_data_resdata_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/data/resdata.json */ \"./src/data/resdata.json\");\n//Joe DePoyster \n//COSC 4210 final\n\n\n\n\n\n\n\n\nvar PORT = process.env.PORT || 8080;\nvar app = express__WEBPACK_IMPORTED_MODULE_4___default()();\napp.set('view engine', 'react');\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default()[\"static\"]('public'));\napp.get(\"/\", function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default().renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src_components_App_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    resdata: _src_data_resdata_json__WEBPACK_IMPORTED_MODULE_6__\n  }));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve(\"./dist/index.html\");\n  fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, \"utf8\", function (err, data) {\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.listen(PORT, function () {\n  return console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://final-project-depoyster/./index.js?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Resume__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resume */ \"./src/components/Resume.js\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ \"./src/components/Navbar.js\");\n/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ \"./src/components/Title.js\");\n//Joe DePoyster\n//Final Project cosc 4210\n\n\n\n\n\nfunction App(_ref) {\n  var resdata = _ref.resdata;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Resume__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    resdata: resdata\n  }));\n}\n\n//# sourceURL=webpack://final-project-depoyster/./src/components/App.js?");

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/gr */ \"react-icons/gr\");\n/* harmony import */ var react_icons_gr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n//Joe DePoyster\n//cosc 4210 final project\n\n\n\n\nfunction Navbar() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isOpen = _useState2[0],\n    setIsOpen = _useState2[1];\n  var arrowIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__.GrCaretNext, null);\n  var toggleMenu = function toggleMenu() {\n    setIsOpen(!isOpen);\n  };\n  isOpen ? arrowIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__.GrCaretPrevious, null) : arrowIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_gr__WEBPACK_IMPORTED_MODULE_1__.GrCaretNext, null);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"slide-out-menu \".concat(isOpen ? 'open' : '')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: toggleMenu,\n    className: \"toggle-button\"\n  }, arrowIcon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"About\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Contact\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, \"Careers\")));\n}\n\n//# sourceURL=webpack://final-project-depoyster/./src/components/Navbar.js?");

/***/ }),

/***/ "./src/components/ResPoints.js":
/*!*************************************!*\
  !*** ./src/components/ResPoints.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResPoints)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//Joe DePoyster\n//Final Project COSC 4210\n\n\nfunction ResPoints(_ref) {\n  var point = _ref.point;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", null, point);\n}\n\n//# sourceURL=webpack://final-project-depoyster/./src/components/ResPoints.js?");

/***/ }),

/***/ "./src/components/ResSectionData.js":
/*!******************************************!*\
  !*** ./src/components/ResSectionData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResSectionData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ResPoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResPoints */ \"./src/components/ResPoints.js\");\n//Joe DePoyster\n//Final Proejct COSC 4210\n\n\n\nfunction ResSectionData(_ref) {\n  var name = _ref.name,\n    company = _ref.company,\n    date = _ref.date,\n    points = _ref.points;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    style: {\n      textDecoration: 'underline'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      fontWeight: 'bold'\n    }\n  }, name), ' | ', \" \", company, ' | ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      fontStyle: 'italic'\n    }\n  }, date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, points.map(function (e, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResPoints__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: i,\n      point: e\n    });\n  })));\n}\n\n//# sourceURL=webpack://final-project-depoyster/./src/components/ResSectionData.js?");

/***/ }),

/***/ "./src/components/ResSections.js":
/*!***************************************!*\
  !*** ./src/components/ResSections.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResSections)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ResSectionData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResSectionData */ \"./src/components/ResSectionData.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n//Joe DePoyster\n//Final Project cosc 4210\n\n\n\nfunction ResSections(_ref) {\n  var section = _ref.section,\n    data = _ref.data;\n  if (section === \"Skills\") {\n    var list = data.join(',  ');\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, section), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, list));\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, section), data.map(function (e, i) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResSectionData__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({\n        key: i\n      }, e));\n    }));\n  }\n}\n\n//# sourceURL=webpack://final-project-depoyster/./src/components/ResSections.js?");

/***/ }),

/***/ "./src/components/Resume.js":
/*!**********************************!*\
  !*** ./src/components/Resume.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Resume)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ResSections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResSections */ \"./src/components/ResSections.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n//Joe DePoyster\n//Final Project cosc 4210\n\n\n\nfunction Resume(_ref) {\n  var resdata = _ref.resdata;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"resume\"\n  }, resdata.map(function (data, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ResSections__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({\n      key: i\n    }, data));\n  })));\n}\n\n//# sourceURL=webpack://final-project-depoyster/./src/components/Resume.js?");

/***/ }),

/***/ "./src/components/Title.js":
/*!*********************************!*\
  !*** ./src/components/Title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n//Joe DePoyster\n//Final Project cosc 4210\n\n\nfunction Title() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \" Joe DePoyster\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", null, \"jdepoyst@uwyo.edu   |   (307)413-5715\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \" B.S. Computer Science, University of Wyoming \")));\n}\n\n//# sourceURL=webpack://final-project-depoyster/./src/components/Title.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-icons/gr":
/*!*********************************!*\
  !*** external "react-icons/gr" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/gr");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./src/data/resdata.json":
/*!*******************************!*\
  !*** ./src/data/resdata.json ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"section\":\"Skills\",\"data\":[\"C\",\"C++\",\"Java\",\"Javascript\",\"Linux, GNU, FOSS\",\"Node, React, Express, Webpack\",\"Embedded Systems, Microchips\",\"Version Control\",\"Microsoft Suite\",\"Documentation\",\"Customer Service\",\"Teamwork & Communication\"]},{\"section\":\"Projects\",\"data\":[{\"name\":\"Web App Development\",\"company\":\"Personal\",\"date\":\"November 2022 - Present\",\"points\":[\"Built Resume website from scratch as self-started project using Wordpress\",\"Currently developing website using React front end with Express back end\",\"Learned how to read documentation and to figure out things alone\"]},{\"name\":\"Linux Development\",\"company\":\"Wyoming Infrared Observatory\",\"date\":\"September 2020 - May 2021\",\"points\":[\"Worked on Linux Kernel modules for 50 year old hardware\",\"Debugged C code, reverse engineering to create diagram of how code worked\",\"Wrote Linux C utilities that interfaced with OS system calls \"]},{\"name\":\"IT Work\",\"company\":\"Bennet Paint & Glass\",\"date\":\"January 2021\",\"points\":[\"Installed end user systems and point of sales machiens in new office space\",\"Worked with customers to configure machines to their liking, explaining things simply\",\"Installed Ethernet switch and cables, set up new private network\"]}]},{\"section\":\"Experience\",\"data\":[{\"name\":\"Software Engineering Intern\",\"company\":\"EMIT Technologies\",\"date\":\"June 2023 - August 2023\",\"points\":[\"Modified microcontroller code on natural gas engine control unit\",\"Increased efficiency, speed, and robustness of I2C protocol implementation by reprogramming it to be interrupt driven instead of blocking\",\"Added functionality for ECU to run without HMI by modifying digital and analog I/O handling, FreeRTOS operating system, and CAN bus data\",\"Wrote unit tests in code base, and ran integration testing on engine\",\"Collaborated with senior engineers through digital messages and oral communication. Prepared questions and progress reports for meetings\"]},{\"name\":\"Co-Owner\",\"company\":\"Native Sun\",\"date\":\"June 2020 - Present\",\"points\":[\"Independently operated and maintained mobile kitchen and staff\",\"Innovated business ideas and recipes based off of customer feedback\",\"Introduced to business planning and financing in entrepreneurial setting\"]},{\"name\":\"Sound & Lighting Technician\",\"company\":\"UW-ASTEC\",\"date\":\"September 2019 - December 2021\",\"points\":[\"Professionally set up stages for concerts & PA systems for events on UW campus\",\"Programmed lights and lighting console. Dialed in Speakers and mixing board\",\"Got various devices from different makes, models and years to work together by reading manuals and troubleshooting\"]},{\"name\":\"Bartender\",\"company\":\"\\\\\"The Library\\\\\" bar and grill\",\"date\":\"September 2018 - June 2020, Jan-May 2023\",\"points\":[\"Provided Quality customer service in a fast-paced enviroment\",\"One of many jobs worked that payed my own way through college\",\"Learned time managment skills to balance work and school\"]},{\"name\":\"Roofer\",\"company\":\"APEX Contracting and Consulting\",\"date\":\"Summers of 2016, 2017, 2018\",\"points\":[\"Installed certified roofs backed by 30-year warranty\",\"Lead roofing crews, often training new employees while on the job\",\"Worked all areas of construction contracting, learning as I went\"]}]}]');\n\n//# sourceURL=webpack://final-project-depoyster/./src/data/resdata.json?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;