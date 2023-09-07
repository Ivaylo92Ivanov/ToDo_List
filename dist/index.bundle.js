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
    
    --main-color-1: rgba(52, 211, 153, 0.8);
    --main-color-2: #dcfce7;
    --main-color-3: rgba(239, 68, 68, 0.8);    
    --main-color-4: #34d399;
    --main-color-5: #fef3c7;
    /* --main-color-6: #fef3c7; */
    /* --main-color-6:#f0fdf4; */
    --main-color-6: rgb(0,0,0,0.6);
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
    background-color: var(--main-color-1, lightgreen);
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    box-shadow: 2px 2px 12px;
}

.main {
    background-color: var(--main-color-6, black);
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    flex: 1;
}

.nav,
.display {
    padding: 2rem;
    margin: 2rem;
    background-color: rgb(240,240,240, 0.6);
    box-shadow: 2px 2px 12px black;
    border-radius: 6px;
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
    background-color: var(--main-color-1, lightgreen);
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
    border-radius: 6px;
}

.new-project-form {
    background-color: var(--main-color-6, lightyellow);
    color: white;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 6px;
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

input,
textarea,
select {
    flex: 1;
    border-radius: 6px;
    padding-left: 0.3rem;
}

textarea {
    box-sizing: border-box;
    padding: 0.5rem;
}


.projects-div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.project-element-title {
    flex: 1;
    background-color: var(--main-color-6, lightyellow);
    color: white;
}

.project-element-title:hover {
    transform: translate(0, -0.2rem)
}

.new-project-button {
    font-size: 1rem;
    background-color: var(--main-color-4, lightgreen);
}

.add-todo-button,
.save-note-edit-button {
    width: fit-content;
    background-color: var(--main-color-4, lightgreen);
    align-self: flex-end;
}

.new-project-button:active {
    color: white;
}

.new-project-button.clicked:active {
    background-color: var(--main-color-3, red);
    color: white;
}

.submit-button,
.save-edit-button {
    background-color: var(--main-color-4, lightgreen);
    padding: 0.5rem;
}

.submit-button:active,
.save-edit-button:active {
    color: white;
}

.cancel-form-button,
.todo-delete-button,
.cancel-note-edit-button {
    background-color: var(--main-color-3, red);
}



.cancel-form-button:active,
.delete-project-button.active {
    color: white;
}

.delete-project-button {
    background-color: var(--main-color-3, red);
}

.edit-project-button,
.todo-edit-button {
    background-color: var(--main-color-5, brown);

}
.edit-project-button,
.delete-project-button {
    width: fit-content;
    align-self: flex-end;
    align-items: center;
    display: flex;  
}

/* Render objects to display */

.project-display {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-display-content-wrapper,
.todo-display {
    border: 2px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    color: white;
    border-radius: 6px;
    padding: 1rem;
    background-color: var(--main-color-6, lightyellow);
}

.todo-display {
    gap: 1rem;
}

.project-display-buttons-wrapper {
    display: flex;
    gap: 0.3rem;
    justify-content: flex-end;
}

.project-display-title {
    padding-bottom: 1rem;
    text-decoration: underline;
}

.project-description-p {
    margin-left: 1.4rem;
    text-align: justify;
}

.add-todo-form {
    display: flex;
    /* align-items: center; */
    gap: 1rem;
    flex-direction: column;
}

h1 {
    text-decoration: underline;
}

.todo-list {
    
}

.todo-note > div {
    display: flex;
    gap: 0.3rem;
    border-bottom: 1px solid black;
    align-items: center;
    text-align: justify;
}



.note-buttons-wrapper {
    margin: 0.3rem 0 0.3rem auto;
    padding: 0.1rem;
    display: flex;
    gap: 0.3rem;
    align-self: flex-end;
}

input[type="checkbox"] {
    flex: 0;
}

.hidden {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;;IAEI,uCAAuC;IACvC,uBAAuB;IACvB,sCAAsC;IACtC,uBAAuB;IACvB,uBAAuB;IACvB,6BAA6B;IAC7B,4BAA4B;IAC5B,8BAA8B;AAClC;;AAEA;IACI,yDAAmD;IACnD,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,iDAAiD;IACjD,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,OAAO;AACX;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,uCAAuC;IACvC,8BAA8B;IAC9B,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iDAAiD;IACjD,eAAe;IACf,aAAa;IACb,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kDAAkD;IAClD,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;;IAGI,OAAO;IACP,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,OAAO;IACP,kDAAkD;IAClD,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;IACI,eAAe;IACf,iDAAiD;AACrD;;AAEA;;IAEI,kBAAkB;IAClB,iDAAiD;IACjD,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;;IAEI,iDAAiD;IACjD,eAAe;AACnB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;IAGI,0CAA0C;AAC9C;;;;AAIA;;IAEI,YAAY;AAChB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;;IAEI,4CAA4C;;AAEhD;AACA;;IAEI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;AACjB;;AAEA,8BAA8B;;AAE9B;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;IAEI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,kDAAkD;AACtD;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;;;AAIA;IACI,4BAA4B;IAC5B,eAAe;IACf,aAAa;IACb,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;AACjB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    \n    --main-color-1: rgba(52, 211, 153, 0.8);\n    --main-color-2: #dcfce7;\n    --main-color-3: rgba(239, 68, 68, 0.8);    \n    --main-color-4: #34d399;\n    --main-color-5: #fef3c7;\n    /* --main-color-6: #fef3c7; */\n    /* --main-color-6:#f0fdf4; */\n    --main-color-6: rgb(0,0,0,0.6);\n}\n\nhtml {\n    background-image: url(\"./main-background-min.webp\");\n    background-size: cover;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    background-color: var(--main-color-1, lightgreen);\n    padding: 1rem 3rem;\n    display: flex;\n    align-items: center;\n    box-shadow: 2px 2px 12px;\n}\n\n.main {\n    background-color: var(--main-color-6, black);\n    display: flex;\n    flex-wrap: wrap;\n    align-content: stretch;\n    flex: 1;\n}\n\n.nav,\n.display {\n    padding: 2rem;\n    margin: 2rem;\n    background-color: rgb(240,240,240, 0.6);\n    box-shadow: 2px 2px 12px black;\n    border-radius: 6px;\n    color: white;\n}\n\n.nav {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;    \n}\n\n.display {\n    flex: 3;\n    display: flex;\n    flex-direction: column;\n}\n\n.footer {\n    background-color: var(--main-color-1, lightgreen);\n    padding: 0.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.footer a {\n    color: black;\n}\n\nbutton {\n    padding: 0.3rem;\n    border-radius: 6px;\n}\n\n.new-project-form {\n    background-color: var(--main-color-6, lightyellow);\n    color: white;\n    padding: 1rem;\n    border: 2px solid black;\n    border-radius: 6px;\n}\n\n.new-project-form li {\n    list-style: none;\n    display: flex;\n    padding: 0.1rem 0;    \n}\n\n.form-buttons-wrapper {\n    display: flex;\n    justify-content: space-between;\n}\n\ninput,\ntextarea,\nselect {\n    flex: 1;\n    border-radius: 6px;\n    padding-left: 0.3rem;\n}\n\ntextarea {\n    box-sizing: border-box;\n    padding: 0.5rem;\n}\n\n\n.projects-div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-element-title {\n    flex: 1;\n    background-color: var(--main-color-6, lightyellow);\n    color: white;\n}\n\n.project-element-title:hover {\n    transform: translate(0, -0.2rem)\n}\n\n.new-project-button {\n    font-size: 1rem;\n    background-color: var(--main-color-4, lightgreen);\n}\n\n.add-todo-button,\n.save-note-edit-button {\n    width: fit-content;\n    background-color: var(--main-color-4, lightgreen);\n    align-self: flex-end;\n}\n\n.new-project-button:active {\n    color: white;\n}\n\n.new-project-button.clicked:active {\n    background-color: var(--main-color-3, red);\n    color: white;\n}\n\n.submit-button,\n.save-edit-button {\n    background-color: var(--main-color-4, lightgreen);\n    padding: 0.5rem;\n}\n\n.submit-button:active,\n.save-edit-button:active {\n    color: white;\n}\n\n.cancel-form-button,\n.todo-delete-button,\n.cancel-note-edit-button {\n    background-color: var(--main-color-3, red);\n}\n\n\n\n.cancel-form-button:active,\n.delete-project-button.active {\n    color: white;\n}\n\n.delete-project-button {\n    background-color: var(--main-color-3, red);\n}\n\n.edit-project-button,\n.todo-edit-button {\n    background-color: var(--main-color-5, brown);\n\n}\n.edit-project-button,\n.delete-project-button {\n    width: fit-content;\n    align-self: flex-end;\n    align-items: center;\n    display: flex;  \n}\n\n/* Render objects to display */\n\n.project-display {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.project-display-content-wrapper,\n.todo-display {\n    border: 2px solid black;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    color: white;\n    border-radius: 6px;\n    padding: 1rem;\n    background-color: var(--main-color-6, lightyellow);\n}\n\n.todo-display {\n    gap: 1rem;\n}\n\n.project-display-buttons-wrapper {\n    display: flex;\n    gap: 0.3rem;\n    justify-content: flex-end;\n}\n\n.project-display-title {\n    padding-bottom: 1rem;\n    text-decoration: underline;\n}\n\n.project-description-p {\n    margin-left: 1.4rem;\n    text-align: justify;\n}\n\n.add-todo-form {\n    display: flex;\n    /* align-items: center; */\n    gap: 1rem;\n    flex-direction: column;\n}\n\nh1 {\n    text-decoration: underline;\n}\n\n.todo-list {\n    \n}\n\n.todo-note > div {\n    display: flex;\n    gap: 0.3rem;\n    border-bottom: 1px solid black;\n    align-items: center;\n    text-align: justify;\n}\n\n\n\n.note-buttons-wrapper {\n    margin: 0.3rem 0 0.3rem auto;\n    padding: 0.1rem;\n    display: flex;\n    gap: 0.3rem;\n    align-self: flex-end;\n}\n\ninput[type=\"checkbox\"] {\n    flex: 0;\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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
/* harmony export */   domManipulator: () => (/* binding */ domManipulator)
/* harmony export */ });
/* harmony import */ var _icons_edit_button_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/edit-button-icon.svg */ "./src/icons/edit-button-icon.svg");
/* harmony import */ var _icons_delete_button_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/delete-button-icon.svg */ "./src/icons/delete-button-icon.svg");
/* harmony import */ var _to_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-do */ "./src/to-do.js");






