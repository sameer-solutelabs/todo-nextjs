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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/Layout/Layout */ \"./component/Layout/Layout.js\");\n/* harmony import */ var _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/arrowRight.png */ \"./assets/arrowRight.png\");\n/* harmony import */ var _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/arrowLeft.png */ \"./assets/arrowLeft.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { products  } = param;\n    _s();\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleQuantity = (type)=>{\n        type === \"inc\" ? setQuantity((prev)=>prev + 1) : quantity === 0 ? null : setQuantity((prev)=>prev - 1);\n    };\n    const validationHandler = ()=>{\n        if (quantity === 0) {\n            setError({\n                message: \"Please choose Quantity\",\n                state: 0\n            });\n        } else {\n            setError({\n                message: \"SuccessFully Added\",\n                state: 1\n            });\n        }\n    };\n    const addToCart = ()=>{\n        validationHandler();\n        const productData = {\n            image: products.thumbnail,\n            title: products.title,\n            description: products.description,\n            price: products.price,\n            quantity: quantity\n        };\n        const prevData = JSON.parse(localStorage.getItem(\"addTocart\"));\n        console.log(prevData, \"prevData\");\n        localStorage.setItem(\"addTocart\", JSON.stringify([\n            ...prevData,\n            productData\n        ]));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-wrapper\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"product-details\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"product-detail-img\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: products.thumbnail,\n                                alt: \"productImage\",\n                                width: 400,\n                                height: 400\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 51,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-50\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"product-info\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: products.title\n                                }, void 0, false, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: products.description\n                                }, void 0, false, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Price :-\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                            lineNumber: 58,\n                                            columnNumber: 20\n                                        }, undefined),\n                                        \" \",\n                                        products.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 58,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"DiscountPercentage :-\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                            lineNumber: 59,\n                                            columnNumber: 20\n                                        }, undefined),\n                                        \" \",\n                                        products.discountPercentage\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Rating :-\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                            lineNumber: 60,\n                                            columnNumber: 20\n                                        }, undefined),\n                                        \" \",\n                                        products.rating\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                            children: \"Stock :-\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                            lineNumber: 61,\n                                            columnNumber: 20\n                                        }, undefined),\n                                        \" \",\n                                        products.stock\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 61,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"counter-row\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Quantity :-\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"counter-arrow\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"icon\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                                        alt: \"Left Arrow\",\n                                                        width: 20,\n                                                        height: 20,\n                                                        objectFit: \"contain\",\n                                                        onClick: ()=>handleQuantity(\"dec\")\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: quantity\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 23\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"icon\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        src: _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                        alt: \"Left Arrow\",\n                                                        width: 20,\n                                                        height: 20,\n                                                        objectFit: \"contain\",\n                                                        onClick: ()=>handleQuantity(\"inc\")\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                        lineNumber: 70,\n                                                        columnNumber: 27\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 69,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"add-btn\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: addToCart,\n                                        children: \"Add To Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"\".concat(error.state === 1 ? \"text-green-500\" : \"text-red-500\"),\n                                        children: error.message\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                            lineNumber: 55,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n            lineNumber: 47,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductDetails, \"BdCbG72oN0C1ZoBqyF3VZdswDAc=\");\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S2pDLDhEQUFVQTt3REFBRWtDLEtBQUk7d0RBQWFDLE9BQU87d0RBQUlDLFFBQVE7d0RBQUlTLFdBQVU7d0RBQVVDLFNBQVMsSUFBSXRDLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQUkxSCw4REFBQ3NCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDaUI7d0NBQU9GLFNBQVNoQztrREFBVzs7Ozs7Ozs7Ozs7OENBRTlCLDhEQUFDZ0I7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNRO3dDQUFFUixXQUFXLEdBQXlELE9BQXREekIsTUFBTU8sS0FBSyxLQUFLLElBQUksbUJBQW1CLGNBQWM7a0RBQUtQLE1BQU1NLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFHO0dBN0VNVjtLQUFBQTs7QUErRU4sK0RBQWVBLGNBQWNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExheW91dCBmcm9tICdAL2NvbXBvbmVudC9MYXlvdXQvTGF5b3V0J1xuaW1wb3J0IFJpZ2h0QXJyb3cgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93UmlnaHQucG5nJ1xuaW1wb3J0IExlZnRBcnJvdyBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3dMZWZ0LnBuZydcbmltcG9ydCBNT0NLX0RBVEEgZnJvbSAnLi4vLi4vY29tcG9uZW50L01PQ0tfREFUQS5qc29uJ1xuXG5cbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHtwcm9kdWN0c30pID0+IHtcbiAgY29uc3QgW3F1YW50aXR5LHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDApICAgXG4gIGNvbnN0IFtlcnJvcixzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVRdWFudGl0eSA9ICh0eXBlKSA9PiB7XG4gICAgdHlwZSA9PT0gJ2luYycgP1xuICAgIHNldFF1YW50aXR5KChwcmV2KSA9PiBwcmV2ICsgMSkgXG4gICAgOiBxdWFudGl0eSA9PT0gMCA/IG51bGwgXG4gICAgOiBzZXRRdWFudGl0eSgocHJldik9PiBwcmV2IC0gMSlcbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRpb25IYW5kbGVyID0gKCkgPT57XG4gICAgaWYocXVhbnRpdHkgPT09IDApe1xuICAgICAgc2V0RXJyb3IgKHttZXNzYWdlOidQbGVhc2UgY2hvb3NlIFF1YW50aXR5JyxzdGF0ZTowfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3Ioe21lc3NhZ2U6J1N1Y2Nlc3NGdWxseSBBZGRlZCcsc3RhdGU6MX0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gKCkgPT4ge1xuXG4gICAgdmFsaWRhdGlvbkhhbmRsZXIoKVxuXG4gICAgY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gICAgICBpbWFnZTpwcm9kdWN0cy50aHVtYm5haWwsXG4gICAgICB0aXRsZTpwcm9kdWN0cy50aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOnByb2R1Y3RzLmRlc2NyaXB0aW9uLFxuICAgICAgcHJpY2U6cHJvZHVjdHMucHJpY2UsICAgICAgICAgICAgICAgICBcbiAgICAgIHF1YW50aXR5OnF1YW50aXR5XG4gICAgfVxuICAgIGNvbnN0IHByZXZEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWRkVG9jYXJ0JykpXG4gICAgY29uc29sZS5sb2cocHJldkRhdGEsJ3ByZXZEYXRhJylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWRkVG9jYXJ0JyxKU09OLnN0cmluZ2lmeShbLi4ucHJldkRhdGEscHJvZHVjdERhdGFdKSlcbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21haW4td3JhcHBlcic+XG4gICAgPExheW91dD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHJvZHVjdC1kZXRhaWxzJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTUwJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtZGV0YWlsLWltZyc+XG4gICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0cy50aHVtYm5haWx9IGFsdD1cInByb2R1Y3RJbWFnZVwiIHdpZHRoPXs0MDB9IGhlaWdodD17NDAwfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTUwJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2R1Y3QtaW5mbyc+XG4gICAgICAgICAgICAgICAgPGgyPntwcm9kdWN0cy50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxoMz57cHJvZHVjdHMuZGVzY3JpcHRpb259PC9oMz5cbiAgICAgICAgICAgICAgICA8cD48Yj5QcmljZSA6LTwvYj4ge3Byb2R1Y3RzLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48Yj5EaXNjb3VudFBlcmNlbnRhZ2UgOi08L2I+IHtwcm9kdWN0cy5kaXNjb3VudFBlcmNlbnRhZ2V9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxiPlJhdGluZyA6LTwvYj4ge3Byb2R1Y3RzLnJhdGluZ308L3A+XG4gICAgICAgICAgICAgICAgPHA+PGI+U3RvY2sgOi08L2I+IHtwcm9kdWN0cy5zdG9ja308L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdW50ZXItcm93Jz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWFudGl0eSA6LTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY291bnRlci1hcnJvdyc+ICAgXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMZWZ0QXJyb3d9IGFsdD1cIkxlZnQgQXJyb3dcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiBvbkNsaWNrPXsoKT0+aGFuZGxlUXVhbnRpdHkoXCJkZWNcIil9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntxdWFudGl0eX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ljb24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtSaWdodEFycm93fSBhbHQ9XCJMZWZ0IEFycm93XCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgb25DbGljaz17KCk9PmhhbmRsZVF1YW50aXR5KFwiaW5jXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FkZC1idG4nPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb0NhcnR9PkFkZCBUbyBDYXJ0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2Vycm9yLnN0YXRlID09PSAxID8gJ3RleHQtZ3JlZW4tNTAwJyA6ICd0ZXh0LXJlZC01MDAnfWB9PntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbHNcblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+e1xuXG4gIGNvbnN0IHByb2R1Y3RJZCA9ICtjb250ZXh0LnBhcmFtcy5zbHVnXG5cbiAgY29uc3QgcHJvZHVjdCA9IE1PQ0tfREFUQS5wcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0SWQgPT09IHByb2R1Y3QuaWQpWzBdXG5cbiAgLy8gY29uc29sZS5sb2cocHJvZHVjdCwncHJvZHVjdCcpXG5cbiAgcmV0dXJue1xuICAgICAgcHJvcHM6e1xuICAgICAgICAgIHByb2R1Y3RzIDogcHJvZHVjdFxuICAgICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxheW91dCIsIlJpZ2h0QXJyb3ciLCJMZWZ0QXJyb3ciLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3RzIiwicXVhbnRpdHkiLCJzZXRRdWFudGl0eSIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVRdWFudGl0eSIsInR5cGUiLCJwcmV2IiwidmFsaWRhdGlvbkhhbmRsZXIiLCJtZXNzYWdlIiwic3RhdGUiLCJhZGRUb0NhcnQiLCJwcm9kdWN0RGF0YSIsImltYWdlIiwidGh1bWJuYWlsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwicHJldkRhdGEiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsImgzIiwicCIsImIiLCJkaXNjb3VudFBlcmNlbnRhZ2UiLCJyYXRpbmciLCJzdG9jayIsImxhYmVsIiwib2JqZWN0Rml0Iiwib25DbGljayIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});