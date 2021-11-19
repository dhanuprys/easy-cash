"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/main/ApplicationInfo.jsx":
/*!*********************************************!*\
  !*** ./components/main/ApplicationInfo.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ApplicationInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"../node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"../node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"../node_modules/react-redux/es/index.js\");\n/* harmony import */ var _scripts_reducers_toastSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../scripts/reducers/toastSlice */ \"./scripts/reducers/toastSlice.js\");\n/* harmony import */ var _ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationInfo.module.css */ \"./components/main/ApplicationInfo.module.css\");\n/* harmony import */ var _ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n// import { ipcRenderer } from 'electron';\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ApplicationInfo() {\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var wsMessage = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.app.wsMessage;\n    });\n    var appVersion = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.app.version;\n    });\n    var ws = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function(state) {\n        return state.app.ws;\n    });\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isUpdateEvent = ref[0], setUpdate = ref[1];\n    var checkForUpdates = function() {\n        if (!ws) {\n            console.log('ws');\n            return;\n        }\n        ws.send(JSON.stringify({\n            action: 'check-update'\n        }));\n    };\n    var downloadUpdate = function() {\n        if (!ws) {\n            console.log('ws');\n            return;\n        }\n        ws.send(JSON.stringify({\n            action: 'download-update'\n        }));\n    };\n    var installUpdate = function() {\n        if (!ws) {\n            console.log('ws');\n            return;\n        }\n        ws.send(JSON.stringify({\n            action: 'install-update'\n        }));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!wsMessage) {\n            return;\n        }\n        switch(wsMessage.action){\n            case 'update-available':\n                setUpdate('available');\n                break;\n            case 'update-downloaded':\n                setUpdate('downloaded');\n                break;\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: \"mainAppFullSize\",\n        __source: {\n            fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n            lineNumber: 55,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateContainer),\n                __source: {\n                    fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateInfo),\n                        __source: {\n                            fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateIcon),\n                                __source: {\n                                    fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faSync,\n                                    __source: {\n                                        fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    },\n                                    __self: this\n                                })\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateTitle),\n                                __source: {\n                                    fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 21\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h2\", {\n                                        style: {\n                                            margin: 0,\n                                            padding: 0\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 25\n                                        },\n                                        __self: this,\n                                        children: \"Update\"\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                        className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateProgress),\n                                        __source: {\n                                            fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 25\n                                        },\n                                        __self: this,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                            className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateProgressUI),\n                                            __source: {\n                                                fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 29\n                                            },\n                                            __self: this,\n                                            children: \"\\xa0\"\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                                        style: {\n                                            fontSize: '13px',\n                                            color: 'grey'\n                                        },\n                                        __source: {\n                                            fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 25\n                                        },\n                                        __self: this,\n                                        children: [\n                                            \"Terakhir dicek: kemarin\",\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                                __source: {\n                                                    fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 98\n                                                },\n                                                __self: this\n                                            }),\n                                            appVersion\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateAction),\n                        __source: {\n                            fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 17\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateButton),\n                            onClick: checkForUpdates,\n                            __source: {\n                                fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            },\n                            __self: this,\n                            children: \"Cek Update\"\n                        })\n                    })\n                ]\n            }),\n            isUpdateEvent ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_ApplicationInfo_module_css__WEBPACK_IMPORTED_MODULE_5___default().updateReady),\n                __source: {\n                    fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 31\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h3\", {\n                    __source: {\n                        fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    },\n                    __self: this,\n                    children: [\n                        \"Update tersedia \",\n                        isUpdateEvent === 'available' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: downloadUpdate,\n                            __source: {\n                                fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 71\n                            },\n                            __self: this,\n                            children: \"update sekarang\"\n                        }) : isUpdateEvent === 'downloaded' ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                            onClick: installUpdate,\n                            __source: {\n                                fileName: \"C:\\\\Code\\\\Project\\\\kasir\\\\renderer\\\\components\\\\main\\\\ApplicationInfo.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 164\n                            },\n                            __self: this,\n                            children: \"install sekarang\"\n                        }) : null\n                    ]\n                })\n            }) : null\n        ]\n    }));\n};\n_s(ApplicationInfo, \"Yufn/beIPocbOXLpFru50KG6AjE=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = ApplicationInfo;\nvar _c;\n$RefreshReg$(_c, \"ApplicationInfo\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21haW4vQXBwbGljYXRpb25JbmZvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBEO0FBQ007QUFDaEUsRUFBMEM7QUFDQztBQUNXO0FBQ0U7QUFDUDs7QUFFbEMsUUFBUSxDQUFDUSxlQUFlLEdBQUcsQ0FBQzs7SUFDdkMsR0FBSyxDQUFDQyxRQUFRLEdBQUdKLHdEQUFXO0lBQzVCLEdBQUssQ0FBQ0ssU0FBUyxHQUFHTix3REFBVyxDQUFDLFFBQVEsQ0FBUE8sS0FBSztRQUFLQSxNQUFNQyxDQUFORCxLQUFLLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUzs7SUFDNUQsR0FBSyxDQUFDRyxVQUFVLEdBQUdULHdEQUFXLENBQUMsUUFBUSxDQUFQTyxLQUFLO1FBQUtBLE1BQU1DLENBQU5ELEtBQUssQ0FBQ0MsR0FBRyxDQUFDRSxPQUFPOztJQUMzRCxHQUFLLENBQUNDLEVBQUUsR0FBR1gsd0RBQVcsQ0FBQyxRQUFRLENBQVBPLEtBQUs7UUFBS0EsTUFBTUMsQ0FBTkQsS0FBSyxDQUFDQyxHQUFHLENBQUNHLEVBQUU7O0lBQzlDLEdBQUssQ0FBZ0NaLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQTNDYSxhQUFhLEdBQWdCYixHQUFlLEtBQTdCYyxTQUFTLEdBQUtkLEdBQWU7SUFDcEQsR0FBSyxDQUFDZSxlQUFlLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDM0IsRUFBRSxHQUFHSCxFQUFFLEVBQUUsQ0FBQztZQUNOSSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFJO1lBQ2hCLE1BQU07UUFDVixDQUFDO1FBRURMLEVBQUUsQ0FBQ00sSUFBSSxDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1lBQUNDLE1BQU0sRUFBRSxDQUFjO1FBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsR0FBSyxDQUFDQyxjQUFjLEdBQUcsUUFBUSxHQUFGLENBQUM7UUFDMUIsRUFBRSxHQUFHVixFQUFFLEVBQUUsQ0FBQztZQUNOSSxP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bkluZm8uanN4P2IyZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmFTeW5jIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuLy8gaW1wb3J0IHsgaXBjUmVuZGVyZXIgfSBmcm9tICdlbGVjdHJvbic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgc2hvdyB9IGZyb20gJy4uLy4uL3NjcmlwdHMvcmVkdWNlcnMvdG9hc3RTbGljZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcHBsaWNhdGlvbkluZm8ubW9kdWxlLmNzcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHBsaWNhdGlvbkluZm8oKSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB3c01lc3NhZ2UgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFwcC53c01lc3NhZ2UpO1xyXG4gICAgY29uc3QgYXBwVmVyc2lvbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXBwLnZlcnNpb24pO1xyXG4gICAgY29uc3Qgd3MgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmFwcC53cyk7XHJcbiAgICBjb25zdCBbIGlzVXBkYXRlRXZlbnQsIHNldFVwZGF0ZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgY2hlY2tGb3JVcGRhdGVzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghd3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7IGFjdGlvbjogJ2NoZWNrLXVwZGF0ZScgfSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGRvd25sb2FkVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghd3MpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3dzJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgd3Muc2VuZChKU09OLnN0cmluZ2lmeSh7IGFjdGlvbjogJ2Rvd25sb2FkLXVwZGF0ZScgfSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5zdGFsbFVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXdzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3cycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHdzLnNlbmQoSlNPTi5zdHJpbmdpZnkoeyBhY3Rpb246ICdpbnN0YWxsLXVwZGF0ZScgfSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF3c01lc3NhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh3c01lc3NhZ2UuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZS1hdmFpbGFibGUnOlxyXG4gICAgICAgICAgICAgICAgc2V0VXBkYXRlKCdhdmFpbGFibGUnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd1cGRhdGUtZG93bmxvYWRlZCc6XHJcbiAgICAgICAgICAgICAgICBzZXRVcGRhdGUoJ2Rvd25sb2FkZWQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5BcHBGdWxsU2l6ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwZGF0ZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwZGF0ZUluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBkYXRlSWNvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFTeW5jfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBkYXRlVGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luOiAwLCBwYWRkaW5nOiAwIH19PlVwZGF0ZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBkYXRlUHJvZ3Jlc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cGRhdGVQcm9ncmVzc1VJfT4mbmJzcDs8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTNweCcsIGNvbG9yOiAnZ3JleScgfX0+VGVyYWtoaXIgZGljZWs6IGtlbWFyaW48YnIgLz57YXBwVmVyc2lvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBkYXRlQWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnVwZGF0ZUJ1dHRvbn0gb25DbGljaz17Y2hlY2tGb3JVcGRhdGVzfT5DZWsgVXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsgaXNVcGRhdGVFdmVudCA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBkYXRlUmVhZHl9PlxyXG4gICAgICAgICAgICAgICAgPGgzPlVwZGF0ZSB0ZXJzZWRpYSB7IGlzVXBkYXRlRXZlbnQgPT09ICdhdmFpbGFibGUnID8gPGJ1dHRvbiBvbkNsaWNrPXtkb3dubG9hZFVwZGF0ZX0+dXBkYXRlIHNla2FyYW5nPC9idXR0b24+IDogaXNVcGRhdGVFdmVudCA9PT0gJ2Rvd25sb2FkZWQnID8gPGJ1dHRvbiBvbkNsaWNrPXtpbnN0YWxsVXBkYXRlfT5pbnN0YWxsIHNla2FyYW5nPC9idXR0b24+IDogbnVsbCB9PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+IDogbnVsbCB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbImZhU3luYyIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNob3ciLCJzdHlsZXMiLCJBcHBsaWNhdGlvbkluZm8iLCJkaXNwYXRjaCIsIndzTWVzc2FnZSIsInN0YXRlIiwiYXBwIiwiYXBwVmVyc2lvbiIsInZlcnNpb24iLCJ3cyIsImlzVXBkYXRlRXZlbnQiLCJzZXRVcGRhdGUiLCJjaGVja0ZvclVwZGF0ZXMiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhY3Rpb24iLCJkb3dubG9hZFVwZGF0ZSIsImluc3RhbGxVcGRhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ1cGRhdGVDb250YWluZXIiLCJ1cGRhdGVJbmZvIiwidXBkYXRlSWNvbiIsImljb24iLCJ1cGRhdGVUaXRsZSIsImgyIiwic3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwidXBkYXRlUHJvZ3Jlc3MiLCJ1cGRhdGVQcm9ncmVzc1VJIiwic3BhbiIsImZvbnRTaXplIiwiY29sb3IiLCJiciIsInVwZGF0ZUFjdGlvbiIsImJ1dHRvbiIsInVwZGF0ZUJ1dHRvbiIsIm9uQ2xpY2siLCJ1cGRhdGVSZWFkeSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/main/ApplicationInfo.jsx\n");

/***/ })

});