const domManipulator = (() => {
    let projectsLibrary;
    const getLibrary = (library) => projectsLibrary = library;
    
    const createPage = () => {
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

        newProjectButton.addEventListener("click", () => {
            if (newProjectButton.classList.contains("clicked")) {
                // do nothing
            } else {
                displayNewProjectForm();
                makeNewProjectButtonInactive();
                const newProjectFormSubmitButton = document.querySelector(".submit-button");
                newProjectFormSubmitButton.addEventListener("click", e => {
                    e.preventDefault();
                    let currentProject = (0,_to_do__WEBPACK_IMPORTED_MODULE_2__.projectsCreator)((0,_to_do__WEBPACK_IMPORTED_MODULE_2__.getProjectFormData)());
                    projectsLibrary.addProject(currentProject);
                    renderProjectsInNav(projectsLibrary);
                    clearDisplay();
                    makeNewProjectButtonActive();
                });
            };
        });
    };
    
    function clearDisplay() {
        const display = document.querySelector('.display');
        display.innerHTML = '\
        <h2>To Begin:</h2><br><li> Create a new project</li>\
        <li> Pick an existing project from the list</li>'
    };

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
        cancelButton.addEventListener("click", () => cancelFormSubmission());
    };
    
    function cancelFormSubmission() {
        makeNewProjectButtonActive();
        clearDisplay();
    };
    
    function renderProjectsInNav() {
        const projectsDiv = document.querySelector(".projects-div");
        projectsDiv.innerHTML = "";
    
        projectsLibrary.getLibrary().forEach(currentProject => {
            let projectElement = document.createElement("button");
            projectElement.className = "project-element-title";
            if (!currentProject.title) currentProject.title="Default Project";
            projectElement.textContent = currentProject.title;
            setCurrentProjectId( currentProject);
            setMatchingIdForProjectElement(projectElement, currentProject.id);
            projectsDiv.appendChild(projectElement);
        });
    
        addEventListenerToProjectElements();
    };
    
    function setCurrentProjectId(project) {
        project.id = projectsLibrary.getLibrary().indexOf(project);
    };
    
    function setMatchingIdForProjectElement(projectElement, id) {
        projectElement.setAttribute("data-id", id);
    };
    
    function addEventListenerToProjectElements() {
        let projectsTitlesList = document.querySelectorAll(".project-element-title");
        projectsTitlesList.forEach(project => {
            let projectId = project.dataset.id;
            project.addEventListener("click", () => {renderProjectInDisplay(projectsLibrary.getLibrary()[projectId])});
        });
    };
    
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
        cancelButton.addEventListener("click", () => cancelFormSubmission());
    
        const saveChangesButton = document.querySelector(".save-edit-button");
        saveChangesButton.addEventListener("click", (e) => {
            e.preventDefault();
            (0,_to_do__WEBPACK_IMPORTED_MODULE_2__.updateProject)(project);
            clearDisplay();
        });
        
    }
    
     function deleteProject(project) {
        if(confirm(`Are you sure you want to delete project ${project.title}?`)) {
            projectsLibrary.removeProject(project.id);
            renderProjectsInNav(projectsLibrary);
            clearDisplay();
        } else {
         return
        }
    }

    function renderProjectInDisplay(project) {
        makeNewProjectButtonActive();
        const displayDiv = document.querySelector(".display");
        displayDiv.innerHTML = `\
        <div class="project-display">\
            <div class="project-display-content-wrapper">\
                <h1 class="project-display-title">${project.title}</h1>\
                <li><strong>Priority:</strong> ${project.priority}</li>\
                <li><strong>Due Date:</strong> ${project.dueDate}</li>\
                <li><strong>Project Description:</strong><p class="project-description-p">${project.description}<p>\</li>\
                <div class="project-display-buttons-wrapper">\
                    <button class="edit-project-button"><img src="${_icons_edit_button_icon_svg__WEBPACK_IMPORTED_MODULE_0__}" height="17px"/>Edit Project</button>\
                    <button class="delete-project-button"><img src="${_icons_delete_button_icon_svg__WEBPACK_IMPORTED_MODULE_1__}" height="17px"/>Delete Project</button>
                 </div>\ 
            </div>\
        <div class="todo-display">\
            <form action="" class="add-todo-form">\
            <input type="text" id="todo-note-input"></input>\    
                <button class="add-todo-button"><h4>+ TO-DO</h4></button>\   
            </form>\
            <div class="todo-list">\
                
            </div>\
        </div>`
        renderToDoNotes(project);

        const addToDoButton = document.querySelector(".add-todo-button");
        addToDoButton.addEventListener("click", (e) => {
            e.preventDefault();
            addToDoNote(project);
            renderToDoNotes(project);
        });
        
        const editButton = document.querySelector(".edit-project-button");
        editButton.addEventListener("click", () =>  editProject(project));
    
        const deleteButton = document.querySelector(".delete-project-button");
        deleteButton.addEventListener("click", () => deleteProject(project));
    }

    function addToDoNote(project) {
        let noteInput = document.getElementById("todo-note-input");
        if (noteInput.value) project.addToDoNote((0,_to_do__WEBPACK_IMPORTED_MODULE_2__.noteCreator)(noteInput.value));
        console.log(project.toDoNotes)
        noteInput.value = "";
    }

    function renderToDoNotes(project) {
        const toDoNotesDisplay = document.querySelector(".todo-list");
        toDoNotesDisplay.innerHTML = "";
        project.toDoNotes.forEach(noteObject => {
            toDoNotesDisplay.appendChild(noteObject.renderNote());
            // noteObject
        });
    }

    return {createPage, getLibrary}
})()




