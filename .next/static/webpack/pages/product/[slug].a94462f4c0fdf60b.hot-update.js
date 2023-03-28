"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/Layout/Layout */ \"./component/Layout/Layout.js\");\n/* harmony import */ var _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/arrowRight.png */ \"./assets/arrowRight.png\");\n/* harmony import */ var _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/arrowLeft.png */ \"./assets/arrowLeft.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { products  } = param;\n    _s();\n    console.log(products, \"products\");\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleQuantity = (type)=>{\n        type === \"inc\" ? setQuantity((prev)=>prev + 1) : Quantity === 0 ? null : setQuantity((prev)=>prev - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"product-details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-img\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: products.thumbnail,\n                            alt: \"productImage\",\n                            width: 400,\n                            height: 400\n                        }, void 0, false, {\n                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                            lineNumber: 24,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 23,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: products.title\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: products.description\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Price :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 31,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"DiscountPercentage :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 32,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.discountPercentage\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Rating :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 33,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.rating\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 33,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Stock :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 34,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.stock\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"counter-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Quantity\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 36,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"counter-arrow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                                    alt: \"Left Arrow\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    objectFit: \"contain\",\n                                                    onClick: ()=>handleQuantity(\"dec\")\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 39,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 38,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: quantity\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 41,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                    alt: \"Left Arrow\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    objectFit: \"contain\",\n                                                    onClick: ()=>handleQuantity(\"inc\")\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 43,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 42,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 37,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"add-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"Add To Cart\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 48,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductDetails, \"kld5oo75wokKOClTKDqtGCvvDB8=\");\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDTjtBQUNnQjtBQUNNO0FBQ0Y7QUFHbEQsTUFBTU0saUJBQWlCLFNBQWdCO1FBQWYsRUFBQ0MsU0FBUSxFQUFDOztJQUNoQ0MsUUFBUUMsR0FBRyxDQUFDRixVQUFTO0lBQ3JCLE1BQU0sQ0FBQ0csVUFBU0MsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUV4QyxNQUFNVyxpQkFBaUIsQ0FBQ0MsT0FBUztRQUMvQkEsU0FBUyxRQUNURixZQUFZLENBQUNHLE9BQVNBLE9BQU8sS0FDM0JDLGFBQWEsSUFBSSxJQUFJLEdBQ3JCSixZQUFZLENBQUNHLE9BQVFBLE9BQU8sRUFBRTtJQUNwQztJQUVFLHFCQUNFLDhEQUFDWCxnRUFBTUE7a0JBQ0wsNEVBQUNhO1lBQVFDLFdBQVU7OzhCQUNmLDhEQUFDQztvQkFBSUQsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNmLG1EQUFLQTs0QkFBQ2lCLEtBQUtaLFNBQVNhLFNBQVM7NEJBQUVDLEtBQUk7NEJBQWVDLE9BQU87NEJBQUtDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRy9FLDhEQUFDTDtvQkFBSUQsV0FBVTs4QkFDWCw0RUFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDTzswQ0FBSWpCLFNBQVNrQixLQUFLOzs7Ozs7MENBQ25CLDhEQUFDQzswQ0FBSW5CLFNBQVNvQixXQUFXOzs7Ozs7MENBQ3pCLDhEQUFDQzs7a0RBQUUsOERBQUNDO2tEQUFFOzs7Ozs7b0NBQVk7b0NBQUV0QixTQUFTdUIsS0FBSzs7Ozs7OzswQ0FDbEMsOERBQUNGOztrREFBRSw4REFBQ0M7a0RBQUU7Ozs7OztvQ0FBeUI7b0NBQUV0QixTQUFTd0Isa0JBQWtCOzs7Ozs7OzBDQUM1RCw4REFBQ0g7O2tEQUFFLDhEQUFDQztrREFBRTs7Ozs7O29DQUFhO29DQUFFdEIsU0FBU3lCLE1BQU07Ozs7Ozs7MENBQ3BDLDhEQUFDSjs7a0RBQUUsOERBQUNDO2tEQUFFOzs7Ozs7b0NBQVk7b0NBQUV0QixTQUFTMEIsS0FBSzs7Ozs7OzswQ0FDbEMsOERBQUNmO2dDQUFJRCxXQUFVOztrREFDYiw4REFBQ2lCO2tEQUFNOzs7Ozs7a0RBQ1AsOERBQUNoQjt3Q0FBSUQsV0FBVTs7MERBQ1gsOERBQUNDO2dEQUFJRCxXQUFVOzBEQUNYLDRFQUFDZixtREFBS0E7b0RBQUNpQixLQUFLZCw2REFBU0E7b0RBQUVnQixLQUFJO29EQUFhQyxPQUFPO29EQUFJQyxRQUFRO29EQUFJWSxXQUFVO29EQUFVQyxTQUFTLElBQUl4QixlQUFlOzs7Ozs7Ozs7OzswREFFbkgsOERBQUN5QjswREFBTTNCOzs7Ozs7MERBQ1AsOERBQUNRO2dEQUFJRCxXQUFVOzBEQUNYLDRFQUFDZixtREFBS0E7b0RBQUNpQixLQUFLZiw4REFBVUE7b0RBQUVpQixLQUFJO29EQUFhQyxPQUFPO29EQUFJQyxRQUFRO29EQUFJWSxXQUFVO29EQUFVQyxTQUFTLElBQUl4QixlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJMUgsOERBQUNNO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDcUI7OENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQjtHQS9DTWhDO0tBQUFBOztBQWlETiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz9kYjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50L0xheW91dC9MYXlvdXQnXG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3dSaWdodC5wbmcnXG5pbXBvcnQgTGVmdEFycm93IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvd0xlZnQucG5nJ1xuXG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHtwcm9kdWN0c30pID0+IHtcbiAgY29uc29sZS5sb2cocHJvZHVjdHMsJ3Byb2R1Y3RzJylcbiAgY29uc3QgW3F1YW50aXR5LHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDApICAgXG5cbiAgY29uc3QgaGFuZGxlUXVhbnRpdHkgPSAodHlwZSkgPT4ge1xuICAgIHR5cGUgPT09ICdpbmMnID9cbiAgICBzZXRRdWFudGl0eSgocHJldikgPT4gcHJldiArIDEpIFxuICAgIDogUXVhbnRpdHkgPT09IDAgPyBudWxsIFxuICAgIDogc2V0UXVhbnRpdHkoKHByZXYpPT4gcHJldiAtIDEpXG59XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9kdWN0LWRldGFpbHMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNTAnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1kZXRhaWwtaW1nJz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3RzLnRodW1ibmFpbH0gYWx0PVwicHJvZHVjdEltYWdlXCIgd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNTAnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvJz5cbiAgICAgICAgICAgICAgICA8aDI+e3Byb2R1Y3RzLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0cy5kZXNjcmlwdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgIDxwPjxiPlByaWNlIDotPC9iPiB7cHJvZHVjdHMucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxiPkRpc2NvdW50UGVyY2VudGFnZSA6LTwvYj4ge3Byb2R1Y3RzLmRpc2NvdW50UGVyY2VudGFnZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+PGI+UmF0aW5nIDotPC9iPiB7cHJvZHVjdHMucmF0aW5nfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48Yj5TdG9jayA6LTwvYj4ge3Byb2R1Y3RzLnN0b2NrfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY291bnRlci1yb3cnPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlF1YW50aXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3VudGVyLWFycm93Jz4gICBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xlZnRBcnJvd30gYWx0PVwiTGVmdCBBcnJvd1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIG9uQ2xpY2s9eygpPT5oYW5kbGVRdWFudGl0eShcImRlY1wiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3F1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1JpZ2h0QXJyb3d9IGFsdD1cIkxlZnQgQXJyb3dcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiBvbkNsaWNrPXsoKT0+aGFuZGxlUXVhbnRpdHkoXCJpbmNcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkLWJ0bic+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uPkFkZCBUbyBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzXG5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PntcblxuICBjb25zdCBwcm9kdWN0SWQgPSArY29udGV4dC5wYXJhbXMuc2x1Z1xuXG4gIGNvbnN0IHByb2R1Y3QgPSBNT0NLX0RBVEEucHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdElkID09PSBwcm9kdWN0LmlkKVswXVxuXG4gIGNvbnNvbGUubG9nKHByb2R1Y3QsJ3Byb2R1Y3QnKVxuXG4gIHJldHVybntcbiAgICAgIHByb3BzOntcbiAgICAgICAgICBwcm9kdWN0cyA6IHByb2R1Y3RcbiAgICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJMYXlvdXQiLCJSaWdodEFycm93IiwiTGVmdEFycm93IiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiaGFuZGxlUXVhbnRpdHkiLCJ0eXBlIiwicHJldiIsIlF1YW50aXR5Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsInRodW1ibmFpbCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJ0aXRsZSIsImgzIiwiZGVzY3JpcHRpb24iLCJwIiwiYiIsInByaWNlIiwiZGlzY291bnRQZXJjZW50YWdlIiwicmF0aW5nIiwic3RvY2siLCJsYWJlbCIsIm9iamVjdEZpdCIsIm9uQ2xpY2siLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});