/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./main-background-min.webp */ "./src/main-background-min.webp"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
}

:root {
    --main-color-1: rgb(245, 158, 11, 0.5);
    --main-color-2: #fef3c7;
    --main-color-3: #38bdf8;
    --main-color-4: #ef4444;
}

html {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
}

body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.header {
    background-color: var(--main-color-1, brown);
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 12px;
}

.main {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    flex: 1;
}

.nav,
.display {
    padding: 2rem;
    margin: 2rem;
    background-color: rgb(0, 0, 0, 0.6);
    box-shadow: 2px 2px 12px black;
    border-radius: 12px;
    color: white;
}

.nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;    
}

.display {
    flex: 3;
    display: flex;
    flex-direction: column;
}

.footer {
    background-color: var(--main-color-1, brown);
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.footer a {
    color: black;
}

button {
    padding: 0.3rem;
    border-radius: 8px;
}

.new-project-form {
    padding: 1rem;
    border: 2px solid white;
    border-radius: 12px;
}

.new-project-form li {
    list-style: none;
    display: flex;
    padding: 0.1rem 0;    
}

.form-buttons-wrapper {
    display: flex;
    justify-content: space-between;
}

input {
    flex: 1;
    padding-left: 0.1rem;
}

textarea {
    box-sizing: border-box;
    flex: 1;
    padding: 0.5rem;
}
select {
    flex: 1;
}

.projects-div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.project-element-title {
    flex: 1;
    background-color: var(--main-color-2, lightyellow);
}

.project-element-title:hover {
    transform: translate(0, -0.2rem)
}

.new-project-button {
    background-color: var(--main-color-3, skyblue);
}

.new-project-button:active {
    color: white;
}

.new-project-button.clicked:active {
    background-color: var(--main-color-4, red);
    color: white;
}

.submit-button,
.save-edit-button {
    background-color: var(--main-color-3, skyblue);
    padding: 0.5rem;
}

.submit-button:active,
.save-edit-button:active {
    color: white;
}

.cancel-form-button {
    background-color: var(--main-color-4, red);
    padding: 0.5rem;
}

.cancel-form-button:active,
.delete-project-button.active {
    color: white;
}

.delete-project-button {
    background-color: var(--main-color-4, red);
}

.edit-project-button {
    background-color: var(--main-color-1, brown);

}
.edit-project-button,
.delete-project-button {
    margin-top: 0.3rem;
    width: fit-content;
    align-self: flex-end;
    align-items: center;
    display: flex;  
}

/* Render objects to display */

.project-display {
    display: flex;
    flex-direction: column;
    background-color: var(--main-color-2, lightyellow);
    color: black;
    border-radius: 12px;
    padding: 1rem;
}

.project-display-title {
    padding-bottom: 1rem;
    text-decoration: underline;
}

.to-do-display {
    padding: 1rem;
    border: 2px solid white;
    border-radius: 12px;
}

h1 {
    text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,sCAAsC;IACtC,uBAAuB;IACvB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,yDAAmD;IACnD,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,OAAO;AACX;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,mCAAmC;IACnC,8BAA8B;IAC9B,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,4CAA4C;IAC5C,eAAe;IACf,aAAa;IACb,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,OAAO;IACP,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,OAAO;IACP,eAAe;AACnB;AACA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,OAAO;IACP,kDAAkD;AACtD;;AAEA;IACI;AACJ;;AAEA;IACI,8CAA8C;AAClD;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;;IAEI,8CAA8C;IAC9C,eAAe;AACnB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,0CAA0C;IAC1C,eAAe;AACnB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,4CAA4C;;AAEhD;AACA;;IAEI,kBAAkB;IAClB,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;AACjB;;AAEA,8BAA8B;;AAE9B;IACI,aAAa;IACb,sBAAsB;IACtB,kDAAkD;IAClD,YAAY;IACZ,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --main-color-1: rgb(245, 158, 11, 0.5);\n    --main-color-2: #fef3c7;\n    --main-color-3: #38bdf8;\n    --main-color-4: #ef4444;\n}\n\nhtml {\n    background-image: url(\"./main-background-min.webp\");\n    background-size: cover;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    background-color: var(--main-color-1, brown);\n    padding: 1rem 3rem;\n    display: flex;\n    align-items: center;\n    box-shadow: 2px 2px 12px;\n}\n\n.main {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: stretch;\n    flex: 1;\n}\n\n.nav,\n.display {\n    padding: 2rem;\n    margin: 2rem;\n    background-color: rgb(0, 0, 0, 0.6);\n    box-shadow: 2px 2px 12px black;\n    border-radius: 12px;\n    color: white;\n}\n\n.nav {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;    \n}\n\n.display {\n    flex: 3;\n    display: flex;\n    flex-direction: column;\n}\n\n.footer {\n    background-color: var(--main-color-1, brown);\n    padding: 0.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.footer a {\n    color: black;\n}\n\nbutton {\n    padding: 0.3rem;\n    border-radius: 8px;\n}\n\n.new-project-form {\n    padding: 1rem;\n    border: 2px solid white;\n    border-radius: 12px;\n}\n\n.new-project-form li {\n    list-style: none;\n    display: flex;\n    padding: 0.1rem 0;    \n}\n\n.form-buttons-wrapper {\n    display: flex;\n    justify-content: space-between;\n}\n\ninput {\n    flex: 1;\n    padding-left: 0.1rem;\n}\n\ntextarea {\n    box-sizing: border-box;\n    flex: 1;\n    padding: 0.5rem;\n}\nselect {\n    flex: 1;\n}\n\n.projects-div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-element-title {\n    flex: 1;\n    background-color: var(--main-color-2, lightyellow);\n}\n\n.project-element-title:hover {\n    transform: translate(0, -0.2rem)\n}\n\n.new-project-button {\n    background-color: var(--main-color-3, skyblue);\n}\n\n.new-project-button:active {\n    color: white;\n}\n\n.new-project-button.clicked:active {\n    background-color: var(--main-color-4, red);\n    color: white;\n}\n\n.submit-button,\n.save-edit-button {\n    background-color: var(--main-color-3, skyblue);\n    padding: 0.5rem;\n}\n\n.submit-button:active,\n.save-edit-button:active {\n    color: white;\n}\n\n.cancel-form-button {\n    background-color: var(--main-color-4, red);\n    padding: 0.5rem;\n}\n\n.cancel-form-button:active,\n.delete-project-button.active {\n    color: white;\n}\n\n.delete-project-button {\n    background-color: var(--main-color-4, red);\n}\n\n.edit-project-button {\n    background-color: var(--main-color-1, brown);\n\n}\n.edit-project-button,\n.delete-project-button {\n    margin-top: 0.3rem;\n    width: fit-content;\n    align-self: flex-end;\n    align-items: center;\n    display: flex;  \n}\n\n/* Render objects to display */\n\n.project-display {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--main-color-2, lightyellow);\n    color: black;\n    border-radius: 12px;\n    padding: 1rem;\n}\n\n.project-display-title {\n    padding-bottom: 1rem;\n    text-decoration: underline;\n}\n\n.to-do-display {\n    padding: 1rem;\n    border: 2px solid white;\n    border-radius: 12px;\n}\n\nh1 {\n    text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-manipulation.js":
/*!*********************************!*\
  !*** ./src/dom-manipulation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearDisplay: () => (/* binding */ clearDisplay),
/* harmony export */   displayNewProjectForm: () => (/* binding */ displayNewProjectForm),
/* harmony export */   makeNewProjectButtonActive: () => (/* binding */ makeNewProjectButtonActive),
/* harmony export */   makeNewProjectButtonInactive: () => (/* binding */ makeNewProjectButtonInactive),
/* harmony export */   renderProjectsInNav: () => (/* binding */ renderProjectsInNav)
/* harmony export */ });
/* harmony import */ var _icons_edit_button_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/edit-button-icon.svg */ "./src/icons/edit-button-icon.svg");
/* harmony import */ var _icons_delete_button_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/delete-button-icon.svg */ "./src/icons/delete-button-icon.svg");
/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do */ "./src/to-do.js");





