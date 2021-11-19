exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 47:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "FullScreen_container__2Qxm0",
	"center": "FullScreen_center__3ruFl"
};


/***/ }),

/***/ 536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FullScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FullScreen_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony import */ var _FullScreen_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FullScreen_module_css__WEBPACK_IMPORTED_MODULE_1__);


function FullScreen({ children , className ='' , centerPlace , ...props }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_FullScreen_module_css__WEBPACK_IMPORTED_MODULE_1___default().container)} ${centerPlace ? (_FullScreen_module_css__WEBPACK_IMPORTED_MODULE_1___default().center) : ''} ${className}`,
        children: children
    }));
};


/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tv": () => (/* binding */ changeComponent),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports mainAppSlice, reset */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const mainAppSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'mainApp',
    initialState: {
        prevComponent: '',
        component: ''
    },
    reducers: {
        changeComponent: (state, payload)=>{
            state.prevComponent = state.component;
            state.component = payload.payload;
        },
        reset: (state)=>{
            state.component = '';
        }
    }
});
const { changeComponent , reset  } = mainAppSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainAppSlice.reducer);


/***/ }),

/***/ 867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$Z": () => (/* binding */ show),
/* harmony export */   "xv": () => (/* binding */ close),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export toastSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const toastSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: 'toast',
    initialState: {
        content: null
    },
    reducers: {
        show: (state, payload)=>{
            state.content = payload.payload.content;
        },
        close: (state, payload)=>{
            state.content = null;
        }
    }
});
const { show , close  } = toastSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toastSlice.reducer);


/***/ })

};
;