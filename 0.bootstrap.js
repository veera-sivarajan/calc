(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm.js":
/*!**********************!*\
  !*** ../pkg/wasm.js ***!
  \**********************/
/*! exports provided: calculate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bg.wasm */ \"../pkg/wasm_bg.wasm\");\n/* harmony import */ var _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_bg.js */ \"../pkg/wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"calculate\", function() { return _wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"calculate\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm.js?");

/***/ }),

/***/ "../pkg/wasm_bg.js":
/*!*************************!*\
  !*** ../pkg/wasm_bg.js ***!
  \*************************/
/*! exports provided: calculate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculate\", function() { return calculate; });\n/* harmony import */ var _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_bg.wasm */ \"../pkg/wasm_bg.wasm\");\n\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = new Int32Array();\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* @param {string} input\n* @returns {string}\n*/\nfunction calculate(input) {\n    try {\n        const retptr = _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        const ptr0 = passStringToWasm0(input, _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        const len0 = WASM_VECTOR_LEN;\n        _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"calculate\"](retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        _wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../frontend/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_bg.js?");

/***/ }),

/***/ "../pkg/wasm_bg.wasm":
/*!***************************!*\
  !*** ../pkg/wasm_bg.wasm ***!
  \***************************/
/*! exports provided: memory, calculate, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_bg.wasm?");

/***/ }),

/***/ "./main.css":
/*!******************!*\
  !*** ./main.css ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./main.css\");\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./main.css?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! calc */ \"../pkg/wasm.js\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ \"./main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst keys = [\n    ['C', '/', '*', 'AC'],\n    ['7', '8', '9', '-'],\n    ['4', '5', '6', '+'],\n    ['1', '2', '3', 'calc'],\n    ['0', 'E', '.', 'E'],\n];\n\n\nfunction buttonHandler(text) {\n    const display = document.getElementById(\"displayArea\");\n    if (text === 'AC') {\n        display.value = \"\";\n    } else if (text === 'C') {\n        const last_char = display.value[display.value.length - 1];\n        let last_index = display.value.length - 1;\n        if (last_char === ' ') {\n            last_index -= 1;\n        }\n        display.value = display.value.substring(0, last_index);\n    } else if (['+', '-', '*', '/'].includes(text)) {\n        display.value += ' ' + text + ' ';\n    } else if (text === \"calc\") {\n        console.log(\"Evaluating: \", display.value);\n        const output = calc__WEBPACK_IMPORTED_MODULE_0__[\"calculate\"](display.value);\n        console.log(\"Output: \", output);\n        display.value = output;\n    } else {\n        display.value += text;\n    }\n}\n\nconst numRows = 5;\nconst numCols = 4;\nconst grid = document.getElementById(\"keyGrid\");\nfor (let row = 0; row < numRows; ++row) {\n    for (let col = 0; col < numCols; ++col) {\n        if ((row === 4 && col === 1) || (row === 4 && col === 3)) {\n            continue;\n        }\n        const button = document.createElement(\"button\");\n        const text = keys[row][col];\n        button.classList.add(\"button-\" + text);\n        button.appendChild(document.createTextNode(text));\n        button.addEventListener(\"click\", () => { buttonHandler(text) });\n        grid.appendChild(button);\n    }\n}\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./main.css":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./main.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".grid-container {\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-gap: 1px;\\n    width: 700px;\\n    height: 700px;\\n    margin-left: auto;\\n    margin-right: auto;\\n}\\n\\n.button-0 {\\n    grid-column-start: 1;\\n    grid-column-end: 3;\\n}\\n\\n.button-calc {\\n    grid-row-start: 4;\\n    grid-row-end: 6;\\n    grid-column-start: 4;\\n}\\n\\n.display {\\n    display: block;\\n    margin-right: auto;\\n    margin-left: auto;\\n    width: 700px;\\n    height: 150px;\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./main.css?./node_modules/css-loader/dist/cjs.js");

/***/ })

}]);