/***/ }),

/***/ "./src/to-do.js":
/*!**********************!*\
  !*** ./src/to-do.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProjectFormData: () => (/* binding */ getProjectFormData),
/* harmony export */   noteCreator: () => (/* binding */ noteCreator),
/* harmony export */   projectsCreator: () => (/* binding */ projectsCreator),
/* harmony export */   projectsLibraryCreator: () => (/* binding */ projectsLibraryCreator),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
// Brainstorm what kind of properties your todo-items are going to have. 
// At a minimum they should have a title, description, dueDate and priority. 
// You might also want to include notes or even a checklist.

const projectsLibraryCreator = () => {
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

const noteCreator = (content) => {
    let noteContent = content;

    const renderNote = () => {
        const toDoNoteDiv = document.createElement("div");
        toDoNoteDiv.className = "todo-note";



        // create the note display
        const noteDisplayDiv = document.createElement("div");

        const noteCheckbox = document.createElement("input");
        noteCheckbox.type = "checkbox";
        noteDisplayDiv.appendChild(noteCheckbox);

        const noteText = document.createElement("p");
        noteText.textContent = noteContent;
        noteDisplayDiv.appendChild(noteText);

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.className = ("note-buttons-wrapper");

        const editButton = document.createElement("button");
        editButton.className = "todo-edit-button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => renderEditMenu(noteDisplayDiv, noteEditDiv, noteText, noteEditField));

        const deleteButton = document.createElement("button");
        deleteButton.className = "todo-delete-button";
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => console.log(noteContent));
        
        buttonsWrapper.appendChild(editButton);
        buttonsWrapper.appendChild(deleteButton);
        noteDisplayDiv.appendChild(buttonsWrapper);

        toDoNoteDiv.appendChild(noteDisplayDiv)



        // create the edit note display
        const noteEditDiv = document.createElement("div");
        noteEditDiv.style.display = "none";

        const noteEditField = document.createElement("input");
        noteEditField.type = "text";
        noteEditDiv.appendChild(noteEditField);

        const saveEditButton = document.createElement("button");
        saveEditButton.textContent = "Save"
        saveEditButton.className = "save-note-edit-button"
        saveEditButton.addEventListener("click", (e) => {
            e.preventDefault();
            editNote(noteText, noteEditField.value);
            noteEditDiv.style.display = "none";
            noteDisplayDiv.style.display = "flex";   
        });

        const cancelEditButton = document.createElement("button");
        cancelEditButton.className = "cancel-note-edit-button";
        cancelEditButton.textContent = "X";
        cancelEditButton.addEventListener("click", (e) => {
            e.preventDefault();
            noteEditDiv.style.display = "none";
            noteDisplayDiv.style.display = "flex";
        });
        
        const noteButtonsWrapper = document.createElement("div");
        noteButtonsWrapper.className = "note-buttons-wrapper";

        noteButtonsWrapper.appendChild(saveEditButton);
        noteButtonsWrapper.appendChild(cancelEditButton);
        
        noteEditDiv.appendChild(noteButtonsWrapper);
        toDoNoteDiv.appendChild(noteEditDiv);

        return toDoNoteDiv        
    };
    
    const editNote = (textHolder, newText) => {
        textHolder.textContent = newText;
        
    }

    const renderEditMenu = (noteDisplayDiv, noteEditDiv, noteText, noteEditField) => {
        let noteCurrentText = noteText.textContent 
        noteEditField.value = noteCurrentText;

        noteDisplayDiv.style.display = "none";
        noteEditDiv.style.display = "flex";
    }

    return {noteContent, renderNote, renderEditMenu}
    
}

const projectsCreator = (formInput) => {
    let title = formInput[0];
    let priority = formInput[1];
    let dueDate = formInput[2];
    let description = formInput[3];
    let toDoNotes = [];
    const addToDoNote = (note) => toDoNotes.push(note);
    const removeToDoNote = (note) => toDoNotes.splice(toDoNotes.indexOf(note), 1);
    return {title, priority, dueDate, description, toDoNotes, addToDoNote, removeToDoNote}
}

function updateProject(project) {
    [project.title, project.priority, project.dueDate, project.description] = getProjectFormData();
    const projectElement = document.querySelector(`[data-id="${project.id}"]`);
    if (!project.title) project.title="Default Project";
    projectElement.textContent = project.title;
}


// const renderNote = () => {
//     const toDoNoteDiv = document.createElement("div");
//     toDoNoteDiv.className = "todo-note";

//     const noteDisplay = document.createElement("div");

//     const noteCheckbox = document.createElement("input");
//     noteCheckbox.type = "checkbox";
//     toDoNoteDiv.appendChild(noteCheckbox);



//     const noteEditField = document.createElement("input");
//     noteEditField.type = "text";
//     noteEditField.classList.add("hidden");
//     toDoNoteDiv.appendChild(noteEditField);

//     const noteTextField = document.createElement("p");
//     noteTextField.textContent = noteContent;
//     toDoNoteDiv.appendChild(noteTextField);

//     const buttonsWrapper = document.createElement("div");
//     buttonsWrapper.className = ("note-buttons-wrapper");

//     const editButton = document.createElement("button");
//     editButton.className = "todo-edit-button";
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", () => editNote(noteTextField, noteEditField));

//     const deleteButton = document.createElement("button");
//     deleteButton.className = "todo-delete-button";
//     deleteButton.textContent = "X";
//     deleteButton.addEventListener("click", () => console.log(noteContent));
    
//     buttonsWrapper.appendChild(editButton);
//     buttonsWrapper.appendChild(deleteButton);
//     toDoNoteDiv.appendChild(buttonsWrapper);

//     return toDoNoteDiv        

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




