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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/Layout/Layout */ \"./component/Layout/Layout.js\");\n/* harmony import */ var _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/arrowRight.png */ \"./assets/arrowRight.png\");\n/* harmony import */ var _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/arrowLeft.png */ \"./assets/arrowLeft.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { products  } = param;\n    _s();\n    // console.log(products,'products')\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleQuantity = (type)=>{\n        type === \"inc\" ? setQuantity((prev)=>prev + 1) : quantity === 0 ? null : setQuantity((prev)=>prev - 1);\n    };\n    const addToCart = ()=>{\n        const productData = {\n            image: products.thumbnail,\n            title: products.title,\n            description: products.description,\n            price: products.price,\n            quantity: quantity\n        };\n        console.log(productData, \"productData\");\n        localStorage.setItem(\"addTocart\", productData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"product-details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-img\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: products.thumbnail,\n                            alt: \"productImage\",\n                            width: 400,\n                            height: 400\n                        }, void 0, false, {\n                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                            lineNumber: 38,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 37,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: products.title\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 43,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: products.description\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Price :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 45,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 45,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"DiscountPercentage :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 46,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.discountPercentage\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Rating :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 47,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.rating\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Stock :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 48,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.stock\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"counter-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Quantity :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 50,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"counter-arrow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                                    alt: \"Left Arrow\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    objectFit: \"contain\",\n                                                    onClick: ()=>handleQuantity(\"dec\")\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 52,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: quantity\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 55,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                    alt: \"Left Arrow\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    objectFit: \"contain\",\n                                                    onClick: ()=>handleQuantity(\"inc\")\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 57,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 56,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 51,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"add-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: addToCart,\n                                    children: \"Add To Cart\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 61,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 42,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductDetails, \"kld5oo75wokKOClTKDqtGCvvDB8=\");\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDTjtBQUNnQjtBQUNNO0FBQ0Y7QUFJbEQsTUFBTU0saUJBQWlCLFNBQWdCO1FBQWYsRUFBQ0MsU0FBUSxFQUFDOztJQUNoQyxtQ0FBbUM7SUFDbkMsTUFBTSxDQUFDQyxVQUFTQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO0lBRXhDLE1BQU1TLGlCQUFpQixDQUFDQyxPQUFTO1FBQy9CQSxTQUFTLFFBQ1RGLFlBQVksQ0FBQ0csT0FBU0EsT0FBTyxLQUMzQkosYUFBYSxJQUFJLElBQUksR0FDckJDLFlBQVksQ0FBQ0csT0FBUUEsT0FBTyxFQUFFO0lBQ2xDO0lBRUEsTUFBTUMsWUFBWSxJQUFNO1FBRXRCLE1BQU1DLGNBQWM7WUFDbEJDLE9BQU1SLFNBQVNTLFNBQVM7WUFDeEJDLE9BQU1WLFNBQVNVLEtBQUs7WUFDcEJDLGFBQVlYLFNBQVNXLFdBQVc7WUFDaENDLE9BQU1aLFNBQVNZLEtBQUs7WUFDcEJYLFVBQVNBO1FBQ1g7UUFDQVksUUFBUUMsR0FBRyxDQUFDUCxhQUFZO1FBQ3hCUSxhQUFhQyxPQUFPLENBQUMsYUFBWVQ7SUFDbkM7SUFFQSxxQkFDRSw4REFBQ1gsZ0VBQU1BO2tCQUNMLDRFQUFDcUI7WUFBUUMsV0FBVTs7OEJBQ2YsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWCw0RUFBQ3ZCLG1EQUFLQTs0QkFBQ3lCLEtBQUtwQixTQUFTUyxTQUFTOzRCQUFFWSxLQUFJOzRCQUFlQyxPQUFPOzRCQUFLQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OzhCQUcvRSw4REFBQ0o7b0JBQUlELFdBQVU7OEJBQ1gsNEVBQUNDO3dCQUFJRCxXQUFVOzswQ0FDYiw4REFBQ007MENBQUl4QixTQUFTVSxLQUFLOzs7Ozs7MENBQ25CLDhEQUFDZTswQ0FBSXpCLFNBQVNXLFdBQVc7Ozs7OzswQ0FDekIsOERBQUNlOztrREFBRSw4REFBQ0M7a0RBQUU7Ozs7OztvQ0FBWTtvQ0FBRTNCLFNBQVNZLEtBQUs7Ozs7Ozs7MENBQ2xDLDhEQUFDYzs7a0RBQUUsOERBQUNDO2tEQUFFOzs7Ozs7b0NBQXlCO29DQUFFM0IsU0FBUzRCLGtCQUFrQjs7Ozs7OzswQ0FDNUQsOERBQUNGOztrREFBRSw4REFBQ0M7a0RBQUU7Ozs7OztvQ0FBYTtvQ0FBRTNCLFNBQVM2QixNQUFNOzs7Ozs7OzBDQUNwQyw4REFBQ0g7O2tEQUFFLDhEQUFDQztrREFBRTs7Ozs7O29DQUFZO29DQUFFM0IsU0FBUzhCLEtBQUs7Ozs7Ozs7MENBQ2xDLDhEQUFDWDtnQ0FBSUQsV0FBVTs7a0RBQ2IsOERBQUNhO2tEQUFNOzs7Ozs7a0RBQ1AsOERBQUNaO3dDQUFJRCxXQUFVOzswREFDWCw4REFBQ0M7Z0RBQUlELFdBQVU7MERBQ1gsNEVBQUN2QixtREFBS0E7b0RBQUN5QixLQUFLdEIsNkRBQVNBO29EQUFFdUIsS0FBSTtvREFBYUMsT0FBTztvREFBSUMsUUFBUTtvREFBSVMsV0FBVTtvREFBVUMsU0FBUyxJQUFJOUIsZUFBZTs7Ozs7Ozs7Ozs7MERBRW5ILDhEQUFDK0I7MERBQU1qQzs7Ozs7OzBEQUNQLDhEQUFDa0I7Z0RBQUlELFdBQVU7MERBQ1gsNEVBQUN2QixtREFBS0E7b0RBQUN5QixLQUFLdkIsOERBQVVBO29EQUFFd0IsS0FBSTtvREFBYUMsT0FBTztvREFBSUMsUUFBUTtvREFBSVMsV0FBVTtvREFBVUMsU0FBUyxJQUFJOUIsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSTFILDhEQUFDZ0I7Z0NBQUlELFdBQVU7MENBQ2IsNEVBQUNpQjtvQ0FBT0YsU0FBUzNCOzhDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUM7R0E1RE1QO0tBQUFBOztBQThETiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz9kYjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50L0xheW91dC9MYXlvdXQnXG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3dSaWdodC5wbmcnXG5pbXBvcnQgTGVmdEFycm93IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvd0xlZnQucG5nJ1xuaW1wb3J0IE1PQ0tfREFUQSBmcm9tICcuLi8uLi9jb21wb25lbnQvTU9DS19EQVRBLmpzb24nXG5cblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhwcm9kdWN0cywncHJvZHVjdHMnKVxuICBjb25zdCBbcXVhbnRpdHksc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMCkgICBcblxuICBjb25zdCBoYW5kbGVRdWFudGl0eSA9ICh0eXBlKSA9PiB7XG4gICAgdHlwZSA9PT0gJ2luYycgP1xuICAgIHNldFF1YW50aXR5KChwcmV2KSA9PiBwcmV2ICsgMSkgXG4gICAgOiBxdWFudGl0eSA9PT0gMCA/IG51bGwgXG4gICAgOiBzZXRRdWFudGl0eSgocHJldik9PiBwcmV2IC0gMSlcbiAgfVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9ICgpID0+IHtcbiAgIFxuICAgIGNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgICAgaW1hZ2U6cHJvZHVjdHMudGh1bWJuYWlsLFxuICAgICAgdGl0bGU6cHJvZHVjdHMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjpwcm9kdWN0cy5kZXNjcmlwdGlvbixcbiAgICAgIHByaWNlOnByb2R1Y3RzLnByaWNlLCAgICAgICAgICAgICAgICAgXG4gICAgICBxdWFudGl0eTpxdWFudGl0eVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0RGF0YSwncHJvZHVjdERhdGEnKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZGRUb2NhcnQnLHByb2R1Y3REYXRhKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdwcm9kdWN0LWRldGFpbHMnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNTAnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1kZXRhaWwtaW1nJz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3RzLnRodW1ibmFpbH0gYWx0PVwicHJvZHVjdEltYWdlXCIgd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtNTAnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJvZHVjdC1pbmZvJz5cbiAgICAgICAgICAgICAgICA8aDI+e3Byb2R1Y3RzLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgPGgzPntwcm9kdWN0cy5kZXNjcmlwdGlvbn08L2gzPlxuICAgICAgICAgICAgICAgIDxwPjxiPlByaWNlIDotPC9iPiB7cHJvZHVjdHMucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxiPkRpc2NvdW50UGVyY2VudGFnZSA6LTwvYj4ge3Byb2R1Y3RzLmRpc2NvdW50UGVyY2VudGFnZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+PGI+UmF0aW5nIDotPC9iPiB7cHJvZHVjdHMucmF0aW5nfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48Yj5TdG9jayA6LTwvYj4ge3Byb2R1Y3RzLnN0b2NrfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY291bnRlci1yb3cnPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlF1YW50aXR5IDotPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3VudGVyLWFycm93Jz4gICBcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xlZnRBcnJvd30gYWx0PVwiTGVmdCBBcnJvd1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIG9uQ2xpY2s9eygpPT5oYW5kbGVRdWFudGl0eShcImRlY1wiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3F1YW50aXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naWNvbic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1JpZ2h0QXJyb3d9IGFsdD1cIkxlZnQgQXJyb3dcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiBvbkNsaWNrPXsoKT0+aGFuZGxlUXVhbnRpdHkoXCJpbmNcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkLWJ0bic+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFRvQ2FydH0+QWRkIFRvIENhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHNcblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xuXG4gIGNvbnN0IHByb2R1Y3RJZCA9ICtjb250ZXh0LnBhcmFtcy5zbHVnXG5cbiAgY29uc3QgcHJvZHVjdCA9IE1PQ0tfREFUQS5wcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0SWQgPT09IHByb2R1Y3QuaWQpWzBdXG5cbiAgY29uc29sZS5sb2cocHJvZHVjdCwncHJvZHVjdCcpXG5cbiAgcmV0dXJue1xuICAgICAgcHJvcHM6e1xuICAgICAgICAgIHByb2R1Y3RzIDogcHJvZHVjdFxuICAgICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxheW91dCIsIlJpZ2h0QXJyb3ciLCJMZWZ0QXJyb3ciLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3RzIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImhhbmRsZVF1YW50aXR5IiwidHlwZSIsInByZXYiLCJhZGRUb0NhcnQiLCJwcm9kdWN0RGF0YSIsImltYWdlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsImgzIiwicCIsImIiLCJkaXNjb3VudFBlcmNlbnRhZ2UiLCJyYXRpbmciLCJzdG9jayIsImxhYmVsIiwib2JqZWN0Rml0Iiwib25DbGljayIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});