function clearDisplay() {
    const display = document.querySelector('.display');
    display.innerHTML = '\
    <h2>To Begin:</h2><br><li> Create a new project</li>\
    <li> Pick an existing project from the list</li>'
}

function makeNewProjectButtonActive() {
    const newProjectButton = document.querySelector(".new-project-button");
    newProjectButton.classList.remove("clicked");
}

function makeNewProjectButtonInactive() {
    const newProjectButton = document.querySelector(".new-project-button");
    newProjectButton.classList.add("clicked");
}
 
function displayNewProjectForm() {
    const display = document.querySelector('.display');
    display.innerHTML ='\
    <form action="" class="new-project-form">\
        <h1>Create New Project</h1>\
        <li><label for="title" >Project Title:</label></li>\
        <li><input type="text" id="title" value=""></li>\
        <li><label for="priority">Pick Priority:</label></li>\
        <li>\
            <select name="priority" id="priority">\
                <option value="None">None</option>\
                <option value="High">High</option>\
                <option value="Medium">Medium</option>\
                <option value="Low">Low</option>\
            </select>\
        </li>\
        <li><label for="date">Due Date:</label></li>\
        <li><input type="date" id="date" value=""></li>\
        <li><label for="description">Description:</label>\</li>\
        <li><textarea name="description" id="description" cols="" rows="20"></textarea></li>\
        <li class="form-buttons-wrapper">\
        <button type="button" class="cancel-form-button">Cancel</button>\
        <button type="submit" class="submit-button">Create Project</button>\
        </li>\
    </form>';
    
    const cancelButton = document.querySelector(".cancel-form-button");
    cancelButton.addEventListener("click", () => cancelProjectSubmission());
};

function cancelProjectSubmission() {
    makeNewProjectButtonActive();
    clearDisplay();
};

function renderProjectsInNav(projectsLibrary) {
    const projectsDiv = document.querySelector(".projects-div");
    projectsDiv.innerHTML = "";

    projectsLibrary.getLibrary().forEach(currentProject => {
        let projectElement = document.createElement("button");
        projectElement.className = "project-element-title";
        if (!currentProject.title) currentProject.title="Default Project";
        projectElement.textContent = currentProject.title;
        setCurrentProjectId(projectsLibrary, currentProject);
        setMatchingIdForProjectElement(projectElement, currentProject.id);
        projectsDiv.appendChild(projectElement);
    });

    addEventListenerToProjectElements(projectsLibrary);
};