const projectsLibrary = (0,_to_do_js__WEBPACK_IMPORTED_MODULE_1__.projectsLibraryCreator)();
_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.domManipulator.createPage();
_dom_manipulation__WEBPACK_IMPORTED_MODULE_2__.domManipulator.getLibrary(projectsLibrary)
// projectsLibrary
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcs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Z0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDOEI7QUFDQTs7QUFFcEQsd0JBQXdCLGlFQUFzQjtBQUM5Qyw2REFBYztBQUNkLDZEQUFjO0FBQ2Qsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kb20tbWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy90by1kby5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9tYWluLWJhY2tncm91bmQtbWluLndlYnBcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG46cm9vdCB7XG4gICAgXG4gICAgLS1tYWluLWNvbG9yLTE6IHJnYmEoNTIsIDIxMSwgMTUzLCAwLjgpO1xuICAgIC0tbWFpbi1jb2xvci0yOiAjZGNmY2U3O1xuICAgIC0tbWFpbi1jb2xvci0zOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjgpOyAgICBcbiAgICAtLW1haW4tY29sb3ItNDogIzM0ZDM5OTtcbiAgICAtLW1haW4tY29sb3ItNTogI2ZlZjNjNztcbiAgICAvKiAtLW1haW4tY29sb3ItNjogI2ZlZjNjNzsgKi9cbiAgICAvKiAtLW1haW4tY29sb3ItNjojZjBmZGY0OyAqL1xuICAgIC0tbWFpbi1jb2xvci02OiByZ2IoMCwwLDAsMC42KTtcbn1cblxuaHRtbCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xLCBsaWdodGdyZWVuKTtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTJweDtcbn1cblxuLm1haW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNiwgYmxhY2spO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgZmxleDogMTtcbn1cblxuLm5hdixcbi5kaXNwbGF5IHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLDI0MCwyNDAsIDAuNik7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uYXYge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTsgICAgXG59XG5cbi5kaXNwbGF5IHtcbiAgICBmbGV4OiAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xLCBsaWdodGdyZWVuKTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5mb290ZXIgYSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXctcHJvamVjdC1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTYsIGxpZ2h0eWVsbG93KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5uZXctcHJvamVjdC1mb3JtIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMC4xcmVtIDA7ICAgIFxufVxuXG4uZm9ybS1idXR0b25zLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcbn1cblxudGV4dGFyZWEge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG5cbi5wcm9qZWN0cy1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuNXJlbTtcbn1cblxuLnByb2plY3QtZWxlbWVudC10aXRsZSB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTYsIGxpZ2h0eWVsbG93KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9qZWN0LWVsZW1lbnQtdGl0bGU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wLjJyZW0pXG59XG5cbi5uZXctcHJvamVjdC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTQsIGxpZ2h0Z3JlZW4pO1xufVxuXG4uYWRkLXRvZG8tYnV0dG9uLFxuLnNhdmUtbm90ZS1lZGl0LWJ1dHRvbiB7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNCwgbGlnaHRncmVlbik7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b246YWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24uY2xpY2tlZDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMywgcmVkKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdWJtaXQtYnV0dG9uLFxuLnNhdmUtZWRpdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNCwgbGlnaHRncmVlbik7XG4gICAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uc3VibWl0LWJ1dHRvbjphY3RpdmUsXG4uc2F2ZS1lZGl0LWJ1dHRvbjphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhbmNlbC1mb3JtLWJ1dHRvbixcbi50b2RvLWRlbGV0ZS1idXR0b24sXG4uY2FuY2VsLW5vdGUtZWRpdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMywgcmVkKTtcbn1cblxuXG5cbi5jYW5jZWwtZm9ybS1idXR0b246YWN0aXZlLFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbi5hY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCByZWQpO1xufVxuXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbixcbi50b2RvLWVkaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTUsIGJyb3duKTtcblxufVxuLmVkaXQtcHJvamVjdC1idXR0b24sXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4OyAgXG59XG5cbi8qIFJlbmRlciBvYmplY3RzIHRvIGRpc3BsYXkgKi9cblxuLnByb2plY3QtZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnByb2plY3QtZGlzcGxheS1jb250ZW50LXdyYXBwZXIsXG4udG9kby1kaXNwbGF5IHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci02LCBsaWdodHllbGxvdyk7XG59XG5cbi50b2RvLWRpc3BsYXkge1xuICAgIGdhcDogMXJlbTtcbn1cblxuLnByb2plY3QtZGlzcGxheS1idXR0b25zLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAwLjNyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnByb2plY3QtZGlzcGxheS10aXRsZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5wcm9qZWN0LWRlc2NyaXB0aW9uLXAge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjRyZW07XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmFkZC10b2RvLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaDEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4udG9kby1saXN0IHtcbiAgICBcbn1cblxuLnRvZG8tbm90ZSA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuM3JlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG5cblxuLm5vdGUtYnV0dG9ucy13cmFwcGVyIHtcbiAgICBtYXJnaW46IDAuM3JlbSAwIDAuM3JlbSBhdXRvO1xuICAgIHBhZGRpbmc6IDAuMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC4zcmVtO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgIGZsZXg6IDA7XG59XG5cbi5oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksdUNBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlEQUFtRDtJQUNuRCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsT0FBTztBQUNYOztBQUVBOztJQUVJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaURBQWlEO0lBQ2pELGVBQWU7SUFDZixhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7O0lBR0ksT0FBTztJQUNQLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLE9BQU87SUFDUCxrREFBa0Q7SUFDbEQsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaURBQWlEO0FBQ3JEOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixpREFBaUQ7SUFDakQsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGlEQUFpRDtJQUNqRCxlQUFlO0FBQ25COztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7OztJQUdJLDBDQUEwQztBQUM5Qzs7OztBQUlBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUM7O0FBRUE7O0lBRUksNENBQTRDOztBQUVoRDtBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUEsOEJBQThCOztBQUU5QjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBOztJQUVJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7OztBQUlBO0lBQ0ksNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICBcXG4gICAgLS1tYWluLWNvbG9yLTE6IHJnYmEoNTIsIDIxMSwgMTUzLCAwLjgpO1xcbiAgICAtLW1haW4tY29sb3ItMjogI2RjZmNlNztcXG4gICAgLS1tYWluLWNvbG9yLTM6IHJnYmEoMjM5LCA2OCwgNjgsIDAuOCk7ICAgIFxcbiAgICAtLW1haW4tY29sb3ItNDogIzM0ZDM5OTtcXG4gICAgLS1tYWluLWNvbG9yLTU6ICNmZWYzYzc7XFxuICAgIC8qIC0tbWFpbi1jb2xvci02OiAjZmVmM2M3OyAqL1xcbiAgICAvKiAtLW1haW4tY29sb3ItNjojZjBmZGY0OyAqL1xcbiAgICAtLW1haW4tY29sb3ItNjogcmdiKDAsMCwwLDAuNik7XFxufVxcblxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vbWFpbi1iYWNrZ3JvdW5kLW1pbi53ZWJwXFxcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSwgbGlnaHRncmVlbik7XFxuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNiwgYmxhY2spO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5uYXYsXFxuLmRpc3BsYXkge1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsMjQwLDI0MCwgMC42KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm5hdiB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTsgICAgXFxufVxcblxcbi5kaXNwbGF5IHtcXG4gICAgZmxleDogMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMSwgbGlnaHRncmVlbik7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTYsIGxpZ2h0eWVsbG93KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDAuMXJlbSAwOyAgICBcXG59XFxuXFxuLmZvcm0tYnV0dG9ucy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgICBmbGV4OiAxO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMC4zcmVtO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuXFxuLnByb2plY3RzLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1lbGVtZW50LXRpdGxlIHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci02LCBsaWdodHllbGxvdyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QtZWxlbWVudC10aXRsZTpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0wLjJyZW0pXFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNCwgbGlnaHRncmVlbik7XFxufVxcblxcbi5hZGQtdG9kby1idXR0b24sXFxuLnNhdmUtbm90ZS1lZGl0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCBsaWdodGdyZWVuKTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b246YWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uLmNsaWNrZWQ6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCByZWQpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uLFxcbi5zYXZlLWVkaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCBsaWdodGdyZWVuKTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbjphY3RpdmUsXFxuLnNhdmUtZWRpdC1idXR0b246YWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2FuY2VsLWZvcm0tYnV0dG9uLFxcbi50b2RvLWRlbGV0ZS1idXR0b24sXFxuLmNhbmNlbC1ub3RlLWVkaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCByZWQpO1xcbn1cXG5cXG5cXG5cXG4uY2FuY2VsLWZvcm0tYnV0dG9uOmFjdGl2ZSxcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItMywgcmVkKTtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1idXR0b24sXFxuLnRvZG8tZWRpdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTUsIGJyb3duKTtcXG5cXG59XFxuLmVkaXQtcHJvamVjdC1idXR0b24sXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7ICBcXG59XFxuXFxuLyogUmVuZGVyIG9iamVjdHMgdG8gZGlzcGxheSAqL1xcblxcbi5wcm9qZWN0LWRpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXktY29udGVudC13cmFwcGVyLFxcbi50b2RvLWRpc3BsYXkge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNiwgbGlnaHR5ZWxsb3cpO1xcbn1cXG5cXG4udG9kby1kaXNwbGF5IHtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5LWJ1dHRvbnMtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvamVjdC1kaXNwbGF5LXRpdGxlIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbi1wIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmgxIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50b2RvLWxpc3Qge1xcbiAgICBcXG59XFxuXFxuLnRvZG8tbm90ZSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMC4zcmVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcblxcblxcbi5ub3RlLWJ1dHRvbnMtd3JhcHBlciB7XFxuICAgIG1hcmdpbjogMC4zcmVtIDAgMC4zcmVtIGF1dG87XFxuICAgIHBhZGRpbmc6IDAuMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgZmxleDogMDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgRWRpdEljb24gZnJvbSBcIi4vaWNvbnMvZWRpdC1idXR0b24taWNvbi5zdmdcIlxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSBcIi4vaWNvbnMvZGVsZXRlLWJ1dHRvbi1pY29uLnN2Z1wiXG5cblxuaW1wb3J0IHsgcHJvamVjdHNDcmVhdG9yLCBnZXRQcm9qZWN0Rm9ybURhdGEsIHVwZGF0ZVByb2plY3QsIG5vdGVDcmVhdG9yIH0gZnJvbSBcIi4vdG8tZG9cIjtcblxuZXhwb3J0IGNvbnN0IGRvbU1hbmlwdWxhdG9yID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdHNMaWJyYXJ5O1xuICAgIGNvbnN0IGdldExpYnJhcnkgPSAobGlicmFyeSkgPT4gcHJvamVjdHNMaWJyYXJ5ID0gbGlicmFyeTtcbiAgICBcbiAgICBjb25zdCBjcmVhdGVQYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBcIjxoMT5NeSBUby1EbyBMaXN0PC9oMT5cIjtcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluLmNsYXNzTmFtZSA9IFwibWFpblwiO1xuXG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgICAgICBuYXYuY2xhc3NOYW1lID0gXCJuYXZcIjtcblxuXG4gICAgICAgIGNvbnN0IGhvbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhvbWVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICAgICAgICBjb25zdCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgcHJvamVjdHNIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzOlwiO1xuXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9IFwibmV3LXByb2plY3QtYnV0dG9uXCI7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0ICtcIjtcblxuICAgICAgICBjb25zdCBwcm90ZWN0c0xpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm90ZWN0c0xpc3REaXYuY2xhc3NOYW1lID0gXCJwcm9qZWN0cy1kaXZcIjtcblxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcik7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHByb3RlY3RzTGlzdERpdik7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGlzcGxheS5jbGFzc05hbWUgPSBcImRpc3BsYXlcIjtcbiAgICAgICAgZGlzcGxheS5pbm5lckhUTUwgPSAnXFxcbiAgICAgICAgPGgyPlRvIEJlZ2luOjwvaDI+PGJyPjxsaT4gQ3JlYXRlIGEgbmV3IHByb2plY3Q8L2xpPlxcXG4gICAgICAgIDxsaT4gUGljayBhbiBleGlzdGluZyBwcm9qZWN0IGZyb20gdGhlIGxpc3Q8L2xpPidcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvb3Rlci5jbGFzc05hbWUgPSBcImZvb3RlclwiO1xuICAgICAgICBmb290ZXIuaW5uZXJIVE1MID0gJ1xcXG4gICAgICAgIDxwPkJhY2tncm91bmQgcGhvdG8gYnkgPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL0BhbmRyZXd0bmVlbD91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5BbmRyZXcgTmVlbFxcXG4gICAgICAgIDwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9jY2tmNFRzSEF1dz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIj5VbnNwbGFzaDwvYT48L3A+XFxcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9JdmF5bG85Mkl2YW5vdlwiPkNyZWF0ZWQgYnkgSXZheWxvIEkuPC9hPic7XG5cbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcImNsaWNrZWRcIikpIHtcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgICAgIG1ha2VOZXdQcm9qZWN0QnV0dG9uSW5hY3RpdmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0LWJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0Rm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHNDcmVhdG9yKGdldFByb2plY3RGb3JtRGF0YSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNMaWJyYXJ5LmFkZFByb2plY3QoY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0c0luTmF2KHByb2plY3RzTGlicmFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgICAgICBtYWtlTmV3UHJvamVjdEJ1dHRvbkFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBjbGVhckRpc3BsYXkoKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuICAgICAgICBkaXNwbGF5LmlubmVySFRNTCA9ICdcXFxuICAgICAgICA8aDI+VG8gQmVnaW46PC9oMj48YnI+PGxpPiBDcmVhdGUgYSBuZXcgcHJvamVjdDwvbGk+XFxcbiAgICAgICAgPGxpPiBQaWNrIGFuIGV4aXN0aW5nIHByb2plY3QgZnJvbSB0aGUgbGlzdDwvbGk+J1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYWtlTmV3UHJvamVjdEJ1dHRvbkFjdGl2ZSgpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBtYWtlTmV3UHJvamVjdEJ1dHRvbkluYWN0aXZlKCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XG4gICAgfVxuICAgICBcbiAgICBmdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuICAgICAgICBkaXNwbGF5LmlubmVySFRNTCA9J1xcXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwibmV3LXByb2plY3QtZm9ybVwiPlxcXG4gICAgICAgICAgICA8aDE+Q3JlYXRlIE5ldyBQcm9qZWN0PC9oMT5cXFxuICAgICAgICAgICAgPGxpPjxsYWJlbCBmb3I9XCJ0aXRsZVwiID5Qcm9qZWN0IFRpdGxlOjwvbGFiZWw+PC9saT5cXFxuICAgICAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiB2YWx1ZT1cIlwiPjwvbGk+XFxcbiAgICAgICAgICAgIDxsaT48bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5QaWNrIFByaW9yaXR5OjwvbGFiZWw+PC9saT5cXFxuICAgICAgICAgICAgPGxpPlxcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5Ob25lPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcXG4gICAgICAgICAgICA8L2xpPlxcXG4gICAgICAgICAgICA8bGk+PGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPjwvbGk+XFxcbiAgICAgICAgICAgIDxsaT48aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiB2YWx1ZT1cIlwiPjwvbGk+XFxcbiAgICAgICAgICAgIDxsaT48bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxcPC9saT5cXFxuICAgICAgICAgICAgPGxpPjx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIlwiIHJvd3M9XCIyMFwiPjwvdGV4dGFyZWE+PC9saT5cXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZm9ybS1idXR0b25zLXdyYXBwZXJcIj5cXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYW5jZWwtZm9ybS1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzdWJtaXQtYnV0dG9uXCI+Q3JlYXRlIFByb2plY3Q8L2J1dHRvbj5cXFxuICAgICAgICAgICAgPC9saT5cXFxuICAgICAgICA8L2Zvcm0+JztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWZvcm0tYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNhbmNlbEZvcm1TdWJtaXNzaW9uKCkpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gY2FuY2VsRm9ybVN1Ym1pc3Npb24oKSB7XG4gICAgICAgIG1ha2VOZXdQcm9qZWN0QnV0dG9uQWN0aXZlKCk7XG4gICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNJbk5hdigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWRpdlwiKTtcbiAgICAgICAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBcbiAgICAgICAgcHJvamVjdHNMaWJyYXJ5LmdldExpYnJhcnkoKS5mb3JFYWNoKGN1cnJlbnRQcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBwcm9qZWN0RWxlbWVudC5jbGFzc05hbWUgPSBcInByb2plY3QtZWxlbWVudC10aXRsZVwiO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50UHJvamVjdC50aXRsZSkgY3VycmVudFByb2plY3QudGl0bGU9XCJEZWZhdWx0IFByb2plY3RcIjtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gY3VycmVudFByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBzZXRDdXJyZW50UHJvamVjdElkKCBjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBzZXRNYXRjaGluZ0lkRm9yUHJvamVjdEVsZW1lbnQocHJvamVjdEVsZW1lbnQsIGN1cnJlbnRQcm9qZWN0LmlkKTtcbiAgICAgICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJUb1Byb2plY3RFbGVtZW50cygpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3RJZChwcm9qZWN0KSB7XG4gICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0c0xpYnJhcnkuZ2V0TGlicmFyeSgpLmluZGV4T2YocHJvamVjdCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBzZXRNYXRjaGluZ0lkRm9yUHJvamVjdEVsZW1lbnQocHJvamVjdEVsZW1lbnQsIGlkKSB7XG4gICAgICAgIHByb2plY3RFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgaWQpO1xuICAgIH07XG4gICAgXG4gICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lclRvUHJvamVjdEVsZW1lbnRzKCkge1xuICAgICAgICBsZXQgcHJvamVjdHNUaXRsZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWVsZW1lbnQtdGl0bGVcIik7XG4gICAgICAgIHByb2plY3RzVGl0bGVzTGlzdC5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2plY3RJZCA9IHByb2plY3QuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtyZW5kZXJQcm9qZWN0SW5EaXNwbGF5KHByb2plY3RzTGlicmFyeS5nZXRMaWJyYXJ5KClbcHJvamVjdElkXSl9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBlZGl0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheScpO1xuICAgICAgICBkaXNwbGF5LmlubmVySFRNTCA9YFxcXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzPVwibmV3LXByb2plY3QtZm9ybVwiPlxcXG4gICAgICAgICAgICA8aDE+RWRpdCBQcm9qZWN0IFwiPGVtPiR7cHJvamVjdC50aXRsZX08L2VtPlwiPC9oMT5cXFxuICAgICAgICAgICAgPGxpPjxsYWJlbCBmb3I9XCJ0aXRsZVwiID5Qcm9qZWN0IFRpdGxlOjwvbGFiZWw+PC9saT5cXFxuICAgICAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiB2YWx1ZT1cIiR7cHJvamVjdC50aXRsZX1cIj48L2xpPlxcXG4gICAgICAgICAgICA8bGk+PGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UGljayBQcmlvcml0eTo8L2xhYmVsPjwvbGk+XFxcbiAgICAgICAgICAgIDxsaT5cXFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiPlxcXG4gICAgICAgICAgICAgICAgPHNjcmlwdD48L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk5vbmVcIj5Ob25lPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcXG4gICAgICAgICAgICA8L2xpPlxcXG4gICAgICAgICAgICA8bGk+PGxhYmVsIGZvcj1cImRhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPjwvbGk+XFxcbiAgICAgICAgICAgIDxsaT48aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiB2YWx1ZT1cIiR7cHJvamVjdC5kdWVEYXRlfVwiPjwvbGk+XFxcbiAgICAgICAgICAgIDxsaT48bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxcPC9saT5cXFxuICAgICAgICAgICAgPGxpPjx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgY29scz1cIlwiIHJvd3M9XCIyMFwiPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3RleHRhcmVhPjwvbGk+XFxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImZvcm0tYnV0dG9ucy13cmFwcGVyXCI+XFxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2FuY2VsLWZvcm0tYnV0dG9uXCI+Q2FuY2VsPC9idXR0b24+XFxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwic2F2ZS1lZGl0LWJ1dHRvblwiPlNhdmUgQ2hhbmdlczwvYnV0dG9uPlxcXG4gICAgICAgICAgICA8L2xpPlxcXG4gICAgICAgIDwvZm9ybT5gO1xuICAgICAgICBcbiAgICAgICAgLy9oYXZlIHRoZSBvcHRpb24gZm9yIHByaW9yaXR5IHNldCBhcyBzZWxlY3RlZFxuICAgICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7aWYob3B0aW9uLnZhbHVlID09IHByb2plY3QucHJpb3JpdHkpIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywnc2VsZWN0ZWQnKX0pXG4gICAgXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWZvcm0tYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNhbmNlbEZvcm1TdWJtaXNzaW9uKCkpO1xuICAgIFxuICAgICAgICBjb25zdCBzYXZlQ2hhbmdlc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2F2ZS1lZGl0LWJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZUNoYW5nZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBpZihjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHByb2plY3QgJHtwcm9qZWN0LnRpdGxlfT9gKSkge1xuICAgICAgICAgICAgcHJvamVjdHNMaWJyYXJ5LnJlbW92ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0c0luTmF2KHByb2plY3RzTGlicmFyeSk7XG4gICAgICAgICAgICBjbGVhckRpc3BsYXkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyUHJvamVjdEluRGlzcGxheShwcm9qZWN0KSB7XG4gICAgICAgIG1ha2VOZXdQcm9qZWN0QnV0dG9uQWN0aXZlKCk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlcIik7XG4gICAgICAgIGRpc3BsYXlEaXYuaW5uZXJIVE1MID0gYFxcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRpc3BsYXlcIj5cXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGlzcGxheS1jb250ZW50LXdyYXBwZXJcIj5cXFxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInByb2plY3QtZGlzcGxheS10aXRsZVwiPiR7cHJvamVjdC50aXRsZX08L2gxPlxcXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+UHJpb3JpdHk6PC9zdHJvbmc+ICR7cHJvamVjdC5wcmlvcml0eX08L2xpPlxcXG4gICAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+RHVlIERhdGU6PC9zdHJvbmc+ICR7cHJvamVjdC5kdWVEYXRlfTwvbGk+XFxcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Qcm9qZWN0IERlc2NyaXB0aW9uOjwvc3Ryb25nPjxwIGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvbi1wXCI+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTxwPlxcPC9saT5cXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWRpc3BsYXktYnV0dG9ucy13cmFwcGVyXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtcHJvamVjdC1idXR0b25cIj48aW1nIHNyYz1cIiR7RWRpdEljb259XCIgaGVpZ2h0PVwiMTdweFwiLz5FZGl0IFByb2plY3Q8L2J1dHRvbj5cXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3QtYnV0dG9uXCI+PGltZyBzcmM9XCIke0RlbGV0ZUljb259XCIgaGVpZ2h0PVwiMTdweFwiLz5EZWxldGUgUHJvamVjdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cXCBcbiAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWRpc3BsYXlcIj5cXFxuICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJhZGQtdG9kby1mb3JtXCI+XFxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidG9kby1ub3RlLWlucHV0XCI+PC9pbnB1dD5cXCAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRvZG8tYnV0dG9uXCI+PGg0PisgVE8tRE88L2g0PjwvYnV0dG9uPlxcICAgXG4gICAgICAgICAgICA8L2Zvcm0+XFxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cXFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgPC9kaXY+YFxuICAgICAgICByZW5kZXJUb0RvTm90ZXMocHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRvZG8tYnV0dG9uXCIpO1xuICAgICAgICBhZGRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgYWRkVG9Eb05vdGUocHJvamVjdCk7XG4gICAgICAgICAgICByZW5kZXJUb0RvTm90ZXMocHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gIGVkaXRQcm9qZWN0KHByb2plY3QpKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZGVsZXRlUHJvamVjdChwcm9qZWN0KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkVG9Eb05vdGUocHJvamVjdCkge1xuICAgICAgICBsZXQgbm90ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5vdGUtaW5wdXRcIik7XG4gICAgICAgIGlmIChub3RlSW5wdXQudmFsdWUpIHByb2plY3QuYWRkVG9Eb05vdGUobm90ZUNyZWF0b3Iobm90ZUlucHV0LnZhbHVlKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3QudG9Eb05vdGVzKVxuICAgICAgICBub3RlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlclRvRG9Ob3Rlcyhwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IHRvRG9Ob3Rlc0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tbGlzdFwiKTtcbiAgICAgICAgdG9Eb05vdGVzRGlzcGxheS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBwcm9qZWN0LnRvRG9Ob3Rlcy5mb3JFYWNoKG5vdGVPYmplY3QgPT4ge1xuICAgICAgICAgICAgdG9Eb05vdGVzRGlzcGxheS5hcHBlbmRDaGlsZChub3RlT2JqZWN0LnJlbmRlck5vdGUoKSk7XG4gICAgICAgICAgICAvLyBub3RlT2JqZWN0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlUGFnZSwgZ2V0TGlicmFyeX1cbn0pKClcblxuXG4iLCIvLyBCcmFpbnN0b3JtIHdoYXQga2luZCBvZiBwcm9wZXJ0aWVzIHlvdXIgdG9kby1pdGVtcyBhcmUgZ29pbmcgdG8gaGF2ZS4gXG4vLyBBdCBhIG1pbmltdW0gdGhleSBzaG91bGQgaGF2ZSBhIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSBhbmQgcHJpb3JpdHkuIFxuLy8gWW91IG1pZ2h0IGFsc28gd2FudCB0byBpbmNsdWRlIG5vdGVzIG9yIGV2ZW4gYSBjaGVja2xpc3QuXG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c0xpYnJhcnlDcmVhdG9yID0gKCkgPT4ge1xuICAgIGNvbnN0IGxpYnJhcnkgPSBbXTtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3QpID0+IGxpYnJhcnkucHVzaChwcm9qZWN0KTtcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3RJbmRleCkgPT4gbGlicmFyeS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICBjb25zdCBnZXRMaWJyYXJ5ID0gKCkgPT4gbGlicmFyeTtcbiAgICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBnZXRMaWJyYXJ5fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvamVjdEZvcm1EYXRhKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgcmV0dXJuIFt0aXRsZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2NyaXB0aW9uXVxufVxuXG5leHBvcnQgY29uc3Qgbm90ZUNyZWF0b3IgPSAoY29udGVudCkgPT4ge1xuICAgIGxldCBub3RlQ29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICBjb25zdCByZW5kZXJOb3RlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0b0RvTm90ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvRG9Ob3RlRGl2LmNsYXNzTmFtZSA9IFwidG9kby1ub3RlXCI7XG5cblxuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgbm90ZSBkaXNwbGF5XG4gICAgICAgIGNvbnN0IG5vdGVEaXNwbGF5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb25zdCBub3RlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5vdGVDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBub3RlRGlzcGxheURpdi5hcHBlbmRDaGlsZChub3RlQ2hlY2tib3gpO1xuXG4gICAgICAgIGNvbnN0IG5vdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5vdGVUZXh0LnRleHRDb250ZW50ID0gbm90ZUNvbnRlbnQ7XG4gICAgICAgIG5vdGVEaXNwbGF5RGl2LmFwcGVuZENoaWxkKG5vdGVUZXh0KTtcblxuICAgICAgICBjb25zdCBidXR0b25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbnNXcmFwcGVyLmNsYXNzTmFtZSA9IChcIm5vdGUtYnV0dG9ucy13cmFwcGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9IFwidG9kby1lZGl0LWJ1dHRvblwiO1xuICAgICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHJlbmRlckVkaXRNZW51KG5vdGVEaXNwbGF5RGl2LCBub3RlRWRpdERpdiwgbm90ZVRleHQsIG5vdGVFZGl0RmllbGQpKTtcblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJ0b2RvLWRlbGV0ZS1idXR0b25cIjtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2cobm90ZUNvbnRlbnQpKTtcbiAgICAgICAgXG4gICAgICAgIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgICBidXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgICBub3RlRGlzcGxheURpdi5hcHBlbmRDaGlsZChidXR0b25zV3JhcHBlcik7XG5cbiAgICAgICAgdG9Eb05vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZURpc3BsYXlEaXYpXG5cblxuXG4gICAgICAgIC8vIGNyZWF0ZSB0aGUgZWRpdCBub3RlIGRpc3BsYXlcbiAgICAgICAgY29uc3Qgbm90ZUVkaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBub3RlRWRpdERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgICAgICAgY29uc3Qgbm90ZUVkaXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbm90ZUVkaXRGaWVsZC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgIG5vdGVFZGl0RGl2LmFwcGVuZENoaWxkKG5vdGVFZGl0RmllbGQpO1xuXG4gICAgICAgIGNvbnN0IHNhdmVFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc2F2ZUVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIlxuICAgICAgICBzYXZlRWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcInNhdmUtbm90ZS1lZGl0LWJ1dHRvblwiXG4gICAgICAgIHNhdmVFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZWRpdE5vdGUobm90ZVRleHQsIG5vdGVFZGl0RmllbGQudmFsdWUpO1xuICAgICAgICAgICAgbm90ZUVkaXREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgbm90ZURpc3BsYXlEaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyAgIFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjYW5jZWxFZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcImNhbmNlbC1ub3RlLWVkaXQtYnV0dG9uXCI7XG4gICAgICAgIGNhbmNlbEVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgY2FuY2VsRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG5vdGVFZGl0RGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIG5vdGVEaXNwbGF5RGl2LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBub3RlQnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBub3RlQnV0dG9uc1dyYXBwZXIuY2xhc3NOYW1lID0gXCJub3RlLWJ1dHRvbnMtd3JhcHBlclwiO1xuXG4gICAgICAgIG5vdGVCdXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChzYXZlRWRpdEJ1dHRvbik7XG4gICAgICAgIG5vdGVCdXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChjYW5jZWxFZGl0QnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIG5vdGVFZGl0RGl2LmFwcGVuZENoaWxkKG5vdGVCdXR0b25zV3JhcHBlcik7XG4gICAgICAgIHRvRG9Ob3RlRGl2LmFwcGVuZENoaWxkKG5vdGVFZGl0RGl2KTtcblxuICAgICAgICByZXR1cm4gdG9Eb05vdGVEaXYgICAgICAgIFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZWRpdE5vdGUgPSAodGV4dEhvbGRlciwgbmV3VGV4dCkgPT4ge1xuICAgICAgICB0ZXh0SG9sZGVyLnRleHRDb250ZW50ID0gbmV3VGV4dDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRWRpdE1lbnUgPSAobm90ZURpc3BsYXlEaXYsIG5vdGVFZGl0RGl2LCBub3RlVGV4dCwgbm90ZUVkaXRGaWVsZCkgPT4ge1xuICAgICAgICBsZXQgbm90ZUN1cnJlbnRUZXh0ID0gbm90ZVRleHQudGV4dENvbnRlbnQgXG4gICAgICAgIG5vdGVFZGl0RmllbGQudmFsdWUgPSBub3RlQ3VycmVudFRleHQ7XG5cbiAgICAgICAgbm90ZURpc3BsYXlEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBub3RlRWRpdERpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtub3RlQ29udGVudCwgcmVuZGVyTm90ZSwgcmVuZGVyRWRpdE1lbnV9XG4gICAgXG59XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0c0NyZWF0b3IgPSAoZm9ybUlucHV0KSA9PiB7XG4gICAgbGV0IHRpdGxlID0gZm9ybUlucHV0WzBdO1xuICAgIGxldCBwcmlvcml0eSA9IGZvcm1JbnB1dFsxXTtcbiAgICBsZXQgZHVlRGF0ZSA9IGZvcm1JbnB1dFsyXTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBmb3JtSW5wdXRbM107XG4gICAgbGV0IHRvRG9Ob3RlcyA9IFtdO1xuICAgIGNvbnN0IGFkZFRvRG9Ob3RlID0gKG5vdGUpID0+IHRvRG9Ob3Rlcy5wdXNoKG5vdGUpO1xuICAgIGNvbnN0IHJlbW92ZVRvRG9Ob3RlID0gKG5vdGUpID0+IHRvRG9Ob3Rlcy5zcGxpY2UodG9Eb05vdGVzLmluZGV4T2Yobm90ZSksIDEpO1xuICAgIHJldHVybiB7dGl0bGUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgdG9Eb05vdGVzLCBhZGRUb0RvTm90ZSwgcmVtb3ZlVG9Eb05vdGV9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KHByb2plY3QpIHtcbiAgICBbcHJvamVjdC50aXRsZSwgcHJvamVjdC5wcmlvcml0eSwgcHJvamVjdC5kdWVEYXRlLCBwcm9qZWN0LmRlc2NyaXB0aW9uXSA9IGdldFByb2plY3RGb3JtRGF0YSgpO1xuICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Byb2plY3QuaWR9XCJdYCk7XG4gICAgaWYgKCFwcm9qZWN0LnRpdGxlKSBwcm9qZWN0LnRpdGxlPVwiRGVmYXVsdCBQcm9qZWN0XCI7XG4gICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xufVxuXG5cbi8vIGNvbnN0IHJlbmRlck5vdGUgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgdG9Eb05vdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIHRvRG9Ob3RlRGl2LmNsYXNzTmFtZSA9IFwidG9kby1ub3RlXCI7XG5cbi8vICAgICBjb25zdCBub3RlRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbi8vICAgICBjb25zdCBub3RlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4vLyAgICAgbm90ZUNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4vLyAgICAgdG9Eb05vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUNoZWNrYm94KTtcblxuXG5cbi8vICAgICBjb25zdCBub3RlRWRpdEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICAgIG5vdGVFZGl0RmllbGQudHlwZSA9IFwidGV4dFwiO1xuLy8gICAgIG5vdGVFZGl0RmllbGQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbi8vICAgICB0b0RvTm90ZURpdi5hcHBlbmRDaGlsZChub3RlRWRpdEZpZWxkKTtcblxuLy8gICAgIGNvbnN0IG5vdGVUZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgICBub3RlVGV4dEZpZWxkLnRleHRDb250ZW50ID0gbm90ZUNvbnRlbnQ7XG4vLyAgICAgdG9Eb05vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZVRleHRGaWVsZCk7XG5cbi8vICAgICBjb25zdCBidXR0b25zV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4vLyAgICAgYnV0dG9uc1dyYXBwZXIuY2xhc3NOYW1lID0gKFwibm90ZS1idXR0b25zLXdyYXBwZXJcIik7XG5cbi8vICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9IFwidG9kby1lZGl0LWJ1dHRvblwiO1xuLy8gICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbi8vICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBlZGl0Tm90ZShub3RlVGV4dEZpZWxkLCBub3RlRWRpdEZpZWxkKSk7XG5cbi8vICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSBcInRvZG8tZGVsZXRlLWJ1dHRvblwiO1xuLy8gICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuLy8gICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2cobm90ZUNvbnRlbnQpKTtcbiAgICBcbi8vICAgICBidXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbi8vICAgICBidXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuLy8gICAgIHRvRG9Ob3RlRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnNXcmFwcGVyKTtcblxuLy8gICAgIHJldHVybiB0b0RvTm90ZURpdiAgICAgICAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0xpYnJhcnlDcmVhdG9yIH0gZnJvbSBcIi4vdG8tZG8uanNcIjtcbmltcG9ydCB7IGRvbU1hbmlwdWxhdG9yIH0gZnJvbSBcIi4vZG9tLW1hbmlwdWxhdGlvblwiO1xuXG5jb25zdCBwcm9qZWN0c0xpYnJhcnkgPSBwcm9qZWN0c0xpYnJhcnlDcmVhdG9yKCk7XG5kb21NYW5pcHVsYXRvci5jcmVhdGVQYWdlKCk7XG5kb21NYW5pcHVsYXRvci5nZXRMaWJyYXJ5KHByb2plY3RzTGlicmFyeSlcbi8vIHByb2plY3RzTGlicmFyeSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==