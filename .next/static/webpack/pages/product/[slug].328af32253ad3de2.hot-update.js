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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/component/Layout/Layout */ \"./component/Layout/Layout.js\");\n/* harmony import */ var _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/arrowRight.png */ \"./assets/arrowRight.png\");\n/* harmony import */ var _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/arrowLeft.png */ \"./assets/arrowLeft.png\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ProductDetails = (param)=>{\n    let { products  } = param;\n    _s();\n    // console.log(products,'products')\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleQuantity = (type)=>{\n        type === \"inc\" ? setQuantity((prev)=>prev + 1) : quantity === 0 ? null : setQuantity((prev)=>prev - 1);\n    };\n    const validationHandler = ()=>{};\n    const addToCart = ()=>{\n        const productData = {\n            image: products.thumbnail,\n            title: products.title,\n            description: products.description,\n            price: products.price,\n            quantity: quantity\n        };\n        localStorage.setItem(\"addTocart\", [\n            productData.image,\n            productData.title,\n            productData.description,\n            productData.price,\n            productData.quantity\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"product-details\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-img\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: products.thumbnail,\n                            alt: \"productImage\",\n                            width: 400,\n                            height: 400\n                        }, void 0, false, {\n                            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                            lineNumber: 49,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 48,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-50\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-info\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: products.title\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: products.description\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Price :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"DiscountPercentage :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 57,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.discountPercentage\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Rating :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 58,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.rating\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 58,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: \"Stock :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 59,\n                                        columnNumber: 20\n                                    }, undefined),\n                                    \" \",\n                                    products.stock\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"counter-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Quantity :-\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 61,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"counter-arrow\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                                    alt: \"Left Arrow\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    objectFit: \"contain\",\n                                                    onClick: ()=>handleQuantity(\"dec\")\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 63,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: quantity\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 66,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"icon\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                    alt: \"Left Arrow\",\n                                                    width: 20,\n                                                    height: 20,\n                                                    objectFit: \"contain\",\n                                                    onClick: ()=>handleQuantity(\"inc\")\n                                                }, void 0, false, {\n                                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                                lineNumber: 67,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 60,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"add-btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: addToCart,\n                                    children: \"Add To Cart\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                    lineNumber: 73,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                        lineNumber: 53,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sameer/projects/demo/todo-nextjs/pages/product/[slug].js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductDetails, \"kld5oo75wokKOClTKDqtGCvvDB8=\");\n_c = ProductDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnQvTGF5b3V0L0xheW91dCdcbmltcG9ydCBSaWdodEFycm93IGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvd1JpZ2h0LnBuZydcbmltcG9ydCBMZWZ0QXJyb3cgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93TGVmdC5wbmcnXG5pbXBvcnQgTU9DS19EQVRBIGZyb20gJy4uLy4uL2NvbXBvbmVudC9NT0NLX0RBVEEuanNvbidcblxuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9ICh7cHJvZHVjdHN9KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHByb2R1Y3RzLCdwcm9kdWN0cycpXG4gIGNvbnN0IFtxdWFudGl0eSxzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgwKSAgIFxuXG4gIGNvbnN0IGhhbmRsZVF1YW50aXR5ID0gKHR5cGUpID0+IHtcbiAgICB0eXBlID09PSAnaW5jJyA/XG4gICAgc2V0UXVhbnRpdHkoKHByZXYpID0+IHByZXYgKyAxKSBcbiAgICA6IHF1YW50aXR5ID09PSAwID8gbnVsbCBcbiAgICA6IHNldFF1YW50aXR5KChwcmV2KT0+IHByZXYgLSAxKVxuICB9XG5cbiAgY29uc3QgdmFsaWRhdGlvbkhhbmRsZXIgPSAoKSA9PntcbiAgICBcbiAgfVxuXG4gIGNvbnN0IGFkZFRvQ2FydCA9ICgpID0+IHtcbiAgIFxuICAgIGNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgICAgaW1hZ2U6cHJvZHVjdHMudGh1bWJuYWlsLFxuICAgICAgdGl0bGU6cHJvZHVjdHMudGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjpwcm9kdWN0cy5kZXNjcmlwdGlvbixcbiAgICAgIHByaWNlOnByb2R1Y3RzLnByaWNlLCAgICAgICAgICAgICAgICAgXG4gICAgICBxdWFudGl0eTpxdWFudGl0eVxuICAgIH1cblxuICAgXG4gICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWRkVG9jYXJ0JyxbcHJvZHVjdERhdGEuaW1hZ2UsXG4gICAgICBwcm9kdWN0RGF0YS50aXRsZSxcbiAgICAgIHByb2R1Y3REYXRhLmRlc2NyaXB0aW9uLFxuICAgICAgcHJvZHVjdERhdGEucHJpY2UsXG4gICAgICBwcm9kdWN0RGF0YS5xdWFudGl0eV1cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3Byb2R1Y3QtZGV0YWlscyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC01MCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWRldGFpbC1pbWcnPlxuICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJvZHVjdHMudGh1bWJuYWlsfSBhbHQ9XCJwcm9kdWN0SW1hZ2VcIiB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC01MCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWluZm8nPlxuICAgICAgICAgICAgICAgIDxoMj57cHJvZHVjdHMudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8aDM+e3Byb2R1Y3RzLmRlc2NyaXB0aW9ufTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+PGI+UHJpY2UgOi08L2I+IHtwcm9kdWN0cy5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPHA+PGI+RGlzY291bnRQZXJjZW50YWdlIDotPC9iPiB7cHJvZHVjdHMuZGlzY291bnRQZXJjZW50YWdlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48Yj5SYXRpbmcgOi08L2I+IHtwcm9kdWN0cy5yYXRpbmd9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxiPlN0b2NrIDotPC9iPiB7cHJvZHVjdHMuc3RvY2t9PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb3VudGVyLXJvdyc+XG4gICAgICAgICAgICAgICAgICA8bGFiZWw+UXVhbnRpdHkgOi08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvdW50ZXItYXJyb3cnPiAgIFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17TGVmdEFycm93fSBhbHQ9XCJMZWZ0IEFycm93XCIgd2lkdGg9ezIwfSBoZWlnaHQ9ezIwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgb25DbGljaz17KCk9PmhhbmRsZVF1YW50aXR5KFwiZGVjXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cXVhbnRpdHl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpY29uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz17UmlnaHRBcnJvd30gYWx0PVwiTGVmdCBBcnJvd1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gb2JqZWN0Rml0PVwiY29udGFpblwiIG9uQ2xpY2s9eygpPT5oYW5kbGVRdWFudGl0eShcImluY1wiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGQtYnRuJz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkVG9DYXJ0fT5BZGQgVG8gQ2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlsc1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT57XG5cbiAgY29uc3QgcHJvZHVjdElkID0gK2NvbnRleHQucGFyYW1zLnNsdWdcblxuICBjb25zdCBwcm9kdWN0ID0gTU9DS19EQVRBLnByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3RJZCA9PT0gcHJvZHVjdC5pZClbMF1cblxuICBjb25zb2xlLmxvZyhwcm9kdWN0LCdwcm9kdWN0JylcblxuICByZXR1cm57XG4gICAgICBwcm9wczp7XG4gICAgICAgICAgcHJvZHVjdHMgOiBwcm9kdWN0XG4gICAgICB9XG4gIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGF5b3V0IiwiUmlnaHRBcnJvdyIsIkxlZnRBcnJvdyIsIlByb2R1Y3REZXRhaWxzIiwicHJvZHVjdHMiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiaGFuZGxlUXVhbnRpdHkiLCJ0eXBlIiwicHJldiIsInZhbGlkYXRpb25IYW5kbGVyIiwiYWRkVG9DYXJ0IiwicHJvZHVjdERhdGEiLCJpbWFnZSIsInRodW1ibmFpbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsImgzIiwicCIsImIiLCJkaXNjb3VudFBlcmNlbnRhZ2UiLCJyYXRpbmciLCJzdG9jayIsImxhYmVsIiwib2JqZWN0Rml0Iiwib25DbGljayIsInNwYW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n"));

/***/ })

});