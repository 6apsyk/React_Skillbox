"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
this["webpackHotUpdateskill_box_react"]("main",{

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar MenuIcon_1 = __importDefault(__webpack_require__(/*! ../../../../icon/MenuIcon/MenuIcon */ \"./src/icon/MenuIcon/MenuIcon.tsx\"));\r\nvar merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar bigList = [\r\n    { text: \"Комментарии\", As: \"div\", img: \"comments\", className: \"title\" },\r\n    { text: \"Поделиться\", As: \"div\", img: \"share\", className: \"title\" },\r\n    { text: \"Скрыть\", As: \"div\", img: \"hide\", className: \"title\" },\r\n    { text: \"Сохранить\", As: \"div\", img: \"save\", className: \"title\" },\r\n    { text: \"Пожаловаться\", As: \"div\", img: \"complain\", className: \"title\" },\r\n    { text: \"Закрыть\", As: \"div\", className: \"close\" },\r\n].map(generateRandomIndex_1.generateId);\r\nvar smallList = [\r\n    { text: \"Скрыть\", As: \"div\", img: \"hide\", className: \"title\" },\r\n    { text: \"Пожаловаться\", As: \"div\", img: \"complain\", className: \"title\" },\r\n    { text: \"Закрыть\", As: \"div\", className: \"close\" },\r\n].map(generateRandomIndex_1.generateId);\r\nfunction Menu() {\r\n    var _a = react_1.default.useState(bigList), list = _a[0], setList = _a[1];\r\n    var getButton = function () {\r\n        return (react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n            react_1.default.createElement(MenuIcon_1.default, null)));\r\n    };\r\n    var handleClick = function (id) {\r\n        console.log(id);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: getButton() },\r\n            react_1.default.createElement(GenericList_1.GenerateList, { list: list.map((0, merge_1.merge)({ onClick: onClick })) }))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack://skill-box-react/./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/utils/js/merge.ts":
/*!*******************************!*\
  !*** ./src/utils/js/merge.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.merge = void 0;\r\nvar merge = function (obj) {\r\n    return function (obj2) { return (__assign(__assign({}, obj), obj2)); };\r\n};\r\nexports.merge = merge;\r\n\n\n//# sourceURL=webpack://skill-box-react/./src/utils/js/merge.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5a5dbdf65667727c43c0")
/******/ })();
/******/ 
/******/ }
);