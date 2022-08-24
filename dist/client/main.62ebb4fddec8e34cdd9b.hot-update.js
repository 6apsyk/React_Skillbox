"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateskill_box_react"]("main",{

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.GenerateList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar genericList_css_1 = __importDefault(__webpack_require__(/*! ./genericList.css */ \"./src/shared/GenericList/genericList.css\"));\r\nvar noop = function () { }; // что не делать проверку на onClick\r\nfunction GenerateList(_a) {\r\n    var list = _a.list;\r\n    return (react_1.default.createElement(\"ul\", { className: genericList_css_1.default.mainBox }, list.map(function (_a) {\r\n        var _b = _a.As, As = _b === void 0 ? \"div\" : _b, className = _a.className, _c = _a.onClick, onClick = _c === void 0 ? noop : _c, text = _a.text, id = _a.id, href = _a.href, img = _a.img;\r\n        return (react_1.default.createElement(As, { className: className, onClick: function () { return onClick(id); }, key: id, href: href },\r\n            react_1.default.createElement(\"img\", { src: \"'../../images/svg/comments.svg'\", alt: \"\" }),\r\n            text));\r\n    })));\r\n}\r\nexports.GenerateList = GenerateList;\r\n\n\n//# sourceURL=webpack://skill-box-react/./src/shared/GenericList/GenericList.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("56ac9809337a7ff4596c")
/******/ })();
/******/ 
/******/ }
);