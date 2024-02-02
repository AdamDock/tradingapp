"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/marketwatch",{

/***/ "./Components/organisms/FedFactors.tsx":
/*!*********************************************!*\
  !*** ./Components/organisms/FedFactors.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _molecules_chartaccordian__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/chartaccordian */ \"./Components/molecules/chartaccordian.tsx\");\n\nvar _s = $RefreshSig$();\n\n\nconst FedFactors = ()=>{\n    _s();\n    const [fedFactors, setFedFactors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMarketFactors = async ()=>{\n            try {\n                const res = await fetch(\"/api/economyData\");\n                const data = await res.json();\n                console.log(data);\n                const flattendData = data.flat();\n                const chartData = flattendData.map((factor)=>{\n                    const transformedData = factor.data.filter((item)=>item.value !== null).map((item)=>{\n                        const dateParts = item.date.split(\"-\").map((part)=>parseInt(part, 10));\n                        let value;\n                        if (item.value === null) {\n                            value = 0;\n                        } else {\n                            value = item.value;\n                        }\n                        return {\n                            x: new Date(dateParts[0], dateParts[1] - 1, dateParts[2]),\n                            y: value\n                        };\n                    });\n                    return {\n                        ...factor,\n                        data: transformedData\n                    };\n                });\n                setFedFactors(chartData);\n            } catch (error) {\n                console.error(\"Error getting MarketFactors:\", error);\n            }\n        };\n        getMarketFactors();\n    }, []);\n    const renderedFactors = fedFactors.map((factor, index)=>{\n        console.log(factor);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_molecules_chartaccordian__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                name: factor.name,\n                currentValue: factor.data[0].y,\n                description: factor.Description,\n                data: factor.data,\n                unit: factor.unit\n            }, void 0, false, {\n                fileName: \"/Users/adamdockstader/repos/tradingapp/Components/organisms/FedFactors.tsx\",\n                lineNumber: 44,\n                columnNumber: 17\n            }, undefined)\n        }, factor.name, false, {\n            fileName: \"/Users/adamdockstader/repos/tradingapp/Components/organisms/FedFactors.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold text-center\",\n                children: \"Federal Reserve Metrics\"\n            }, void 0, false, {\n                fileName: \"/Users/adamdockstader/repos/tradingapp/Components/organisms/FedFactors.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            renderedFactors\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adamdockstader/repos/tradingapp/Components/organisms/FedFactors.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(FedFactors, \"32j+2qf22V3+g/20UT/1N6Cgkjc=\");\n_c = FedFactors;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FedFactors);\nvar _c;\n$RefreshReg$(_c, \"FedFactors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL29yZ2FuaXNtcy9GZWRGYWN0b3JzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNhO0FBRXpELE1BQU1HLGFBQWE7O0lBQ2YsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0NELGdEQUFTQSxDQUFDO1FBQ04sTUFBTU0sbUJBQW1CO1lBQ3JCLElBQUk7Z0JBQ0EsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO2dCQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7Z0JBQzNCQyxRQUFRQyxHQUFHLENBQUNIO2dCQUNaLE1BQU1JLGVBQWVKLEtBQUtLLElBQUk7Z0JBQzlCLE1BQU1DLFlBQVlGLGFBQWFHLEdBQUcsQ0FBQyxDQUFDQztvQkFFaEMsTUFBTUMsa0JBQWtCRCxPQUFPUixJQUFJLENBQ2xDVSxNQUFNLENBQUNDLENBQUFBLE9BQVFBLEtBQUtDLEtBQUssS0FBSyxNQUM5QkwsR0FBRyxDQUFDSSxDQUFBQTt3QkFDRCxNQUFNRSxZQUFZRixLQUFLRyxJQUFJLENBQUNDLEtBQUssQ0FBQyxLQUFLUixHQUFHLENBQUNTLENBQUFBLE9BQVFDLFNBQVNELE1BQU07d0JBQ2xFLElBQUlKO3dCQUNKLElBQUlELEtBQUtDLEtBQUssS0FBSyxNQUFNOzRCQUNyQkEsUUFBUTt3QkFDWixPQUFPOzRCQUNIQSxRQUFRRCxLQUFLQyxLQUFLO3dCQUN0Qjt3QkFDQSxPQUFPOzRCQUNITSxHQUFHLElBQUlDLEtBQUtOLFNBQVMsQ0FBQyxFQUFFLEVBQUVBLFNBQVMsQ0FBQyxFQUFFLEdBQUcsR0FBR0EsU0FBUyxDQUFDLEVBQUU7NEJBQ3hETyxHQUFHUjt3QkFDUDtvQkFDSjtvQkFDQSxPQUFPO3dCQUFDLEdBQUdKLE1BQU07d0JBQUVSLE1BQUtTO29CQUFlO2dCQUMzQztnQkFDQWIsY0FBY1U7WUFDbEIsRUFBRSxPQUFPZSxPQUFPO2dCQUNabkIsUUFBUW1CLEtBQUssQ0FBQyxnQ0FBZ0NBO1lBQ2xEO1FBQ0o7UUFDQXhCO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTXlCLGtCQUFrQjNCLFdBQVdZLEdBQUcsQ0FBQyxDQUFDQyxRQUFhZTtRQUNqRHJCLFFBQVFDLEdBQUcsQ0FBQ0s7UUFDWixxQkFDSSw4REFBQ2dCO3NCQUNHLDRFQUFDL0IsaUVBQWNBO2dCQUFDZ0MsTUFBTWpCLE9BQU9pQixJQUFJO2dCQUFFQyxjQUFjbEIsT0FBT1IsSUFBSSxDQUFDLEVBQUUsQ0FBQ29CLENBQUM7Z0JBQUVPLGFBQWFuQixPQUFPb0IsV0FBVztnQkFBRTVCLE1BQU1RLE9BQU9SLElBQUk7Z0JBQUU2QixNQUFNckIsT0FBT3FCLElBQUk7Ozs7OztXQURsSXJCLE9BQU9pQixJQUFJOzs7OztJQUk3QjtJQUVBLHFCQUNJLDhEQUFDRDs7MEJBQ0csOERBQUNNO2dCQUFHQyxXQUFVOzBCQUFpQzs7Ozs7O1lBQzlDVDs7Ozs7OztBQUliO0dBcERNNUI7S0FBQUE7QUFxRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9vcmdhbmlzbXMvRmVkRmFjdG9ycy50c3g/NWNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2hhcnRBY2NvcmRpYW4gZnJvbSBcIi4uL21vbGVjdWxlcy9jaGFydGFjY29yZGlhblwiO1xuXG5jb25zdCBGZWRGYWN0b3JzID0gKCkgPT4ge1xuICAgIGNvbnN0IFtmZWRGYWN0b3JzLCBzZXRGZWRGYWN0b3JzXSA9IHVzZVN0YXRlKFtdKTsgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldE1hcmtldEZhY3RvcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2Vjb25vbXlEYXRhJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmxhdHRlbmREYXRhID0gZGF0YS5mbGF0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhcnREYXRhID0gZmxhdHRlbmREYXRhLm1hcCgoZmFjdG9yOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZERhdGEgPSBmYWN0b3IuZGF0YSBcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udmFsdWUgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlUGFydHMgPSBpdGVtLmRhdGUuc3BsaXQoJy0nKS5tYXAocGFydCA9PiBwYXJzZUludChwYXJ0LCAxMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbmV3IERhdGUoZGF0ZVBhcnRzWzBdLCBkYXRlUGFydHNbMV0gLSAxLCBkYXRlUGFydHNbMl0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5mYWN0b3IsIGRhdGE6dHJhbnNmb3JtZWREYXRhfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRGZWRGYWN0b3JzKGNoYXJ0RGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgTWFya2V0RmFjdG9yczonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0TWFya2V0RmFjdG9ycygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHJlbmRlcmVkRmFjdG9ycyA9IGZlZEZhY3RvcnMubWFwKChmYWN0b3I6IGFueSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZmFjdG9yKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtmYWN0b3IubmFtZX0gPlxuICAgICAgICAgICAgICAgIDxDaGFydEFjY29yZGlhbiBuYW1lPXtmYWN0b3IubmFtZX0gY3VycmVudFZhbHVlPXtmYWN0b3IuZGF0YVswXS55fSBkZXNjcmlwdGlvbj17ZmFjdG9yLkRlc2NyaXB0aW9ufSBkYXRhPXtmYWN0b3IuZGF0YX0gdW5pdD17ZmFjdG9yLnVuaXR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPkZlZGVyYWwgUmVzZXJ2ZSBNZXRyaWNzPC9oMT5cbiAgICAgICAgICAgIHtyZW5kZXJlZEZhY3RvcnN9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEZlZEZhY3RvcnM7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2hhcnRBY2NvcmRpYW4iLCJGZWRGYWN0b3JzIiwiZmVkRmFjdG9ycyIsInNldEZlZEZhY3RvcnMiLCJnZXRNYXJrZXRGYWN0b3JzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJmbGF0dGVuZERhdGEiLCJmbGF0IiwiY2hhcnREYXRhIiwibWFwIiwiZmFjdG9yIiwidHJhbnNmb3JtZWREYXRhIiwiZmlsdGVyIiwiaXRlbSIsInZhbHVlIiwiZGF0ZVBhcnRzIiwiZGF0ZSIsInNwbGl0IiwicGFydCIsInBhcnNlSW50IiwieCIsIkRhdGUiLCJ5IiwiZXJyb3IiLCJyZW5kZXJlZEZhY3RvcnMiLCJpbmRleCIsImRpdiIsIm5hbWUiLCJjdXJyZW50VmFsdWUiLCJkZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uIiwidW5pdCIsImgxIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/organisms/FedFactors.tsx\n"));

/***/ })

});