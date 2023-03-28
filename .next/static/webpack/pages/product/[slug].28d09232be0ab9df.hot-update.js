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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/Layout/Layout */ \"./component/Layout/Layout.js\");\n/* harmony import */ var _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/arrowRight.png */ \"./assets/arrowRight.png\");\n/* harmony import */ var _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/arrowLeft.png */ \"./assets/arrowLeft.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { products  } = param;\n    _s();\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [prevData, setPrevData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleQuantity = (type)=>{\n        type === \"inc\" ? setQuantity((prev)=>prev + 1) : quantity === 0 ? null : setQuantity((prev)=>prev - 1);\n    };\n    const validationHandler = ()=>{\n        if (quantity === 0) {\n            setError({\n                message: \"Please choose Quantity\",\n                state: 0\n            });\n        } else {\n            setError({\n                message: \"SuccessFully Added\",\n                state: 1\n            });\n        }\n    };\n    const addToCart = ()=>{\n        validationHandler();\n        const productData = {\n            id: products.id,\n            image: products.thumbnail,\n            title: products.title,\n            description: products.description,\n            price: products.price,\n            quantity: quantity\n        };\n        localStorage.setItem(\"addTocart\", JSON.stringify([\n            ...prevData,\n            productData\n        ]));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if ( true && localStorage.getItem(\"addTocart\")) {\n            setPrevData(JSON.parse(localStorage.getItem(\"addTocart\")));\n            console.log(prevData, \"prevData\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"heading pt-[30px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Product Details\"\n                    }, void 0, false, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                    lineNumber: 57,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"product-details\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"product-detail-img\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: products.thumbnail,\n                                    alt: \"productImage\",\n                                    width: 400,\n                                    height: 400\n                                }, void 0, false, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 63,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col-50\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"product-info\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: products.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: products.description\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Price :-\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 70,\n                                                columnNumber: 20\n                                            }, undefined),\n                                            \" \",\n                                            products.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"DiscountPercentage :-\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 71,\n                                                columnNumber: 20\n                                            }, undefined),\n                                            \" \",\n                                            products.discountPercentage\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Rating :-\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 72,\n                                                columnNumber: 20\n                                            }, undefined),\n                                            \" \",\n                                            products.rating\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 72,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                                children: \"Stock :-\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 73,\n                                                columnNumber: 20\n                                            }, undefined),\n                                            \" \",\n                                            products.stock\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"counter-row\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                children: \"Quantity :-\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 75,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"counter-arrow\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"icon\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            src: _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                                            alt: \"Left Arrow\",\n                                                            width: 20,\n                                                            height: 20,\n                                                            objectFit: \"contain\",\n                                                            onClick: ()=>handleQuantity(\"dec\")\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        children: quantity\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 23\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"icon\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                            src: _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                            alt: \"Left Arrow\",\n                                                            width: 20,\n                                                            height: 20,\n                                                            objectFit: \"contain\",\n                                                            onClick: ()=>handleQuantity(\"inc\")\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                            lineNumber: 82,\n                                                            columnNumber: 27\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"add-btn\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: addToCart,\n                                            children: \"Add To Cart\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 86,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"error-row\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"\".concat(error.state === 1 ? \"text-green-500\" : \"text-red-500\"),\n                                            children: error.message\n                                        }, void 0, false, {\n                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 89,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                    lineNumber: 60,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n            lineNumber: 56,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductDetails, \"sBhqAZUzEgbuZnryr9u5PaptFqc=\");\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNEO3dEQUFJQyxXQUFVO2tFQUNYLDRFQUFDbkMsbURBQUtBOzREQUFDc0MsS0FBS25DLDZEQUFTQTs0REFBRW9DLEtBQUk7NERBQWFDLE9BQU87NERBQUlDLFFBQVE7NERBQUlRLFdBQVU7NERBQVVDLFNBQVMsSUFBSXRDLGVBQWU7Ozs7Ozs7Ozs7O2tFQUVuSCw4REFBQ3VDO2tFQUFNN0M7Ozs7OztrRUFDUCw4REFBQzRCO3dEQUFJQyxXQUFVO2tFQUNYLDRFQUFDbkMsbURBQUtBOzREQUFDc0MsS0FBS3BDLDhEQUFVQTs0REFBRXFDLEtBQUk7NERBQWFDLE9BQU87NERBQUlDLFFBQVE7NERBQUlRLFdBQVU7NERBQVVDLFNBQVMsSUFBSXRDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUkxSCw4REFBQ3NCO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDaUI7NENBQU9GLFNBQVNoQztzREFBVzs7Ozs7Ozs7Ozs7a0RBRTlCLDhEQUFDZ0I7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNROzRDQUFFUixXQUFXLEdBQXlELE9BQXREM0IsTUFBTVMsS0FBSyxLQUFLLElBQUksbUJBQW1CLGNBQWM7c0RBQUtULE1BQU1RLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExRztHQXpGTVo7S0FBQUE7O0FBMkZOLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50L0xheW91dC9MYXlvdXQnXG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3dSaWdodC5wbmcnXG5pbXBvcnQgTGVmdEFycm93IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvd0xlZnQucG5nJ1xuaW1wb3J0IE1PQ0tfREFUQSBmcm9tICcuLi8uLi9jb21wb25lbnQvTU9DS19EQVRBLmpzb24nXG5cblxuY29uc3QgUHJvZHVjdERldGFpbHMgPSAoe3Byb2R1Y3RzfSkgPT4ge1xuICBjb25zdCBbcXVhbnRpdHksc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMCkgICBcbiAgY29uc3QgW2Vycm9yLHNldEVycm9yXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcHJldkRhdGEsc2V0UHJldkRhdGFdID0gdXNlU3RhdGUoW10pXG4gIFxuXG4gIGNvbnN0IGhhbmRsZVF1YW50aXR5ID0gKHR5cGUpID0+IHtcbiAgICB0eXBlID09PSAnaW5jJyA/XG4gICAgc2V0UXVhbnRpdHkoKHByZXYpID0+IHByZXYgKyAxKSBcbiAgICA6IHF1YW50aXR5ID09PSAwID8gbnVsbCBcbiAgICA6IHNldFF1YW50aXR5KChwcmV2KT0+IHByZXYgLSAxKVxuICB9XG5cbiAgY29uc3QgdmFsaWRhdGlvbkhhbmRsZXIgPSAoKSA9PntcbiAgICBpZihxdWFudGl0eSA9PT0gMCl7XG4gICAgICBzZXRFcnJvciAoe21lc3NhZ2U6J1BsZWFzZSBjaG9vc2UgUXVhbnRpdHknLHN0YXRlOjB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcih7bWVzc2FnZTonU3VjY2Vzc0Z1bGx5IEFkZGVkJyxzdGF0ZToxfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCBhZGRUb0NhcnQgPSAoKSA9PiB7XG5cbiAgICB2YWxpZGF0aW9uSGFuZGxlcigpXG5cbiAgICBjb25zdCBwcm9kdWN0RGF0YSA9IHtcbiAgICAgIGlkOnByb2R1Y3RzLmlkLFxuICAgICAgaW1hZ2U6cHJvZHVjdHMudGh1bWJuYWlsLFxuICAgICAgdGl0bGU6cHJvZHVjdHMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjpwcm9kdWN0cy5kZXNjcmlwdGlvbixcbiAgICAgIHByaWNlOnByb2R1Y3RzLnByaWNlLCAgICAgICAgICAgICAgICAgXG4gICAgICBxdWFudGl0eTpxdWFudGl0eVxuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZGRUb2NhcnQnLEpTT04uc3RyaW5naWZ5KFsuLi5wcmV2RGF0YSxwcm9kdWN0RGF0YV0pKVxuXG4gIH1cblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhZGRUb2NhcnQnKSl7XG4gICAgICBzZXRQcmV2RGF0YShKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhZGRUb2NhcnQnKSkpXG4gICAgICBjb25zb2xlLmxvZyhwcmV2RGF0YSwncHJldkRhdGEnKSAgICAgXG4gICAgfVxuICB9LFtdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21haW4td3JhcHBlcic+XG4gICAgPExheW91dD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0naGVhZGluZyBwdC1bMzBweF0nPlxuICAgICAgICA8aDI+UHJvZHVjdCBEZXRhaWxzPC9oMj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvZHVjdC1kZXRhaWxzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTUwJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGV0YWlsLWltZyc+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0cy50aHVtYm5haWx9IGFsdD1cInByb2R1Y3RJbWFnZVwiIHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTUwJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5mbyc+XG4gICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0cy50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMz57cHJvZHVjdHMuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8cD48Yj5QcmljZSA6LTwvYj4ge3Byb2R1Y3RzLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48Yj5EaXNjb3VudFBlcmNlbnRhZ2UgOi08L2I+IHtwcm9kdWN0cy5kaXNjb3VudFBlcmNlbnRhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxiPlJhdGluZyA6LTwvYj4ge3Byb2R1Y3RzLnJhdGluZ308L3A+XG4gICAgICAgICAgICAgICAgPHA+PGI+U3RvY2sgOi08L2I+IHtwcm9kdWN0cy5zdG9ja308L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdW50ZXItcm93Jz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWFudGl0eSA6LTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY291bnRlci1hcnJvdyc+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMZWZ0QXJyb3d9IGFsdD1cIkxlZnQgQXJyb3dcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiBvbkNsaWNrPXsoKT0+aGFuZGxlUXVhbnRpdHkoXCJkZWNcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntxdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtSaWdodEFycm93fSBhbHQ9XCJMZWZ0IEFycm93XCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgb25DbGljaz17KCk9PmhhbmRsZVF1YW50aXR5KFwiaW5jXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FkZC1idG4nPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb0NhcnR9PkFkZCBUbyBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Vycm9yLXJvdyc+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2Vycm9yLnN0YXRlID09PSAxID8gJ3RleHQtZ3JlZW4tNTAwJyA6ICd0ZXh0LXJlZC01MDAnfWB9PntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHNcblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xuXG4gIGNvbnN0IHByb2R1Y3RJZCA9ICtjb250ZXh0LnBhcmFtcy5zbHVnXG5cbiAgY29uc3QgcHJvZHVjdCA9IE1PQ0tfREFUQS5wcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0SWQgPT09IHByb2R1Y3QuaWQpWzBdXG5cbiAgLy8gY29uc29sZS5sb2cocHJvZHVjdCwncHJvZHVjdCcpXG5cbiAgcmV0dXJue1xuICAgICAgcHJvcHM6e1xuICAgICAgICAgIHByb2R1Y3RzIDogcHJvZHVjdFxuICAgICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkxheW91dCIsIlJpZ2h0QXJyb3ciLCJMZWZ0QXJyb3ciLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3RzIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImVycm9yIiwic2V0RXJyb3IiLCJwcmV2RGF0YSIsInNldFByZXZEYXRhIiwiaGFuZGxlUXVhbnRpdHkiLCJ0eXBlIiwicHJldiIsInZhbGlkYXRpb25IYW5kbGVyIiwibWVzc2FnZSIsInN0YXRlIiwiYWRkVG9DYXJ0IiwicHJvZHVjdERhdGEiLCJpZCIsImltYWdlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJdGVtIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMyIsInAiLCJiIiwiZGlzY291bnRQZXJjZW50YWdlIiwicmF0aW5nIiwic3RvY2siLCJsYWJlbCIsIm9iamVjdEZpdCIsIm9uQ2xpY2siLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});