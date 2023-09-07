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



.note-buttons-wrapper,
.note-edit-buttons-wrapper {
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;;IAEI,uCAAuC;IACvC,uBAAuB;IACvB,sCAAsC;IACtC,uBAAuB;IACvB,uBAAuB;IACvB,6BAA6B;IAC7B,4BAA4B;IAC5B,8BAA8B;AAClC;;AAEA;IACI,yDAAmD;IACnD,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,iDAAiD;IACjD,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,4CAA4C;IAC5C,aAAa;IACb,eAAe;IACf,sBAAsB;IACtB,OAAO;AACX;;AAEA;;IAEI,aAAa;IACb,YAAY;IACZ,uCAAuC;IACvC,8BAA8B;IAC9B,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iDAAiD;IACjD,eAAe;IACf,aAAa;IACb,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kDAAkD;IAClD,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;;;IAGI,OAAO;IACP,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,OAAO;IACP,kDAAkD;IAClD,YAAY;AAChB;;AAEA;IACI;AACJ;;AAEA;IACI,eAAe;IACf,iDAAiD;AACrD;;AAEA;;IAEI,kBAAkB;IAClB,iDAAiD;IACjD,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,0CAA0C;IAC1C,YAAY;AAChB;;AAEA;;IAEI,iDAAiD;IACjD,eAAe;AACnB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;IAGI,0CAA0C;AAC9C;;;;AAIA;;IAEI,YAAY;AAChB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;;IAEI,4CAA4C;;AAEhD;AACA;;IAEI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,aAAa;AACjB;;AAEA,8BAA8B;;AAE9B;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;;IAEI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,kDAAkD;AACtD;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,oBAAoB;IACpB,0BAA0B;AAC9B;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;;AAEA;;AAEA;IACI,aAAa;IACb,WAAW;IACX,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;AACvB;;;;AAIA;;IAEI,4BAA4B;IAC5B,eAAe;IACf,aAAa;IACb,WAAW;IACX,oBAAoB;AACxB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,aAAa;AACjB","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    \n    --main-color-1: rgba(52, 211, 153, 0.8);\n    --main-color-2: #dcfce7;\n    --main-color-3: rgba(239, 68, 68, 0.8);    \n    --main-color-4: #34d399;\n    --main-color-5: #fef3c7;\n    /* --main-color-6: #fef3c7; */\n    /* --main-color-6:#f0fdf4; */\n    --main-color-6: rgb(0,0,0,0.6);\n}\n\nhtml {\n    background-image: url(\"./main-background-min.webp\");\n    background-size: cover;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    background-color: var(--main-color-1, lightgreen);\n    padding: 1rem 3rem;\n    display: flex;\n    align-items: center;\n    box-shadow: 2px 2px 12px;\n}\n\n.main {\n    background-color: var(--main-color-6, black);\n    display: flex;\n    flex-wrap: wrap;\n    align-content: stretch;\n    flex: 1;\n}\n\n.nav,\n.display {\n    padding: 2rem;\n    margin: 2rem;\n    background-color: rgb(240,240,240, 0.6);\n    box-shadow: 2px 2px 12px black;\n    border-radius: 6px;\n    color: white;\n}\n\n.nav {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;    \n}\n\n.display {\n    flex: 3;\n    display: flex;\n    flex-direction: column;\n}\n\n.footer {\n    background-color: var(--main-color-1, lightgreen);\n    padding: 0.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.footer a {\n    color: black;\n}\n\nbutton {\n    padding: 0.3rem;\n    border-radius: 6px;\n}\n\n.new-project-form {\n    background-color: var(--main-color-6, lightyellow);\n    color: white;\n    padding: 1rem;\n    border: 2px solid black;\n    border-radius: 6px;\n}\n\n.new-project-form li {\n    list-style: none;\n    display: flex;\n    padding: 0.1rem 0;    \n}\n\n.form-buttons-wrapper {\n    display: flex;\n    justify-content: space-between;\n}\n\ninput,\ntextarea,\nselect {\n    flex: 1;\n    border-radius: 6px;\n    padding-left: 0.3rem;\n}\n\ntextarea {\n    box-sizing: border-box;\n    padding: 0.5rem;\n}\n\n\n.projects-div {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n}\n\n.project-element-title {\n    flex: 1;\n    background-color: var(--main-color-6, lightyellow);\n    color: white;\n}\n\n.project-element-title:hover {\n    transform: translate(0, -0.2rem)\n}\n\n.new-project-button {\n    font-size: 1rem;\n    background-color: var(--main-color-4, lightgreen);\n}\n\n.add-todo-button,\n.save-note-edit-button {\n    width: fit-content;\n    background-color: var(--main-color-4, lightgreen);\n    align-self: flex-end;\n}\n\n.new-project-button:active {\n    color: white;\n}\n\n.new-project-button.clicked:active {\n    background-color: var(--main-color-3, red);\n    color: white;\n}\n\n.submit-button,\n.save-edit-button {\n    background-color: var(--main-color-4, lightgreen);\n    padding: 0.5rem;\n}\n\n.submit-button:active,\n.save-edit-button:active {\n    color: white;\n}\n\n.cancel-form-button,\n.todo-delete-button,\n.cancel-note-edit-button {\n    background-color: var(--main-color-3, red);\n}\n\n\n\n.cancel-form-button:active,\n.delete-project-button.active {\n    color: white;\n}\n\n.delete-project-button {\n    background-color: var(--main-color-3, red);\n}\n\n.edit-project-button,\n.todo-edit-button {\n    background-color: var(--main-color-5, brown);\n\n}\n.edit-project-button,\n.delete-project-button {\n    width: fit-content;\n    align-self: flex-end;\n    align-items: center;\n    display: flex;  \n}\n\n/* Render objects to display */\n\n.project-display {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.project-display-content-wrapper,\n.todo-display {\n    border: 2px solid black;\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    color: white;\n    border-radius: 6px;\n    padding: 1rem;\n    background-color: var(--main-color-6, lightyellow);\n}\n\n.todo-display {\n    gap: 1rem;\n}\n\n.project-display-buttons-wrapper {\n    display: flex;\n    gap: 0.3rem;\n    justify-content: flex-end;\n}\n\n.project-display-title {\n    padding-bottom: 1rem;\n    text-decoration: underline;\n}\n\n.project-description-p {\n    margin-left: 1.4rem;\n    text-align: justify;\n}\n\n.add-todo-form {\n    display: flex;\n    /* align-items: center; */\n    gap: 1rem;\n    flex-direction: column;\n}\n\nh1 {\n    text-decoration: underline;\n}\n\n.todo-list {\n    \n}\n\n.todo-note > div {\n    display: flex;\n    gap: 0.3rem;\n    border-bottom: 1px solid black;\n    align-items: center;\n    text-align: justify;\n}\n\n\n\n.note-buttons-wrapper,\n.note-edit-buttons-wrapper {\n    margin: 0.3rem 0 0.3rem auto;\n    padding: 0.1rem;\n    display: flex;\n    gap: 0.3rem;\n    align-self: flex-end;\n}\n\ninput[type=\"checkbox\"] {\n    flex: 0;\n}\n\n.hidden {\n    display: none;\n}"],"sourceRoot":""}]);
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

        const noteTextField = document.createElement("p");
        noteTextField.textContent = noteContent;
        noteDisplayDiv.appendChild(noteTextField);

        const buttonsWrapper = document.createElement("div");
        buttonsWrapper.className = ("note-buttons-wrapper");

        const editButton = document.createElement("button");
        editButton.className = "todo-edit-button";
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editNote(noteDisplayDiv, noteEditDiv, noteTextField, noteEditField));

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
        });

        const cancelEditButton = document.createElement("button");
        cancelEditButton.className = "cancel-note-edit-button";
        cancelEditButton.textContent = "X";
        cancelEditButton.addEventListener("click", (e) => {
            e.preventDefault();
            noteDisplayDiv.style.display = "flex";
            noteEditDiv.style.display = "none";
        });
        
        const noteButtonsWrapper = document.createElement("div");
        noteButtonsWrapper.className = "note-edit-buttons-wrapper";

        noteButtonsWrapper.appendChild(saveEditButton);
        noteButtonsWrapper.appendChild(cancelEditButton);
        
        noteEditDiv.appendChild(noteButtonsWrapper);
        toDoNoteDiv.appendChild(noteEditDiv);

        return toDoNoteDiv        
    };
    
    const editNote = (noteDisplayDiv, noteEditDiv, noteTextField, noteEditField) => {
        let noteCurrentText = noteTextField.textContent 
        noteDisplayDiv.style.display = "none";
        console.log(noteDisplayDiv)
        
        noteEditField.value = noteCurrentText;
        noteEditDiv.style.display = "flex";
    }

    return {noteContent, renderNote, editNote}
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsaUlBQTZDO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVks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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUM4QjtBQUNBOztBQUVwRCx3QkFBd0IsaUVBQXNCO0FBQzlDLDZEQUFjO0FBQ2QsNkRBQWM7QUFDZCxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RvbS1tYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvLWRvLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21haW4tYmFja2dyb3VuZC1taW4ud2VicFwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbjpyb290IHtcbiAgICBcbiAgICAtLW1haW4tY29sb3ItMTogcmdiYSg1MiwgMjExLCAxNTMsIDAuOCk7XG4gICAgLS1tYWluLWNvbG9yLTI6ICNkY2ZjZTc7XG4gICAgLS1tYWluLWNvbG9yLTM6IHJnYmEoMjM5LCA2OCwgNjgsIDAuOCk7ICAgIFxuICAgIC0tbWFpbi1jb2xvci00OiAjMzRkMzk5O1xuICAgIC0tbWFpbi1jb2xvci01OiAjZmVmM2M3O1xuICAgIC8qIC0tbWFpbi1jb2xvci02OiAjZmVmM2M3OyAqL1xuICAgIC8qIC0tbWFpbi1jb2xvci02OiNmMGZkZjQ7ICovXG4gICAgLS1tYWluLWNvbG9yLTY6IHJnYigwLDAsMCwwLjYpO1xufVxuXG5odG1sIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEsIGxpZ2h0Z3JlZW4pO1xuICAgIHBhZGRpbmc6IDFyZW0gM3JlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4O1xufVxuXG4ubWFpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci02LCBibGFjayk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAgICBmbGV4OiAxO1xufVxuXG4ubmF2LFxuLmRpc3BsYXkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsMjQwLDI0MCwgMC42KTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdiB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtOyAgICBcbn1cblxuLmRpc3BsYXkge1xuICAgIGZsZXg6IDM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTEsIGxpZ2h0Z3JlZW4pO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmZvb3RlciBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmJ1dHRvbiB7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLm5ldy1wcm9qZWN0LWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNiwgbGlnaHR5ZWxsb3cpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLm5ldy1wcm9qZWN0LWZvcm0gbGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwLjFyZW0gMDsgICAgXG59XG5cbi5mb3JtLWJ1dHRvbnMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmlucHV0LFxudGV4dGFyZWEsXG5zZWxlY3Qge1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMC4zcmVtO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cblxuLnByb2plY3RzLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4ucHJvamVjdC1lbGVtZW50LXRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNiwgbGlnaHR5ZWxsb3cpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3QtZWxlbWVudC10aXRsZTpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMnJlbSlcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNCwgbGlnaHRncmVlbik7XG59XG5cbi5hZGQtdG9kby1idXR0b24sXG4uc2F2ZS1ub3RlLWVkaXQtYnV0dG9uIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCBsaWdodGdyZWVuKTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbjphY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbi5jbGlja2VkOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCByZWQpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN1Ym1pdC1idXR0b24sXG4uc2F2ZS1lZGl0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCBsaWdodGdyZWVuKTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5zdWJtaXQtYnV0dG9uOmFjdGl2ZSxcbi5zYXZlLWVkaXQtYnV0dG9uOmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uY2FuY2VsLWZvcm0tYnV0dG9uLFxuLnRvZG8tZGVsZXRlLWJ1dHRvbixcbi5jYW5jZWwtbm90ZS1lZGl0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCByZWQpO1xufVxuXG5cblxuLmNhbmNlbC1mb3JtLWJ1dHRvbjphY3RpdmUsXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uLmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMsIHJlZCk7XG59XG5cbi5lZGl0LXByb2plY3QtYnV0dG9uLFxuLnRvZG8tZWRpdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNSwgYnJvd24pO1xuXG59XG4uZWRpdC1wcm9qZWN0LWJ1dHRvbixcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7ICBcbn1cblxuLyogUmVuZGVyIG9iamVjdHMgdG8gZGlzcGxheSAqL1xuXG4ucHJvamVjdC1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC1kaXNwbGF5LWNvbnRlbnQtd3JhcHBlcixcbi50b2RvLWRpc3BsYXkge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTYsIGxpZ2h0eWVsbG93KTtcbn1cblxuLnRvZG8tZGlzcGxheSB7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdC1kaXNwbGF5LWJ1dHRvbnMtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuM3JlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucHJvamVjdC1kaXNwbGF5LXRpdGxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24tcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uYWRkLXRvZG8tZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgIGdhcDogMXJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5oMSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi50b2RvLWxpc3Qge1xuICAgIFxufVxuXG4udG9kby1ub3RlID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC4zcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cblxuXG4ubm90ZS1idXR0b25zLXdyYXBwZXIsXG4ubm90ZS1lZGl0LWJ1dHRvbnMtd3JhcHBlciB7XG4gICAgbWFyZ2luOiAwLjNyZW0gMCAwLjNyZW0gYXV0bztcbiAgICBwYWRkaW5nOiAwLjFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDAuM3JlbTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBmbGV4OiAwO1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOztJQUVJLHVDQUF1QztJQUN2Qyx1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5REFBbUQ7SUFDbkQsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLE9BQU87QUFDWDs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVDQUF1QztJQUN2Qyw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7OztJQUdJLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxPQUFPO0lBQ1Asa0RBQWtEO0lBQ2xELFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlEQUFpRDtBQUNyRDs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxpREFBaUQ7SUFDakQsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7SUFHSSwwQ0FBMEM7QUFDOUM7Ozs7QUFJQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMENBQTBDO0FBQzlDOztBQUVBOztJQUVJLDRDQUE0Qzs7QUFFaEQ7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBLDhCQUE4Qjs7QUFFOUI7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7Ozs7QUFJQTs7SUFFSSw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGFBQWE7SUFDYixXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIFxcbiAgICAtLW1haW4tY29sb3ItMTogcmdiYSg1MiwgMjExLCAxNTMsIDAuOCk7XFxuICAgIC0tbWFpbi1jb2xvci0yOiAjZGNmY2U3O1xcbiAgICAtLW1haW4tY29sb3ItMzogcmdiYSgyMzksIDY4LCA2OCwgMC44KTsgICAgXFxuICAgIC0tbWFpbi1jb2xvci00OiAjMzRkMzk5O1xcbiAgICAtLW1haW4tY29sb3ItNTogI2ZlZjNjNztcXG4gICAgLyogLS1tYWluLWNvbG9yLTY6ICNmZWYzYzc7ICovXFxuICAgIC8qIC0tbWFpbi1jb2xvci02OiNmMGZkZjQ7ICovXFxuICAgIC0tbWFpbi1jb2xvci02OiByZ2IoMCwwLDAsMC42KTtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9tYWluLWJhY2tncm91bmQtbWluLndlYnBcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xLCBsaWdodGdyZWVuKTtcXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHg7XFxufVxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci02LCBibGFjayk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm5hdixcXG4uZGlzcGxheSB7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwyNDAsMjQwLCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxcmVtOyAgICBcXG59XFxuXFxuLmRpc3BsYXkge1xcbiAgICBmbGV4OiAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0xLCBsaWdodGdyZWVuKTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNiwgbGlnaHR5ZWxsb3cpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcblxcbi5uZXctcHJvamVjdC1mb3JtIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMC4xcmVtIDA7ICAgIFxcbn1cXG5cXG4uZm9ybS1idXR0b25zLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbn1cXG5cXG5cXG4ucHJvamVjdHMtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWVsZW1lbnQtdGl0bGUge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTYsIGxpZ2h0eWVsbG93KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC1lbGVtZW50LXRpdGxlOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTAuMnJlbSlcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci00LCBsaWdodGdyZWVuKTtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbixcXG4uc2F2ZS1ub3RlLWVkaXQtYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTQsIGxpZ2h0Z3JlZW4pO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjphY3RpdmUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24uY2xpY2tlZDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMsIHJlZCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24sXFxuLnNhdmUtZWRpdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTQsIGxpZ2h0Z3JlZW4pO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uOmFjdGl2ZSxcXG4uc2F2ZS1lZGl0LWJ1dHRvbjphY3RpdmUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jYW5jZWwtZm9ybS1idXR0b24sXFxuLnRvZG8tZGVsZXRlLWJ1dHRvbixcXG4uY2FuY2VsLW5vdGUtZWRpdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yLTMsIHJlZCk7XFxufVxcblxcblxcblxcbi5jYW5jZWwtZm9ybS1idXR0b246YWN0aXZlLFxcbi5kZWxldGUtcHJvamVjdC1idXR0b24uYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci0zLCByZWQpO1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbixcXG4udG9kby1lZGl0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3ItNSwgYnJvd24pO1xcblxcbn1cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbixcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDsgIFxcbn1cXG5cXG4vKiBSZW5kZXIgb2JqZWN0cyB0byBkaXNwbGF5ICovXFxuXFxuLnByb2plY3QtZGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtZGlzcGxheS1jb250ZW50LXdyYXBwZXIsXFxuLnRvZG8tZGlzcGxheSB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvci02LCBsaWdodHllbGxvdyk7XFxufVxcblxcbi50b2RvLWRpc3BsYXkge1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXktYnV0dG9ucy13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qZWN0LWRpc3BsYXktdGl0bGUge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uLXAge1xcbiAgICBtYXJnaW4tbGVmdDogMS40cmVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIGdhcDogMXJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLnRvZG8tbGlzdCB7XFxuICAgIFxcbn1cXG5cXG4udG9kby1ub3RlID4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAwLjNyZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuXFxuXFxuLm5vdGUtYnV0dG9ucy13cmFwcGVyLFxcbi5ub3RlLWVkaXQtYnV0dG9ucy13cmFwcGVyIHtcXG4gICAgbWFyZ2luOiAwLjNyZW0gMCAwLjNyZW0gYXV0bztcXG4gICAgcGFkZGluZzogMC4xcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDAuM3JlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBFZGl0SWNvbiBmcm9tIFwiLi9pY29ucy9lZGl0LWJ1dHRvbi1pY29uLnN2Z1wiXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tIFwiLi9pY29ucy9kZWxldGUtYnV0dG9uLWljb24uc3ZnXCJcblxuXG5pbXBvcnQgeyBwcm9qZWN0c0NyZWF0b3IsIGdldFByb2plY3RGb3JtRGF0YSwgdXBkYXRlUHJvamVjdCwgbm90ZUNyZWF0b3IgfSBmcm9tIFwiLi90by1kb1wiO1xuXG5leHBvcnQgY29uc3QgZG9tTWFuaXB1bGF0b3IgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0c0xpYnJhcnk7XG4gICAgY29uc3QgZ2V0TGlicmFyeSA9IChsaWJyYXJ5KSA9PiBwcm9qZWN0c0xpYnJhcnkgPSBsaWJyYXJ5O1xuICAgIFxuICAgIGNvbnN0IGNyZWF0ZVBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcbiAgICAgICAgaGVhZGVyLmlubmVySFRNTCA9IFwiPGgxPk15IFRvLURvIExpc3Q8L2gxPlwiO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW4uY2xhc3NOYW1lID0gXCJtYWluXCI7XG5cbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXG4gICAgICAgIG5hdi5jbGFzc05hbWUgPSBcIm5hdlwiO1xuXG5cbiAgICAgICAgY29uc3QgaG9tZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaG9tZUhlYWRlci50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBwcm9qZWN0c0hlYWRlci50ZXh0Q29udGVudCA9IFwiUHJvamVjdHM6XCI7XG5cbiAgICAgICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NOYW1lID0gXCJuZXctcHJvamVjdC1idXR0b25cIjtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3QgK1wiO1xuXG4gICAgICAgIGNvbnN0IHByb3RlY3RzTGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb3RlY3RzTGlzdERpdi5jbGFzc05hbWUgPSBcInByb2plY3RzLWRpdlwiO1xuXG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChob21lSGVhZGVyKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKTtcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pO1xuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQocHJvdGVjdHNMaXN0RGl2KTtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXNwbGF5LmNsYXNzTmFtZSA9IFwiZGlzcGxheVwiO1xuICAgICAgICBkaXNwbGF5LmlubmVySFRNTCA9ICdcXFxuICAgICAgICA8aDI+VG8gQmVnaW46PC9oMj48YnI+PGxpPiBDcmVhdGUgYSBuZXcgcHJvamVjdDwvbGk+XFxcbiAgICAgICAgPGxpPiBQaWNrIGFuIGV4aXN0aW5nIHByb2plY3QgZnJvbSB0aGUgbGlzdDwvbGk+J1xuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9vdGVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyXCI7XG4gICAgICAgIGZvb3Rlci5pbm5lckhUTUwgPSAnXFxcbiAgICAgICAgPHA+QmFja2dyb3VuZCBwaG90byBieSA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGFuZHJld3RuZWVsP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkFuZHJldyBOZWVsXFxcbiAgICAgICAgPC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2Nja2Y0VHNIQXV3P3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPlVuc3BsYXNoPC9hPjwvcD5cXFxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0l2YXlsbzkySXZhbm92XCI+Q3JlYXRlZCBieSBJdmF5bG8gSS48L2E+JztcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2xpY2tlZFwiKSkge1xuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheU5ld1Byb2plY3RGb3JtKCk7XG4gICAgICAgICAgICAgICAgbWFrZU5ld1Byb2plY3RCdXR0b25JbmFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtYnV0dG9uXCIpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3RGb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0c0NyZWF0b3IoZ2V0UHJvamVjdEZvcm1EYXRhKCkpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0xpYnJhcnkuYWRkUHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RzSW5OYXYocHJvamVjdHNMaWJyYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIG1ha2VOZXdQcm9qZWN0QnV0dG9uQWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIGNsZWFyRGlzcGxheSgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MID0gJ1xcXG4gICAgICAgIDxoMj5UbyBCZWdpbjo8L2gyPjxicj48bGk+IENyZWF0ZSBhIG5ldyBwcm9qZWN0PC9saT5cXFxuICAgICAgICA8bGk+IFBpY2sgYW4gZXhpc3RpbmcgcHJvamVjdCBmcm9tIHRoZSBsaXN0PC9saT4nXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG1ha2VOZXdQcm9qZWN0QnV0dG9uQWN0aXZlKCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIG1ha2VOZXdQcm9qZWN0QnV0dG9uSW5hY3RpdmUoKSB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICB9XG4gICAgIFxuICAgIGZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MID0nXFxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJuZXctcHJvamVjdC1mb3JtXCI+XFxcbiAgICAgICAgICAgIDxoMT5DcmVhdGUgTmV3IFByb2plY3Q8L2gxPlxcXG4gICAgICAgICAgICA8bGk+PGxhYmVsIGZvcj1cInRpdGxlXCIgPlByb2plY3QgVGl0bGU6PC9sYWJlbD48L2xpPlxcXG4gICAgICAgICAgICA8bGk+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiXCI+PC9saT5cXFxuICAgICAgICAgICAgPGxpPjxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlBpY2sgUHJpb3JpdHk6PC9sYWJlbD48L2xpPlxcXG4gICAgICAgICAgICA8bGk+XFxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwicHJpb3JpdHlcIj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9uZVwiPk5vbmU8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxcbiAgICAgICAgICAgIDwvbGk+XFxcbiAgICAgICAgICAgIDxsaT48bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+PC9saT5cXFxuICAgICAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHZhbHVlPVwiXCI+PC9saT5cXFxuICAgICAgICAgICAgPGxpPjxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XFw8L2xpPlxcXG4gICAgICAgICAgICA8bGk+PHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiXCIgcm93cz1cIjIwXCI+PC90ZXh0YXJlYT48L2xpPlxcXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJmb3JtLWJ1dHRvbnMtd3JhcHBlclwiPlxcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNhbmNlbC1mb3JtLWJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxcXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj5DcmVhdGUgUHJvamVjdDwvYnV0dG9uPlxcXG4gICAgICAgICAgICA8L2xpPlxcXG4gICAgICAgIDwvZm9ybT4nO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtZm9ybS1idXR0b25cIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FuY2VsRm9ybVN1Ym1pc3Npb24oKSk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBjYW5jZWxGb3JtU3VibWlzc2lvbigpIHtcbiAgICAgICAgbWFrZU5ld1Byb2plY3RCdXR0b25BY3RpdmUoKTtcbiAgICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0c0luTmF2KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtZGl2XCIpO1xuICAgICAgICBwcm9qZWN0c0Rpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFxuICAgICAgICBwcm9qZWN0c0xpYnJhcnkuZ2V0TGlicmFyeSgpLmZvckVhY2goY3VycmVudFByb2plY3QgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2plY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHByb2plY3RFbGVtZW50LmNsYXNzTmFtZSA9IFwicHJvamVjdC1lbGVtZW50LXRpdGxlXCI7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRQcm9qZWN0LnRpdGxlKSBjdXJyZW50UHJvamVjdC50aXRsZT1cIkRlZmF1bHQgUHJvamVjdFwiO1xuICAgICAgICAgICAgcHJvamVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdC50aXRsZTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0SWQoIGN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIHNldE1hdGNoaW5nSWRGb3JQcm9qZWN0RWxlbWVudChwcm9qZWN0RWxlbWVudCwgY3VycmVudFByb2plY3QuaWQpO1xuICAgICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lclRvUHJvamVjdEVsZW1lbnRzKCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBzZXRDdXJyZW50UHJvamVjdElkKHByb2plY3QpIHtcbiAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3RzTGlicmFyeS5nZXRMaWJyYXJ5KCkuaW5kZXhPZihwcm9qZWN0KTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIHNldE1hdGNoaW5nSWRGb3JQcm9qZWN0RWxlbWVudChwcm9qZWN0RWxlbWVudCwgaWQpIHtcbiAgICAgICAgcHJvamVjdEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiLCBpZCk7XG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyVG9Qcm9qZWN0RWxlbWVudHMoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0c1RpdGxlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtZWxlbWVudC10aXRsZVwiKTtcbiAgICAgICAgcHJvamVjdHNUaXRsZXNMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdElkID0gcHJvamVjdC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge3JlbmRlclByb2plY3RJbkRpc3BsYXkocHJvamVjdHNMaWJyYXJ5LmdldExpYnJhcnkoKVtwcm9qZWN0SWRdKX0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XG4gICAgICAgIGRpc3BsYXkuaW5uZXJIVE1MID1gXFxcbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCIgY2xhc3M9XCJuZXctcHJvamVjdC1mb3JtXCI+XFxcbiAgICAgICAgICAgIDxoMT5FZGl0IFByb2plY3QgXCI8ZW0+JHtwcm9qZWN0LnRpdGxlfTwvZW0+XCI8L2gxPlxcXG4gICAgICAgICAgICA8bGk+PGxhYmVsIGZvcj1cInRpdGxlXCIgPlByb2plY3QgVGl0bGU6PC9sYWJlbD48L2xpPlxcXG4gICAgICAgICAgICA8bGk+PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHZhbHVlPVwiJHtwcm9qZWN0LnRpdGxlfVwiPjwvbGk+XFxcbiAgICAgICAgICAgIDxsaT48bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5QaWNrIFByaW9yaXR5OjwvbGFiZWw+PC9saT5cXFxuICAgICAgICAgICAgPGxpPlxcXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XFxcbiAgICAgICAgICAgICAgICA8c2NyaXB0Pjwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTm9uZVwiPk5vbmU8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cXFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XFxcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkxvd1wiPkxvdzwvb3B0aW9uPlxcXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XFxcbiAgICAgICAgICAgIDwvbGk+XFxcbiAgICAgICAgICAgIDxsaT48bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+PC9saT5cXFxuICAgICAgICAgICAgPGxpPjxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHZhbHVlPVwiJHtwcm9qZWN0LmR1ZURhdGV9XCI+PC9saT5cXFxuICAgICAgICAgICAgPGxpPjxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XFw8L2xpPlxcXG4gICAgICAgICAgICA8bGk+PHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGlkPVwiZGVzY3JpcHRpb25cIiBjb2xzPVwiXCIgcm93cz1cIjIwXCI+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvdGV4dGFyZWE+PC9saT5cXFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZm9ybS1idXR0b25zLXdyYXBwZXJcIj5cXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYW5jZWwtZm9ybS1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cXFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJzYXZlLWVkaXQtYnV0dG9uXCI+U2F2ZSBDaGFuZ2VzPC9idXR0b24+XFxcbiAgICAgICAgICAgIDwvbGk+XFxcbiAgICAgICAgPC9mb3JtPmA7XG4gICAgICAgIFxuICAgICAgICAvL2hhdmUgdGhlIG9wdGlvbiBmb3IgcHJpb3JpdHkgc2V0IGFzIHNlbGVjdGVkXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwib3B0aW9uXCIpO1xuICAgICAgICBvcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtpZihvcHRpb24udmFsdWUgPT0gcHJvamVjdC5wcmlvcml0eSkgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCdzZWxlY3RlZCcpfSlcbiAgICBcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtZm9ybS1idXR0b25cIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FuY2VsRm9ybVN1Ym1pc3Npb24oKSk7XG4gICAgXG4gICAgICAgIGNvbnN0IHNhdmVDaGFuZ2VzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYXZlLWVkaXQtYnV0dG9uXCIpO1xuICAgICAgICBzYXZlQ2hhbmdlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICBjbGVhckRpc3BsYXkoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGlmKGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgcHJvamVjdCAke3Byb2plY3QudGl0bGV9P2ApKSB7XG4gICAgICAgICAgICBwcm9qZWN0c0xpYnJhcnkucmVtb3ZlUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RzSW5OYXYocHJvamVjdHNMaWJyYXJ5KTtcbiAgICAgICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW5kZXJQcm9qZWN0SW5EaXNwbGF5KHByb2plY3QpIHtcbiAgICAgICAgbWFrZU5ld1Byb2plY3RCdXR0b25BY3RpdmUoKTtcbiAgICAgICAgY29uc3QgZGlzcGxheURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheVwiKTtcbiAgICAgICAgZGlzcGxheURpdi5pbm5lckhUTUwgPSBgXFxcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGlzcGxheVwiPlxcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1kaXNwbGF5LWNvbnRlbnQtd3JhcHBlclwiPlxcXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwicHJvamVjdC1kaXNwbGF5LXRpdGxlXCI+JHtwcm9qZWN0LnRpdGxlfTwvaDE+XFxcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Qcmlvcml0eTo8L3N0cm9uZz4gJHtwcm9qZWN0LnByaW9yaXR5fTwvbGk+XFxcbiAgICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5EdWUgRGF0ZTo8L3N0cm9uZz4gJHtwcm9qZWN0LmR1ZURhdGV9PC9saT5cXFxuICAgICAgICAgICAgICAgIDxsaT48c3Ryb25nPlByb2plY3QgRGVzY3JpcHRpb246PC9zdHJvbmc+PHAgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uLXBcIj4ke3Byb2plY3QuZGVzY3JpcHRpb259PHA+XFw8L2xpPlxcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZGlzcGxheS1idXR0b25zLXdyYXBwZXJcIj5cXFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1wcm9qZWN0LWJ1dHRvblwiPjxpbWcgc3JjPVwiJHtFZGl0SWNvbn1cIiBoZWlnaHQ9XCIxN3B4XCIvPkVkaXQgUHJvamVjdDwvYnV0dG9uPlxcXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGUtcHJvamVjdC1idXR0b25cIj48aW1nIHNyYz1cIiR7RGVsZXRlSWNvbn1cIiBoZWlnaHQ9XCIxN3B4XCIvPkRlbGV0ZSBQcm9qZWN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgIDwvZGl2PlxcIFxuICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tZGlzcGxheVwiPlxcXG4gICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzcz1cImFkZC10b2RvLWZvcm1cIj5cXFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0b2RvLW5vdGUtaW5wdXRcIj48L2lucHV0PlxcICAgIFxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdG9kby1idXR0b25cIj48aDQ+KyBUTy1ETzwvaDQ+PC9idXR0b24+XFwgICBcbiAgICAgICAgICAgIDwvZm9ybT5cXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tbGlzdFwiPlxcXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICA8L2Rpdj5gXG4gICAgICAgIHJlbmRlclRvRG9Ob3Rlcyhwcm9qZWN0KTtcblxuICAgICAgICBjb25zdCBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kby1idXR0b25cIik7XG4gICAgICAgIGFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBhZGRUb0RvTm90ZShwcm9qZWN0KTtcbiAgICAgICAgICAgIHJlbmRlclRvRG9Ob3Rlcyhwcm9qZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXByb2plY3QtYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiAgZWRpdFByb2plY3QocHJvamVjdCkpO1xuICAgIFxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBkZWxldGVQcm9qZWN0KHByb2plY3QpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0RvTm90ZShwcm9qZWN0KSB7XG4gICAgICAgIGxldCBub3RlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbm90ZS1pbnB1dFwiKTtcbiAgICAgICAgaWYgKG5vdGVJbnB1dC52YWx1ZSkgcHJvamVjdC5hZGRUb0RvTm90ZShub3RlQ3JlYXRvcihub3RlSW5wdXQudmFsdWUpKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdC50b0RvTm90ZXMpXG4gICAgICAgIG5vdGVJbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyVG9Eb05vdGVzKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgdG9Eb05vdGVzRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuICAgICAgICB0b0RvTm90ZXNEaXNwbGF5LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHByb2plY3QudG9Eb05vdGVzLmZvckVhY2gobm90ZU9iamVjdCA9PiB7XG4gICAgICAgICAgICB0b0RvTm90ZXNEaXNwbGF5LmFwcGVuZENoaWxkKG5vdGVPYmplY3QucmVuZGVyTm90ZSgpKTtcbiAgICAgICAgICAgIC8vIG5vdGVPYmplY3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtjcmVhdGVQYWdlLCBnZXRMaWJyYXJ5fVxufSkoKVxuXG5cbiIsIi8vIEJyYWluc3Rvcm0gd2hhdCBraW5kIG9mIHByb3BlcnRpZXMgeW91ciB0b2RvLWl0ZW1zIGFyZSBnb2luZyB0byBoYXZlLiBcbi8vIEF0IGEgbWluaW11bSB0aGV5IHNob3VsZCBoYXZlIGEgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlIGFuZCBwcmlvcml0eS4gXG4vLyBZb3UgbWlnaHQgYWxzbyB3YW50IHRvIGluY2x1ZGUgbm90ZXMgb3IgZXZlbiBhIGNoZWNrbGlzdC5cblxuZXhwb3J0IGNvbnN0IHByb2plY3RzTGlicmFyeUNyZWF0b3IgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlicmFyeSA9IFtdO1xuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdCkgPT4gbGlicmFyeS5wdXNoKHByb2plY3QpO1xuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdEluZGV4KSA9PiBsaWJyYXJ5LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgIGNvbnN0IGdldExpYnJhcnkgPSAoKSA9PiBsaWJyYXJ5O1xuICAgIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIGdldExpYnJhcnl9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9qZWN0Rm9ybURhdGEoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKS52YWx1ZTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICByZXR1cm4gW3RpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb25dXG59XG5cbmV4cG9ydCBjb25zdCBub3RlQ3JlYXRvciA9IChjb250ZW50KSA9PiB7XG4gICAgbGV0IG5vdGVDb250ZW50ID0gY29udGVudDtcblxuICAgIGNvbnN0IHJlbmRlck5vdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvRG9Ob3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdG9Eb05vdGVEaXYuY2xhc3NOYW1lID0gXCJ0b2RvLW5vdGVcIjtcblxuXG5cbiAgICAgICAgLy8gY3JlYXRlIHRoZSBub3RlIGRpc3BsYXlcbiAgICAgICAgY29uc3Qgbm90ZURpc3BsYXlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnN0IG5vdGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbm90ZUNoZWNrYm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIG5vdGVEaXNwbGF5RGl2LmFwcGVuZENoaWxkKG5vdGVDaGVja2JveCk7XG5cbiAgICAgICAgY29uc3Qgbm90ZVRleHRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBub3RlVGV4dEZpZWxkLnRleHRDb250ZW50ID0gbm90ZUNvbnRlbnQ7XG4gICAgICAgIG5vdGVEaXNwbGF5RGl2LmFwcGVuZENoaWxkKG5vdGVUZXh0RmllbGQpO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uc1dyYXBwZXIuY2xhc3NOYW1lID0gKFwibm90ZS1idXR0b25zLXdyYXBwZXJcIik7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJ0b2RvLWVkaXQtYnV0dG9uXCI7XG4gICAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZWRpdE5vdGUobm90ZURpc3BsYXlEaXYsIG5vdGVFZGl0RGl2LCBub3RlVGV4dEZpZWxkLCBub3RlRWRpdEZpZWxkKSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwidG9kby1kZWxldGUtYnV0dG9uXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKG5vdGVDb250ZW50KSk7XG4gICAgICAgIFxuICAgICAgICBidXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgICAgYnV0dG9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgbm90ZURpc3BsYXlEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uc1dyYXBwZXIpO1xuXG4gICAgICAgIHRvRG9Ob3RlRGl2LmFwcGVuZENoaWxkKG5vdGVEaXNwbGF5RGl2KVxuXG5cblxuICAgICAgICAvLyBjcmVhdGUgdGhlIGVkaXQgbm90ZSBkaXNwbGF5XG4gICAgICAgIGNvbnN0IG5vdGVFZGl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm90ZUVkaXREaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgICAgIGNvbnN0IG5vdGVFZGl0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5vdGVFZGl0RmllbGQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICBub3RlRWRpdERpdi5hcHBlbmRDaGlsZChub3RlRWRpdEZpZWxkKTtcblxuICAgICAgICBjb25zdCBzYXZlRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHNhdmVFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCJcbiAgICAgICAgc2F2ZUVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJzYXZlLW5vdGUtZWRpdC1idXR0b25cIlxuICAgICAgICBzYXZlRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbEVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJjYW5jZWwtbm90ZS1lZGl0LWJ1dHRvblwiO1xuICAgICAgICBjYW5jZWxFZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGNhbmNlbEVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBub3RlRGlzcGxheURpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICBub3RlRWRpdERpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgbm90ZUJ1dHRvbnNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbm90ZUJ1dHRvbnNXcmFwcGVyLmNsYXNzTmFtZSA9IFwibm90ZS1lZGl0LWJ1dHRvbnMtd3JhcHBlclwiO1xuXG4gICAgICAgIG5vdGVCdXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChzYXZlRWRpdEJ1dHRvbik7XG4gICAgICAgIG5vdGVCdXR0b25zV3JhcHBlci5hcHBlbmRDaGlsZChjYW5jZWxFZGl0QnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIG5vdGVFZGl0RGl2LmFwcGVuZENoaWxkKG5vdGVCdXR0b25zV3JhcHBlcik7XG4gICAgICAgIHRvRG9Ob3RlRGl2LmFwcGVuZENoaWxkKG5vdGVFZGl0RGl2KTtcblxuICAgICAgICByZXR1cm4gdG9Eb05vdGVEaXYgICAgICAgIFxuICAgIH07XG4gICAgXG4gICAgY29uc3QgZWRpdE5vdGUgPSAobm90ZURpc3BsYXlEaXYsIG5vdGVFZGl0RGl2LCBub3RlVGV4dEZpZWxkLCBub3RlRWRpdEZpZWxkKSA9PiB7XG4gICAgICAgIGxldCBub3RlQ3VycmVudFRleHQgPSBub3RlVGV4dEZpZWxkLnRleHRDb250ZW50IFxuICAgICAgICBub3RlRGlzcGxheURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNvbnNvbGUubG9nKG5vdGVEaXNwbGF5RGl2KVxuICAgICAgICBcbiAgICAgICAgbm90ZUVkaXRGaWVsZC52YWx1ZSA9IG5vdGVDdXJyZW50VGV4dDtcbiAgICAgICAgbm90ZUVkaXREaXYuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cblxuICAgIHJldHVybiB7bm90ZUNvbnRlbnQsIHJlbmRlck5vdGUsIGVkaXROb3RlfVxuICAgIFxufVxuXG5leHBvcnQgY29uc3QgcHJvamVjdHNDcmVhdG9yID0gKGZvcm1JbnB1dCkgPT4ge1xuICAgIGxldCB0aXRsZSA9IGZvcm1JbnB1dFswXTtcbiAgICBsZXQgcHJpb3JpdHkgPSBmb3JtSW5wdXRbMV07XG4gICAgbGV0IGR1ZURhdGUgPSBmb3JtSW5wdXRbMl07XG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZm9ybUlucHV0WzNdO1xuICAgIGxldCB0b0RvTm90ZXMgPSBbXTtcbiAgICBjb25zdCBhZGRUb0RvTm90ZSA9IChub3RlKSA9PiB0b0RvTm90ZXMucHVzaChub3RlKTtcbiAgICBjb25zdCByZW1vdmVUb0RvTm90ZSA9IChub3RlKSA9PiB0b0RvTm90ZXMuc3BsaWNlKHRvRG9Ob3Rlcy5pbmRleE9mKG5vdGUpLCAxKTtcbiAgICByZXR1cm4ge3RpdGxlLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHRvRG9Ob3RlcywgYWRkVG9Eb05vdGUsIHJlbW92ZVRvRG9Ob3RlfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgW3Byb2plY3QudGl0bGUsIHByb2plY3QucHJpb3JpdHksIHByb2plY3QuZHVlRGF0ZSwgcHJvamVjdC5kZXNjcmlwdGlvbl0gPSBnZXRQcm9qZWN0Rm9ybURhdGEoKTtcbiAgICBjb25zdCBwcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtwcm9qZWN0LmlkfVwiXWApO1xuICAgIGlmICghcHJvamVjdC50aXRsZSkgcHJvamVjdC50aXRsZT1cIkRlZmF1bHQgUHJvamVjdFwiO1xuICAgIHByb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbn1cblxuXG4vLyBjb25zdCByZW5kZXJOb3RlID0gKCkgPT4ge1xuLy8gICAgIGNvbnN0IHRvRG9Ob3RlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vICAgICB0b0RvTm90ZURpdi5jbGFzc05hbWUgPSBcInRvZG8tbm90ZVwiO1xuXG4vLyAgICAgY29uc3Qgbm90ZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4vLyAgICAgY29uc3Qgbm90ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuLy8gICAgIG5vdGVDaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuLy8gICAgIHRvRG9Ob3RlRGl2LmFwcGVuZENoaWxkKG5vdGVDaGVja2JveCk7XG5cblxuXG4vLyAgICAgY29uc3Qgbm90ZUVkaXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbi8vICAgICBub3RlRWRpdEZpZWxkLnR5cGUgPSBcInRleHRcIjtcbi8vICAgICBub3RlRWRpdEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4vLyAgICAgdG9Eb05vdGVEaXYuYXBwZW5kQ2hpbGQobm90ZUVkaXRGaWVsZCk7XG5cbi8vICAgICBjb25zdCBub3RlVGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyAgICAgbm90ZVRleHRGaWVsZC50ZXh0Q29udGVudCA9IG5vdGVDb250ZW50O1xuLy8gICAgIHRvRG9Ob3RlRGl2LmFwcGVuZENoaWxkKG5vdGVUZXh0RmllbGQpO1xuXG4vLyAgICAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIGJ1dHRvbnNXcmFwcGVyLmNsYXNzTmFtZSA9IChcIm5vdGUtYnV0dG9ucy13cmFwcGVyXCIpO1xuXG4vLyAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgICAgZWRpdEJ1dHRvbi5jbGFzc05hbWUgPSBcInRvZG8tZWRpdC1idXR0b25cIjtcbi8vICAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4vLyAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gZWRpdE5vdGUobm90ZVRleHRGaWVsZCwgbm90ZUVkaXRGaWVsZCkpO1xuXG4vLyAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbi8vICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJ0b2RvLWRlbGV0ZS1idXR0b25cIjtcbi8vICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbi8vICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKG5vdGVDb250ZW50KSk7XG4gICAgXG4vLyAgICAgYnV0dG9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4vLyAgICAgYnV0dG9uc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbi8vICAgICB0b0RvTm90ZURpdi5hcHBlbmRDaGlsZChidXR0b25zV3JhcHBlcik7XG5cbi8vICAgICByZXR1cm4gdG9Eb05vdGVEaXYgICAgICAgICIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNMaWJyYXJ5Q3JlYXRvciB9IGZyb20gXCIuL3RvLWRvLmpzXCI7XG5pbXBvcnQgeyBkb21NYW5pcHVsYXRvciB9IGZyb20gXCIuL2RvbS1tYW5pcHVsYXRpb25cIjtcblxuY29uc3QgcHJvamVjdHNMaWJyYXJ5ID0gcHJvamVjdHNMaWJyYXJ5Q3JlYXRvcigpO1xuZG9tTWFuaXB1bGF0b3IuY3JlYXRlUGFnZSgpO1xuZG9tTWFuaXB1bGF0b3IuZ2V0TGlicmFyeShwcm9qZWN0c0xpYnJhcnkpXG4vLyBwcm9qZWN0c0xpYnJhcnkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=