function setCurrentProjectId(projectsLibrary, project) {
    project.id = projectsLibrary.getLibrary().indexOf(project);
};

function setMatchingIdForProjectElement(projectElement, id) {
    projectElement.setAttribute("data-id", id);
};

function addEventListenerToProjectElements(projectsLibrary) {
    let projectsTitlesList = document.querySelectorAll(".project-element-title");
    projectsTitlesList.forEach(project => {
        let projectId = project.dataset.id;
        project.addEventListener("click", () => {renderProjectInDisplay(projectsLibrary,projectsLibrary.getLibrary()[projectId])});
    });
};

function renderProjectInDisplay(projectsLibrary, project) {
    makeNewProjectButtonActive();
    const displayDiv = document.querySelector(".display");
    displayDiv.innerHTML = `\
    <div class="project-display">\
        <h1 class="project-display-title">${project.title}</h1>\
        <li><strong>Priority:</strong> ${project.priority}</li>\
        <li><strong>Due Date:</strong> ${project.dueDate}</li>\
        <li><strong>Project Description:</strong> ${project.description}\</li>\
        <button class="edit-project-button"><img src="${_icons_edit_button_icon_svg__WEBPACK_IMPORTED_MODULE_0__}" height="17px"/>Edit Project</button>\
        <button class="delete-project-button"><img src="${_icons_delete_button_icon_svg__WEBPACK_IMPORTED_MODULE_1__}" height="17px"/>Delete Project</button>
    </div>\
    <br>\
    <div class="to-do-display">\
        <h3>To-do:</h3><br>
        <li>Task 1</li>\
        <li>Task 2</li>\
        <li>Task 3</li>\
        <li>Task 4</li>\
        <li>Task 5</li>\
    </div>`
    const editButton = document.querySelector(".edit-project-button");
    editButton.addEventListener("click", () =>  editProject(project));

    const deleteButton = document.querySelector(".delete-project-button");
    deleteButton.addEventListener("click", () => deleteProject(projectsLibrary, project));
}

function editProject(project) {
    const display = document.querySelector('.display');
    display.innerHTML =`\
    <form action="" class="new-project-form">\
        <h1>Edit Project "<em>${project.title}</em>"</h1>\
        <li><label for="title" >Project Title:</label></li>\
        <li><input type="text" id="title" value="${project.title}"></li>\
        <li><label for="priority">Pick Priority:</label></li>\
        <li>\
            <select name="priority" id="priority">\
            <script></script>
                <option value="None">None</option>\
                <option value="High">High</option>\
                <option value="Medium">Medium</option>\
                <option value="Low">Low</option>\
            </select>\
        </li>\
        <li><label for="date">Due Date:</label></li>\
        <li><input type="date" id="date" value="${project.dueDate}"></li>\
        <li><label for="description">Description:</label>\</li>\
        <li><textarea name="description" id="description" cols="" rows="20">${project.description}</textarea></li>\
        <li class="form-buttons-wrapper">\
        <button type="button" class="cancel-form-button">Cancel</button>\
        <button type="submit" class="save-edit-button">Save Changes</button>\
        </li>\
    </form>`;
    
    //have the option for priority set as selected
    const options = document.querySelectorAll("option");
    options.forEach(option => {if(option.value == project.priority) option.setAttribute('selected','selected')})

    const cancelButton = document.querySelector(".cancel-form-button");
    cancelButton.addEventListener("click", () => cancelProjectSubmission());

    const saveChangesButton = document.querySelector(".save-edit-button");
    saveChangesButton.addEventListener("click", (e) => {
        e.preventDefault();
        (0,_to_do__WEBPACK_IMPORTED_MODULE_2__.updateProject)(project);
        clearDisplay();
    });
    
}

 function deleteProject(projectsLibrary, project) {
    if(confirm(`Are you sure you want to delete project ${project.title}?`)) {
        projectsLibrary.removeProject(project.id);
        renderProjectsInNav(projectsLibrary);
        clearDisplay();
    } else {
     return
    }
}

/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProject: () => (/* binding */ createNewProject),
/* harmony export */   createProjectsLibrary: () => (/* binding */ createProjectsLibrary),
/* harmony export */   getProjectFormData: () => (/* binding */ getProjectFormData),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
// Brainstorm what kind of properties your todo-items are going to have. 
// At a minimum they should have a title, description, dueDate and priority. 
// You might also want to include notes or even a checklist.

const createProjectsLibrary = () => {
    const library = [];

    const addProject = (project) => library.push(project);
    const removeProject = (projectIndex) => library.splice(projectIndex, 1);
    const getLibrary = () => library;

    return { addProject, removeProject, getLibrary}
}

function getProjectFormData() {
    const title = document.getElementById("title").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    return [title, priority, dueDate, description]
}

const createNewProject = (formInput) => {
    let title = formInput[0];
    let priority = formInput[1];
    let dueDate = formInput[2];
    let description = formInput[3];
    return {title, priority, dueDate, description}
}

function updateProject(project) {
    [project.title, project.priority, project.dueDate, project.description] = getProjectFormData();
    const projectElement = document.querySelector(`[data-id="${project.id}"]`);
    if (!project.title) project.title="Default Project";
    projectElement.textContent = project.title;
}




