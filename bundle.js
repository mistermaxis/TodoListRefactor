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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background-color: rgb(49, 61, 100);\\r\\n  color: white;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n}\\r\\n\\r\\n.app {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  padding: 0 0.5rem;\\r\\n  font-family: 'Bebas Neue';\\r\\n  background-color: rgba(60,76,101,1);\\r\\n  color: rgb(226, 243, 255);\\r\\n}\\r\\n\\r\\n#root {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  height: 100vh;\\r\\n  padding: 0 1rem;\\r\\n  background-size: cover;\\r\\n  background-position: bottom;\\r\\n  background-repeat: no-repeat;\\r\\n  background-image: url(https://getwallpapers.com/wallpaper/full/4/5/2/57761.jpg);\\r\\n  \\r\\n}\\r\\n\\r\\n.add-text {\\r\\n  padding: 0.5rem;\\r\\n  font-size: 1.25rem;\\r\\n  color: rgb(67, 27, 75);\\r\\n  border: none;\\r\\n  background-color: rgba(220, 223, 248, 0.5);\\r\\n}\\r\\n\\r\\n.add-text:focus {\\r\\n  outline: none;\\r\\n  background-color: rgba(245, 245, 245, 0.75);\\r\\n\\r\\n}\\r\\n\\r\\n.add-text::placeholder {\\r\\n  color: rgb(6, 12, 65);\\r\\n}\\r\\n\\r\\n.item-list {\\r\\n  height: 100%;\\r\\n  overflow-y: auto;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\n.center {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.empty-container {\\r\\n  background-color: rgba(2, 2, 2, 0.555);\\r\\n}\\r\\n\\r\\n.empty-text {\\r\\n  font-size: 1.25rem;\\r\\n  padding: 0 0.72rem;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  height: 4rem;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  flex: 2;\\r\\n  margin: 1rem;\\r\\n  padding: 0.5rem 1rem;\\r\\n  font-size: 1.25rem;\\r\\n  background-color: rgba(4, 11, 26, 0.507);\\r\\n}\\r\\n\\r\\n.remove-button {\\r\\n  border: none;\\r\\n  padding: 0.5rem;\\r\\n  border-radius: 0.5rem;\\r\\n  background-color: rgba(124, 72, 247, 0.65);\\r\\n}\\r\\n\\r\\n.trash-icon {\\r\\n  color: white;\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n\\r\\n.clear-button {\\r\\n  padding: 1rem 0;\\r\\n  color:rgb(250, 250, 250);\\r\\n  background-color:rgba(41, 55, 134, 0.9);\\r\\n  border: none;\\r\\n  font-size: 1.25rem;\\r\\n}\\r\\n\\r\\n.animation-remove {\\r\\n  overflow: hidden;\\r\\n  animation: remove 0.2s ease-in forwards;\\r\\n}\\r\\n\\r\\n@keyframes remove {\\r\\n  100% {\\r\\n    height: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.animation-add {\\r\\n  overflow: hidden;\\r\\n  animation: add 0.2s ease-in forwards;\\r\\n}\\r\\n\\r\\n@keyframes add {\\r\\n  0% {\\r\\n    height: 0;\\r\\n  }\\r\\n  \\r\\n  100% {\\r\\n    height: 4rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n\\r\\n@media (orientation: landscape) {\\r\\n  header {\\r\\n    background: none;\\r\\n    padding: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 600px) {\\r\\n  #root {\\r\\n    width: 75%;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  #root {\\r\\n    width: 50%;\\r\\n  }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpackproject/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpackproject/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpackproject/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpackproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass DataManager {\n    #list;\n\n    constructor(storage) {\n        this.#list = storage || [];\n    }\n\n    add(item) {\n        this.#list.unshift(item);\n    }\n\n    remove(idx) {\n        this.#list = this.#list.filter((item, index) => idx !== index);\n    }\n\n    clear() {\n        this.#list = this.#list.filter(item => item.completed === false);\n    }\n\n    setCompleted(index, completed) {\n        this.#list[index].completed = completed;\n    }\n\n    get list() {\n        return this.#list;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataManager);\n\n//# sourceURL=webpack://webpackproject/./src/data.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html */ \"./src/html.js\");\n\n\nclass DisplayManager {\n    #html;\n    #root;\n\n    constructor() {\n        this.#root = document.getElementById('root');\n        this.#html = new _html__WEBPACK_IMPORTED_MODULE_0__.default();\n    }\n\n    display() {\n        this.#root.appendChild(this.#html.textInput);\n        this.#root.appendChild(this.#html.itemList);\n        this.#root.appendChild(this.#html.clearAllButton);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DisplayManager);\n\n//# sourceURL=webpack://webpackproject/./src/display.js?");

