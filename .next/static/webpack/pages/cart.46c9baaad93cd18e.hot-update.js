"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./component/cart/CartLayout.js":
/*!**************************************!*\
  !*** ./component/cart/CartLayout.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CartLayout = ()=>{\n    _s();\n    const [localFetchData, setLocalFetchData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    useEffect(()=>{\n        const localFetchData = JSON.parse(window.localStorage.getItem(\"addTocart\"));\n        // console.log(localFetchData,'localfetchData')\n        if (localFetchData !== null) {\n            setLocalFetchData(localFetchData);\n        }\n        window.localStorage.setItem(\"addTocart\", JSON.stringify(CartData));\n    }, [\n        CartData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"cart-layout\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-65\"\n            }, void 0, false, {\n                fileName: \"/home/sameer/projects/demo/todo-nextjs/component/cart/CartLayout.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-35\"\n            }, void 0, false, {\n                fileName: \"/home/sameer/projects/demo/todo-nextjs/component/cart/CartLayout.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sameer/projects/demo/todo-nextjs/component/cart/CartLayout.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CartLayout, \"Hhw+OrA7Bq3DkcmU7rPjOKTlPgs=\");\n_c = CartLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartLayout);\nvar _c;\n$RefreshReg$(_c, \"CartLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvY2FydC9DYXJ0TGF5b3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBb0M7QUFFcEMsTUFBTUUsYUFBYSxJQUFNOztJQUNyQixNQUFNLENBQUNDLGdCQUFlQyxrQkFBa0IsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUV0REksVUFBVSxJQUFNO1FBQ1osTUFBTUYsaUJBQWlCRyxLQUFLQyxLQUFLLENBQUNDLE9BQU9DLFlBQVksQ0FBQ0MsT0FBTyxDQUFDO1FBQzlELCtDQUErQztRQUMvQyxJQUFJUCxtQkFBbUIsSUFBSSxFQUFFO1lBQzNCQyxrQkFBa0JEO1FBQ3BCLENBQUM7UUFDRkssT0FBT0MsWUFBWSxDQUFDRSxPQUFPLENBQUMsYUFBYUwsS0FBS00sU0FBUyxDQUFDQztJQUUzRCxHQUFHO1FBQUNBO0tBQVM7SUFHZixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBQ2YsOERBQUNDO2dCQUFJRCxXQUFVOzs7Ozs7MEJBR2YsOERBQUNDO2dCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7QUFLdkI7R0F4Qk1iO0tBQUFBO0FBMEJOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudC9jYXJ0L0NhcnRMYXlvdXQuanM/ODg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ2FydExheW91dCA9ICgpID0+IHtcbiAgICBjb25zdCBbbG9jYWxGZXRjaERhdGEsc2V0TG9jYWxGZXRjaERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4geyAgIFxuICAgICAgICBjb25zdCBsb2NhbEZldGNoRGF0YSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhZGRUb2NhcnQnKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsRmV0Y2hEYXRhLCdsb2NhbGZldGNoRGF0YScpXG4gICAgICAgIGlmIChsb2NhbEZldGNoRGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgIHNldExvY2FsRmV0Y2hEYXRhKGxvY2FsRmV0Y2hEYXRhKTtcbiAgICAgICAgfVxuICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWRkVG9jYXJ0JywgSlNPTi5zdHJpbmdpZnkoQ2FydERhdGEpKTsgICAgICAgXG4gICAgICAgXG4gICAgfSwgW0NhcnREYXRhXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY2FydC1sYXlvdXQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTY1Jz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0zNSc+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRMYXlvdXQiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcnRMYXlvdXQiLCJsb2NhbEZldGNoRGF0YSIsInNldExvY2FsRmV0Y2hEYXRhIiwidXNlRWZmZWN0IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJDYXJ0RGF0YSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/cart/CartLayout.js\n"));

/***/ })

});