/***/ }),

/***/ "./src/icons/delete-button-icon.svg":
/*!******************************************!*\
  !*** ./src/icons/delete-button-icon.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3672ce28d245c8f7bbef.svg";

/***/ }),

/***/ "./src/icons/edit-button-icon.svg":
/*!****************************************!*\
  !*** ./src/icons/edit-button-icon.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3f873c198725dfd3da2d.svg";

/***/ }),

/***/ "./src/main-background-min.webp":
/*!**************************************!*\
  !*** ./src/main-background-min.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f3ed65e1f29dc987463c.webp";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _to_do_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-do.js */ "./src/to-do.js");
/* harmony import */ var _dom_manipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-manipulation */ "./src/dom-manipulation.js");




const body = document.querySelector("body");

const header = document.createElement("div");
header.className = "header";
header.innerHTML = "<h1>My To-Do List</h1>";
body.appendChild(header);

const main = document.createElement("div");
main.className = "main";

const nav = document.createElement("div"); 
nav.className = "nav";


const homeHeader = document.createElement("h2");
homeHeader.textContent = "Home";

const projectsHeader = document.createElement("h2");
projectsHeader.textContent = "Projects:";

const newProjectButton = document.createElement("button");
newProjectButton.className = "new-project-button";
newProjectButton.textContent = "New Project +";

const protectsListDiv = document.createElement("div");
protectsListDiv.className = "projects-div";

nav.appendChild(homeHeader);
nav.appendChild(projectsHeader);
nav.appendChild(newProjectButton);
nav.appendChild(protectsListDiv);
main.appendChild(nav);

const display = document.createElement("div");
display.className = "display";
display.innerHTML = '\
<h2>To Begin:</h2><br><li> Create a new project</li>\
<li> Pick an existing project from the list</li>'

main.appendChild(display);
body.appendChild(main);

const footer = document.createElement("div");
footer.className = "footer";
footer.innerHTML = '\
<p>Background photo by <a href="https://unsplash.com/@andrewtneel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Neel\
</a> on <a href="https://unsplash.com/photos/cckf4TsHAuw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>\
<a href="https://github.com/Ivaylo92Ivanov">Created by Ivaylo I.</a>';

body.appendChild(footer);

 
let projectsLibrary = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.createProjectsLibrary)();