/***/ }),

/***/ "./src/handler.js":
/*!************************!*\
  !*** ./src/handler.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\n\nclass HandlerFunctions {\n    #storage;\n    #data;\n    #itemList;\n    #empty;\n    #input;\n\n    constructor(itemlist, input) {\n        this.#storage = new _storage__WEBPACK_IMPORTED_MODULE_0__.default();\n        this.#data = new _data__WEBPACK_IMPORTED_MODULE_1__.default(this.#storage.load());\n        this.#itemList = itemlist;\n        this.#input = input;\n\n        this.#empty = document.createElement('div');\n        this.#empty.classList.add('item', 'empty-container');\n       \n        const message = document.createElement('span');\n        message.classList.add('empty-text');\n        message.innerText = 'No tasks have been added';\n        \n        this.#empty.appendChild(message);\n        \n        this.#input.addInput.addEventListener('keyup', (e) => this.handleTextInput(e));\n        this.#input.clearButton.addEventListener('click', () => this.handleClearAll());\n    }\n\n    generateTask(task) {\n        const todoItem = document.createElement('div');\n\n        todoItem.classList.add('item');\n\n        if (task.animation !== '') {\n            todoItem.classList.add(task.animation);\n        }\n        \n        todoItem.addEventListener('animationend', () => {\n            todoItem.classList.remove('animation-add');\n        })\n\n        task.animation = '';\n\n        this.#storage.save(this.#data.list);\n        \n        const checkBox = this.#input.checkBox();\n        checkBox.checked = task.completed;\n\n        checkBox.addEventListener('change', (e) => this.handleCheckboxChange(e));\n\n        const description = document.createElement('span');\n        description.classList.add('description');\n        description.innerText = task.description;\n        description.classList.add('text');\n\n        const removeButton = this.#input.removeButton();\n\n        removeButton.addEventListener('click', (e) => this.handleRemoveTask(e));\n\n        todoItem.appendChild(checkBox);\n        todoItem.appendChild(description);\n        todoItem.appendChild(removeButton);\n        this.#itemList.appendChild(todoItem);\n    }\n\n    updateTasks() {\n        if (this.#data.list && this.#data.list.length > 0) {\n            const listChildren = this.#itemList.children;\n\n            if (listChildren.length > 0 && listChildren[0] === this.#empty) {\n                this.#empty.classList.remove('animation-add');\n                this.#empty.classList.add('animation-remove');\n\n                setTimeout(() => {\n                    this.#itemList.classList.remove('center');\n                    this.#itemList.innerHTML = '';\n                    this.#data.list.forEach(task => {\n                    this.generateTask(task);\n                    });\n                }, 300);\n            }\n            else {\n                this.#itemList.innerHTML = '';\n                this.#data.list.forEach(task => {\n                this.generateTask(task);\n                });\n            }\n        }\n        else {\n            this.#itemList.innerHTML = '';\n            this.#itemList.classList.add('center');\n            this.#empty.classList.remove('animation-remove');\n            this.#empty.classList.add('animation-add');\n            this.#itemList.appendChild(this.#empty);\n        }\n    }\n\n    handleTextInput(event) {\n        const text = event.currentTarget;\n\n        if (event.key === 'Enter') {            \n            if (text.value.length > 0) {\n                const newItem = {\n                    description: text.value,\n                    completed: false,\n                    animation: 'animation-add',\n                }\n               \n                text.value = '';\n\n                this.#data.add(newItem);\n                this.updateTasks();\n            }\n        }\n    }\n\n    handleCheckboxChange(event) {\n        const items = Array.from(event.currentTarget.parentElement.parentElement.children);\n        const item = event.currentTarget.parentElement;\n\n        const index = items.indexOf(item);\n\n        this.#data.setCompleted(index, event.currentTarget.checked);\n        this.#storage.save(this.#data.list);\n\n    }\n\n    handleRemoveTask(event) {\n        const items = Array.from(event.currentTarget.parentElement.parentElement.children);\n        const item = event.currentTarget.parentElement;\n\n        console.log(event.currentTarget.checked);\n        \n        item.classList.add('animation-remove');\n        \n        const index = items.indexOf(item);\n\n        this.#data.remove(index);\n        //this.#storage.save(this.#data.list);\n\n        setTimeout(() => {\n            this.updateTasks();\n        }, 500);\n    }\n\n    handleClearAll() {\n        this.#data.clear();\n        const items = this.#itemList.querySelectorAll('input.checkbox');\n\n        items.forEach(item => {\n            if (item.checked === true) {\n                item.parentElement.classList.add('animation-remove');\n            }\n        })\n\n        //this.#storage.save(this.#data.list);\n        setTimeout(() => {\n            this.updateTasks();\n        }, 250);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HandlerFunctions);\n\n//# sourceURL=webpack://webpackproject/./src/handler.js?");

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/list.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n\n\n\nclass HTMLManager {\n    #list;\n    #input;\n    #itemList;\n\n    constructor() {\n        this.#itemList = document.createElement('section');\n        this.#itemList.classList.add('item-list');\n\n        this.#input = new _input__WEBPACK_IMPORTED_MODULE_1__.default();\n\n        this.#list = new _list__WEBPACK_IMPORTED_MODULE_0__.default(this.#itemList, this.#input);\n\n        this.#list.update();\n    }\n\n    get textInput() {\n        return this.#input.addInput;\n    }\n   \n    get itemList () {\n        return this.#itemList;\n    }\n\n    get clearAllButton() {\n        return this.#input.clearButton;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTMLManager);\n\n//# sourceURL=webpack://webpackproject/./src/html.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\nconst listApp = new _todo__WEBPACK_IMPORTED_MODULE_0__.default();\n\nlistApp.init();\n\n\n//# sourceURL=webpack://webpackproject/./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass InputManager {\n    #add;\n    #clear;\n    \n    constructor() {\n        this.#add = document.createElement('input');\n        this.#add.type = 'text';\n        this.#add.placeholder = 'Add a task';\n        this.#add.classList.add('add-text');\n\n        this.#clear = document.createElement('button');\n        this.#clear.innerText = 'Clear Completed';\n        this.#clear.classList.add('clear-button');\n    }\n    \n    get addInput() {\n        return this.#add;\n    }\n\n    get clearButton() {\n        return this.#clear;\n    }\n\n    checkBox() {\n        const checkbox = document.createElement('input');\n        checkbox.type = 'checkbox';\n        checkbox.classList.add('checkbox');\n\n        return checkbox;\n    }\n\n    removeButton() {\n        const remove = document.createElement('button');\n        remove.type = 'button';\n        remove.classList.add('remove-button');\n\n        const trash = document.createElement('i');\n        trash.classList.add('fas', 'fa-trash-alt', 'trash-icon');\n\n        remove.appendChild(trash);\n        return remove;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputManager);\n\n//# sourceURL=webpack://webpackproject/./src/input.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ \"./src/handler.js\");\n\n\nclass ListManager {\n    #handler;\n\n    constructor(itemlist, input) {\n        this.#handler = new _handler__WEBPACK_IMPORTED_MODULE_0__.default(itemlist, input);\n    }\n\n    update() {\n        this.#handler.updateTasks();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListManager);\n\n//# sourceURL=webpack://webpackproject/./src/list.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass StorageManager {\n    #storage;\n\n    constructor() {\n        this.#storage = window.localStorage;\n    }\n\n    save(data) {\n        this.#storage.setItem('data', JSON.stringify(data));\n    }\n\n    load() {\n       const data = JSON.parse(this.#storage.getItem('data'));\n       return data;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageManager);\n\n//# sourceURL=webpack://webpackproject/./src/storage.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n\n\n\nclass TodoList {\n    #displayManager;\n\n    constructor() {\n        \n        this.#displayManager = new _display__WEBPACK_IMPORTED_MODULE_1__.default();\n    }\n\n    init() {\n        this.#displayManager.display();\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);\n\n\n//# sourceURL=webpack://webpackproject/./src/todo.js?");

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
/******/ 			id: moduleId,
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;