newProjectButton.addEventListener("click", () => {
    if (newProjectButton.classList.contains("clicked")) {
        // do nothing
    } else {
        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.displayNewProjectForm)();
        (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.makeNewProjectButtonInactive)();
        const newProjectFormSubmitButton = document.querySelector(".submit-button");
        newProjectFormSubmitButton.addEventListener("click", e => {
            e.preventDefault();
            let currentProject = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)((0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.getProjectFormData)());
            projectsLibrary.addProject(currentProject);
            (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.renderProjectsInNav)(projectsLibrary);
            (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.clearDisplay)();
            (0,_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.makeNewProjectButtonActive)();
        });
    };
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFX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QUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixnRUFBcUI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixRQUFRLHdFQUFxQjtBQUM3QixRQUFRLCtFQUE0QjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkRBQWdCLENBQUMsNkRBQWtCO0FBQ3BFO0FBQ0EsWUFBWSxzRUFBbUI7QUFDL0IsWUFBWSwrREFBWTtBQUN4QixZQUFZLDZFQUEwQjtBQUN0QyxTQUFTO0FBQ1Q7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90by1kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9tYWluLWJhY2tncm91bmQtbWluLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gICAgLS1tYWluLWNvbG9yLTE6IHJnYigyNDUsIDE1OCwgMTEsIDAuNSk7XG4gICAgLS1tYWluLWNvbG9yLTI6ICNmZWYzYzc7XG4gICAgLS1tYWluLWNvbG9yLTM6ICMzOGJkZjg7XG4gICAgLS1tYWluLWNvbG9yLTQ6ICNlZjQ0NDQ7XG59XG5cbmh0bWwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59XG5cbi5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSwgYnJvd24pO1xuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4O1xufVxuXG4ubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBmbGV4OiAxO1xufVxuXG4ubmF2LFxuLmRpc3BsYXkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjYpO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdiB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtOyAgICBcbn1cblxuLmRpc3BsYXkge1xuICAgIGZsZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEsIGJyb3duKTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mb290ZXIgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5uZXctcHJvamVjdC1mb3JtIHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5uZXctcHJvamVjdC1mb3JtIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMC4xcmVtIDA7ICAgIFxufVxuXG4uZm9ybS1idXR0b25zLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcbn1cblxudGV4dGFyZWEge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5zZWxlY3Qge1xuICAgIGZsZXg6IDE7XG59XG5cbi5wcm9qZWN0cy1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLnByb2plY3QtZWxlbWVudC10aXRsZSB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTIsIGxpZ2h0eWVsbG93KTtcbn1cblxuLnByb2plY3QtZWxlbWVudC10aXRsZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMnJlbSlcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCBza3libHVlKTtcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbjphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbi5jbGlja2VkOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCByZWQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdC1idXR0b24sXG4uc2F2ZS1lZGl0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCBza3libHVlKTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5zdWJtaXQtYnV0dG9uOmFjdGl2ZSxcbi5zYXZlLWVkaXQtYnV0dG9uOmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FuY2VsLWZvcm0tYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTQsIHJlZCk7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uY2FuY2VsLWZvcm0tYnV0dG9uOmFjdGl2ZSxcbi5kZWxldGUtcHJvamVjdC1idXR0b24uYWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNCwgcmVkKTtcbn1cblxuLmVkaXQtcHJvamVjdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSwgYnJvd24pO1xuXG59XG4uZWRpdC1wcm9qZWN0LWJ1dHRvbixcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDAuM3JlbTtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4OyAgXG59XG5cbi8qIFJlbmRlciBvYmplY3RzIHRvIGRpc3BsYXkgKi9cblxuLnByb2plY3QtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMiwgbGlnaHR5ZWxsb3cpO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wcm9qZWN0LWRpc3BsYXktdGl0bGUge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udG8tZG8tZGlzcGxheSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG5oMSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5REFBbUQ7SUFDbkQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsT0FBTztBQUNYOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLE9BQU87SUFDUCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87SUFDUCxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLDhDQUE4QztJQUM5QyxlQUFlO0FBQ25COztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksNENBQTRDOztBQUVoRDtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBLDhCQUE4Qjs7QUFFOUI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtEQUFrRDtJQUNsRCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tY29sb3ItMTogcmdiKDI0NSwgMTU4LCAxMSwgMC41KTtcXG4gICAgLS1tYWluLWNvbG9yLTI6ICNmZWYzYzc7XFxuICAgIC0tbWFpbi1jb2xvci0zOiAjMzhiZGY4O1xcbiAgICAtLW1haW4tY29sb3ItNDogI2VmNDQ0NDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9tYWluLWJhY2tncm91bmQtbWluLndlYnBcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xLCBicm93bik7XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm5hdixcXG4uZGlzcGxheSB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtOyAgICBcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBmbGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xLCBicm93bik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0gbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAwLjFyZW0gMDsgICAgXFxufVxcblxcbi5mb3JtLWJ1dHRvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbnNlbGVjdCB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5wcm9qZWN0cy1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnByb2plY3QtZWxlbWVudC10aXRsZSB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMiwgbGlnaHR5ZWxsb3cpO1xcbn1cXG5cXG4ucHJvamVjdC1lbGVtZW50LXRpdGxlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMnJlbSlcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMywgc2t5Ymx1ZSk7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b246YWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uLmNsaWNrZWQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCByZWQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLFxcbi5zYXZlLWVkaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCBza3libHVlKTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbjphY3RpdmUsXFxuLnNhdmUtZWRpdC1idXR0b246YWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2FuY2VsLWZvcm0tYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCByZWQpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5jYW5jZWwtZm9ybS1idXR0b246YWN0aXZlLFxcbi5kZWxldGUtcHJvamVjdC1idXR0b24uYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCByZWQpO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSwgYnJvd24pO1xcblxcbn1cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbixcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4OyAgXFxufVxcblxcbi8qIFJlbmRlciBvYmplY3RzIHRvIGRpc3BsYXkgKi9cXG5cXG4ucHJvamVjdC1kaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0yLCBsaWdodHllbGxvdyk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheS10aXRsZSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnRvLWRvLWRpc3BsYXkge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBFZGl0SWNvbiBmcm9tIFwiLi9pY29ucy9lZGl0LWJ1dHRvbi1pY29uLnN2Z1wiXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiLi9pY29ucy9kZWxldGUtYnV0dG9uLWljb24uc3ZnXCJcbmltcG9ydCB7IHVwZGF0ZVByb2plY3QgfSBmcm9tIFwiLi90by1kb1wiO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckRpc3BsYXkoKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG4gICAgZGlzcGxheS5pbm5lckhUTUwgPSAnXFxcbiAgICA8aDI+VG8gQmVnaW46PC9oMj48YnI+PGxpPiBDcmVhdGUgYSBuZXcgcHJvamVjdDwvbGk+XFxcbiAgICA8bGk+IFBpY2sgYW4gZXhpc3RpbmcgcHJvamVjdCBmcm9tIHRoZSBsaXN0PC9saT4nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTmV3UHJvamVjdEJ1dHRvbkFjdGl2ZSgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VOZXdQcm9qZWN0QnV0dG9uSW5hY3RpdmUoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtYnV0dG9uXCIpO1xuICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG59XG4gXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU5ld1Byb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuICAgIGRpc3BsYXkuaW5uZXJIVE1MID0nXFxcbiAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWZvcm1cIj5cXFxuICAgICAgICA8aDE+Q3JlYXRlIE5ldyBQcm9qZWN0PC9oMT5cXFxuICAgICAgICA8bGk+PGxhYmVsIGZvcj1cInRpdGxlXCIgPlByb2plY3QgVGl0bGU6PC9sYWJlbD48L2xpPlxcXG4gICAgICAgIDxsaT48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCJcIj48L2xpPlxcXG4gICAgICAgIDxsaT48bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5QaWNrIFByaW9yaXR5OjwvbGFiZWw+PC9saT5cXFxuICAgICAgICA8bGk+XFxcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiPlxcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5Ob25lPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cXFxuICAgICAgICAgICAgPC9zZWxlY3Q+XFxcbiAgICAgICAgPC9saT5cXFxuICAgICAgICA8bGk+PGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPjwvbGk+XFxcbiAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHZhbHVlPVwiXCI+PC9saT5cXFxuICAgICAgICA8bGk+PGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cXDwvbGk+XFxcbiAgICAgICAgPGxpPjx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIlwiIHJvd3M9XCIyMFwiPjwvdGV4dGFyZWE+PC9saT5cXFxuICAgICAgICA8bGkgY2xhc3M9XCJmb3JtLWJ1dHRvbnMtd3JhcHBlclwiPlxcXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FuY2VsLWZvcm0tYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XFxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+Q3JlYXRlIFByb2plY3Q8L2J1dHRvbj5cXFxuICAgICAgICA8L2xpPlxcXG4gICAgPC9mb3JtPic7XG4gICAgXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtZm9ybS1idXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjYW5jZWxQcm9qZWN0U3VibWlzc2lvbigpKTtcbn07XG5cbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RTdWJtaXNzaW9uKCkge1xuICAgIG1ha2VOZXdQcm9qZWN0QnV0dG9uQWN0aXZlKCk7XG4gICAgY2xlYXJEaXNwbGF5KCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNJbk5hdihwcm9qZWN0c0xpYnJhcnkpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtZGl2XCIpO1xuICAgIHByb2plY3RzRGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBwcm9qZWN0c0xpYnJhcnkuZ2V0TGlicmFyeSgpLmZvckVhY2goY3VycmVudFByb2plY3QgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc05hbWUgPSBcInByb2plY3QtZWxlbWVudC10aXRsZVwiO1xuICAgICAgICBpZiAoIWN1cnJlbnRQcm9qZWN0LnRpdGxlKSBjdXJyZW50UHJvamVjdC50aXRsZT1cIkRlZmF1bHQgUHJvamVjdFwiO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICAgICAgICBzZXRDdXJyZW50UHJvamVjdElkKHByb2plY3RzTGlicmFyeSwgY3VycmVudFByb2plY3QpO1xuICAgICAgICBzZXRNYXRjaGluZ0lkRm9yUHJvamVjdEVsZW1lbnQocHJvamVjdEVsZW1lbnQsIGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lclRvUHJvamVjdEVsZW1lbnRzKHByb2plY3RzTGlicmFyeSk7XG59O1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdElkKHByb2plY3RzTGlicmFyeSwgcHJvamVjdCkge1xuICAgIHByb2plY3QuaWQgPSBwcm9qZWN0c0xpYnJhcnkuZ2V0TGlicmFyeSgpLmluZGV4T2YocHJvamVjdCk7XG59O1xuXG5mdW5jdGlvbiBzZXRNYXRjaGluZ0lkRm9yUHJvamVjdEVsZW1lbnQocHJvamVjdEVsZW1lbnQsIGlkKSB7XG4gICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpZCk7XG59O1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9Qcm9qZWN0RWxlbWVudHMocHJvamVjdHNMaWJyYXJ5KSB7XG4gICAgbGV0IHByb2plY3RzVGl0bGVzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1lbGVtZW50LXRpdGxlXCIpO1xuICAgIHByb2plY3RzVGl0bGVzTGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdElkID0gcHJvamVjdC5kYXRhc2V0LmlkO1xuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7cmVuZGVyUHJvamVjdEluRGlzcGxheShwcm9qZWN0c0xpYnJhcnkscHJvamVjdHNMaWJyYXJ5LmdldExpYnJhcnkoKVtwcm9qZWN0SWRdKX0pO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdEluRGlzcGxheShwcm9qZWN0c0xpYnJhcnksIHByb2plY3QpIHtcbiAgICBtYWtlTmV3UHJvamVjdEJ1dHRvbkFjdGl2ZSgpO1xuICAgIGNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlcIik7XG4gICAgZGlzcGxheURpdi5pbm5lckhUTUwgPSBgXFxcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kaXNwbGF5XCI+XFxcbiAgICAgICAgPGgxIGNsYXNzPVwicHJvamVjdC1kaXNwbGF5LXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvaDE+XFxcbiAgICAgICAgPGxpPjxzdHJvbmc+UHJpb3JpdHk6PC9zdHJvbmc+ICR7cHJvamVjdC5wcmlvcml0eX08L2xpPlxcXG4gICAgICAgIDxsaT48c3Ryb25nPkR1ZSBEYXRlOjwvc3Ryb25nPiAke3Byb2plY3QuZHVlRGF0ZX08L2xpPlxcXG4gICAgICAgIDxsaT48c3Ryb25nPlByb2plY3QgRGVzY3JpcHRpb246PC9zdHJvbmc+ICR7cHJvamVjdC5kZXNjcmlwdGlvbn1cXDwvbGk+XFxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtcHJvamVjdC1idXR0b25cIj48aW1nIHNyYz1cIiR7RWRpdEljb259XCIgaGVpZ2h0PVwiMTdweFwiLz5FZGl0IFByb2plY3Q8L2J1dHRvbj5cXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCI+PGltZyBzcmM9XCIke0RlbGV0ZUljb259XCIgaGVpZ2h0PVwiMTdweFwiLz5EZWxldGUgUHJvamVjdDwvYnV0dG9uPlxuICAgIDwvZGl2PlxcXG4gICAgPGJyPlxcXG4gICAgPGRpdiBjbGFzcz1cInRvLWRvLWRpc3BsYXlcIj5cXFxuICAgICAgICA8aDM+VG8tZG86PC9oMz48YnI+XG4gICAgICAgIDxsaT5UYXNrIDE8L2xpPlxcXG4gICAgICAgIDxsaT5UYXNrIDI8L2xpPlxcXG4gICAgICAgIDxsaT5UYXNrIDM8L2xpPlxcXG4gICAgICAgIDxsaT5UYXNrIDQ8L2xpPlxcXG4gICAgICAgIDxsaT5UYXNrIDU8L2xpPlxcXG4gICAgPC9kaXY+YFxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtcHJvamVjdC1idXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gIGVkaXRQcm9qZWN0KHByb2plY3QpKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLXByb2plY3QtYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlUHJvamVjdChwcm9qZWN0c0xpYnJhcnksIHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gZWRpdFByb2plY3QocHJvamVjdCkge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuICAgIGRpc3BsYXkuaW5uZXJIVE1MID1gXFxcbiAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cIm5ldy1wcm9qZWN0LWZvcm1cIj5cXFxuICAgICAgICA8aDE+RWRpdCBQcm9qZWN0IFwiPGVtPiR7cHJvamVjdC50aXRsZX08L2VtPlwiPC9oMT5cXFxuICAgICAgICA8bGk+PGxhYmVsIGZvcj1cInRpdGxlXCIgPlByb2plY3QgVGl0bGU6PC9sYWJlbD48L2xpPlxcXG4gICAgICAgIDxsaT48aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgdmFsdWU9XCIke3Byb2plY3QudGl0bGV9XCI+PC9saT5cXFxuICAgICAgICA8bGk+PGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UGljayBQcmlvcml0eTo8L2xhYmVsPjwvbGk+XFxcbiAgICAgICAgPGxpPlxcXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIj5cXFxuICAgICAgICAgICAgPHNjcmlwdD48L3NjcmlwdD5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9uZVwiPk5vbmU8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJIaWdoXCI+SGlnaDwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxcXG4gICAgICAgICAgICA8L3NlbGVjdD5cXFxuICAgICAgICA8L2xpPlxcXG4gICAgICAgIDxsaT48bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+PC9saT5cXFxuICAgICAgICA8bGk+PGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgdmFsdWU9XCIke3Byb2plY3QuZHVlRGF0ZX1cIj48L2xpPlxcXG4gICAgICAgIDxsaT48bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxcPC9saT5cXFxuICAgICAgICA8bGk+PHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiXCIgcm93cz1cIjIwXCI+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+PC9saT5cXFxuICAgICAgICA8bGkgY2xhc3M9XCJmb3JtLWJ1dHRvbnMtd3JhcHBlclwiPlxcXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FuY2VsLWZvcm0tYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XFxcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzYXZlLWVkaXQtYnV0dG9uXCI+U2F2ZSBDaGFuZ2VzPC9idXR0b24+XFxcbiAgICAgICAgPC9saT5cXFxuICAgIDwvZm9ybT5gO1xuICAgIFxuICAgIC8vaGF2ZSB0aGUgb3B0aW9uIGZvciBwcmlvcml0eSBzZXQgYXMgc2VsZWN0ZWRcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtpZihvcHRpb24udmFsdWUgPT0gcHJvamVjdC5wcmlvcml0eSkgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCdzZWxlY3RlZCcpfSlcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWZvcm0tYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FuY2VsUHJvamVjdFN1Ym1pc3Npb24oKSk7XG5cbiAgICBjb25zdCBzYXZlQ2hhbmdlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZS1lZGl0LWJ1dHRvblwiKTtcbiAgICBzYXZlQ2hhbmdlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBjbGVhckRpc3BsYXkoKTtcbiAgICB9KTtcbiAgICBcbn1cblxuIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdHNMaWJyYXJ5LCBwcm9qZWN0KSB7XG4gICAgaWYoY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBwcm9qZWN0ICR7cHJvamVjdC50aXRsZX0/YCkpIHtcbiAgICAgICAgcHJvamVjdHNMaWJyYXJ5LnJlbW92ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgIHJlbmRlclByb2plY3RzSW5OYXYocHJvamVjdHNMaWJyYXJ5KTtcbiAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuXG4gICAgfVxufSIsIi8vIEJyYWluc3Rvcm0gd2hhdCBraW5kIG9mIHByb3BlcnRpZXMgeW91ciB0b2RvLWl0ZW1zIGFyZSBnb2luZyB0byBoYXZlLiBcbi8vIEF0IGEgbWluaW11bSB0aGV5IHNob3VsZCBoYXZlIGEgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlIGFuZCBwcmlvcml0eS4gXG4vLyBZb3UgbWlnaHQgYWxzbyB3YW50IHRvIGluY2x1ZGUgbm90ZXMgb3IgZXZlbiBhIGNoZWNrbGlzdC5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3RzTGlicmFyeSA9ICgpID0+IHtcbiAgICBjb25zdCBsaWJyYXJ5ID0gW107XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IGxpYnJhcnkucHVzaChwcm9qZWN0KTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RJbmRleCkgPT4gbGlicmFyeS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICBjb25zdCBnZXRMaWJyYXJ5ID0gKCkgPT4gbGlicmFyeTtcblxuICAgIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldExpYnJhcnl9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0Rm9ybURhdGEoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICByZXR1cm4gW3RpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb25dXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdQcm9qZWN0ID0gKGZvcm1JbnB1dCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGZvcm1JbnB1dFswXTtcbiAgICBsZXQgcHJpb3JpdHkgPSBmb3JtSW5wdXRbMV07XG4gICAgbGV0IGR1ZURhdGUgPSBmb3JtSW5wdXRbMl07XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybUlucHV0WzNdO1xuICAgIHJldHVybiB7dGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbn1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvamVjdCkge1xuICAgIFtwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LnByaW9yaXR5LCBwcm9qZWN0LmR1ZURhdGUsIHByb2plY3QuZGVzY3JpcHRpb25dID0gZ2V0UHJvamVjdEZvcm1EYXRhKCk7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1cIiR7cHJvamVjdC5pZH1cIl1gKTtcbiAgICBpZiAoIXByb2plY3QudGl0bGUpIHByb2plY3QudGl0bGU9XCJEZWZhdWx0IFByb2plY3RcIjtcbiAgICBwcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0c0xpYnJhcnksZ2V0UHJvamVjdEZvcm1EYXRhLCBjcmVhdGVOZXdQcm9qZWN0IH0gZnJvbSBcIi4vdG8tZG8uanNcIjtcbmltcG9ydCB7IFxuICAgIHJlbmRlclByb2plY3RzSW5OYXYsIFxuICAgIGNsZWFyRGlzcGxheSwgXG4gICAgZGlzcGxheU5ld1Byb2plY3RGb3JtLCBcbiAgICBtYWtlTmV3UHJvamVjdEJ1dHRvbkFjdGl2ZSxcbiAgICBtYWtlTmV3UHJvamVjdEJ1dHRvbkluYWN0aXZlIH0gZnJvbSBcIi4vZG9tLW1hbmlwdWxhdGlvblwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5oZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcbmhlYWRlci5pbm5lckhUTUwgPSBcIjxoMT5NeSBUby1EbyBMaXN0PC9oMT5cIjtcbmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5tYWluLmNsYXNzTmFtZSA9IFwibWFpblwiO1xuXG5jb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcbm5hdi5jbGFzc05hbWUgPSBcIm5hdlwiO1xuXG5cbmNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG5ob21lSGVhZGVyLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbmNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xucHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzOlwiO1xuXG5jb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbm5ld1Byb2plY3RCdXR0b24uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdC1idXR0b25cIjtcbm5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0ICtcIjtcblxuY29uc3QgcHJvdGVjdHNMaXN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnByb3RlY3RzTGlzdERpdi5jbGFzc05hbWUgPSBcInByb2plY3RzLWRpdlwiO1xuXG5uYXYuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XG5uYXYuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpO1xubmF2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xubmF2LmFwcGVuZENoaWxkKHByb3RlY3RzTGlzdERpdik7XG5tYWluLmFwcGVuZENoaWxkKG5hdik7XG5cbmNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZGlzcGxheS5jbGFzc05hbWUgPSBcImRpc3BsYXlcIjtcbmRpc3BsYXkuaW5uZXJIVE1MID0gJ1xcXG48aDI+VG8gQmVnaW46PC9oMj48YnI+PGxpPiBDcmVhdGUgYSBuZXcgcHJvamVjdDwvbGk+XFxcbjxsaT4gUGljayBhbiBleGlzdGluZyBwcm9qZWN0IGZyb20gdGhlIGxpc3Q8L2xpPidcblxubWFpbi5hcHBlbmRDaGlsZChkaXNwbGF5KTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5mb290ZXIuY2xhc3NOYW1lID0gXCJmb290ZXJcIjtcbmZvb3Rlci5pbm5lckhUTUwgPSAnXFxcbjxwPkJhY2tncm91bmQgcGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BhbmRyZXd0bmVlbD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5BbmRyZXcgTmVlbFxcXG48L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvY2NrZjRUc0hBdXc/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+PC9wPlxcXG48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0l2YXlsbzkySXZhbm92XCI+Q3JlYXRlZCBieSBJdmF5bG8gSS48L2E+JztcblxuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gXG5sZXQgcHJvamVjdHNMaWJyYXJ5ID0gY3JlYXRlUHJvamVjdHNMaWJyYXJ5KCk7XG5cbm5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAobmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXCJjbGlja2VkXCIpKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcbiAgICAgICAgbWFrZU5ld1Byb2plY3RCdXR0b25JbmFjdGl2ZSgpO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcbiAgICAgICAgbmV3UHJvamVjdEZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdChnZXRQcm9qZWN0Rm9ybURhdGEoKSk7XG4gICAgICAgICAgICBwcm9qZWN0c0xpYnJhcnkuYWRkUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0c0luTmF2KHByb2plY3RzTGlicmFyeSk7XG4gICAgICAgICAgICBjbGVhckRpc3BsYXkoKTtcbiAgICAgICAgICAgIG1ha2VOZXdQcm9qZWN0QnV0dG9uQWN0aXZlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=