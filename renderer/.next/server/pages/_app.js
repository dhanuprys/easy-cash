(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 705:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Toast_container__FdJRd",
	"show-toast": "Toast_show-toast__2cP_B",
	"main": "Toast_main__2vup4"
};


/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./items/FullScreen.jsx
var FullScreen = __webpack_require__(536);
// EXTERNAL MODULE: ./items/Toast.module.css
var Toast_module = __webpack_require__(705);
var Toast_module_default = /*#__PURE__*/__webpack_require__.n(Toast_module);
;// CONCATENATED MODULE: ./items/Toast.jsx



function Toast({ content , closeToast  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(FullScreen/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (Toast_module_default()).container,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Toast_module_default()).main,
                children: [
                    content,
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: closeToast,
                        children: "X"
                    })
                ]
            })
        })
    }));
};

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./scripts/reducers/mainAppSlice.js
var mainAppSlice = __webpack_require__(174);
// EXTERNAL MODULE: ./scripts/reducers/toastSlice.js
var toastSlice = __webpack_require__(867);
;// CONCATENATED MODULE: ./scripts/reducers/appSlice.js

const appSlice = (0,toolkit_.createSlice)({
    name: 'app',
    initialState: {
        ports: {
        },
        ws: null,
        wsMessage: null
    },
    reducers: {
        setApplicationPorts: (state, payload)=>{
            state.ports = payload.payload;
        },
        setApplicationSocket: (state, payload)=>{
            state.ws = payload.payload;
        },
        notifyClientSocket: (state, payload)=>{
            state.wsMessage = payload.payload;
        }
    }
});
const { setApplicationPorts , setApplicationSocket , notifyClientSocket  } = appSlice.actions;
/* harmony default export */ const reducers_appSlice = (appSlice.reducer);

;// CONCATENATED MODULE: ./scripts/store.js




/* harmony default export */ const store = ((0,toolkit_.configureStore)({
    reducer: {
        toast: toastSlice/* default */.ZP,
        mainApp: mainAppSlice/* default */.ZP,
        app: reducers_appSlice
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: [
                    'app/setApplicationSocket',
                    'app/notifyClientSocket'
                ],
                // Ignore these field paths in all actions
                // ignoredActionPaths: ['app.ws', 'app.wsMessage'],
                // Ignore these paths in the state
                ignoredPaths: [
                    'app.ws',
                    'app.wsMessage'
                ]
            }
        })
}));

;// CONCATENATED MODULE: ./pages/_app.js








function GlobalToast() {
    const toastContent = (0,external_react_redux_.useSelector)((state)=>state.toast.content
    );
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: showToast , 1: setShowToast  } = (0,external_react_.useState)(false);
    const closeToast = ()=>{
        dispatch((0,toastSlice/* close */.xv)());
        setShowToast(false);
    };
    if (toastContent === null) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        }));
    }
    if (!showToast) {
        setTimeout(()=>setShowToast(true)
        , 200);
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        }));
    }
    setTimeout(()=>{
        closeToast();
    }, 6000);
    return(/*#__PURE__*/ jsx_runtime_.jsx(Toast, {
        content: toastContent,
        closeToast: closeToast
    }));
}
function PortConnectivity({ pageProps  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const connectToWSServer = ()=>{
        const ws = new WebSocket(`ws://localhost:${pageProps.__application_ports.wsServerPort}`);
        ws.addEventListener('open', ()=>{
            dispatch(setApplicationSocket(ws));
        });
        ws.addEventListener('message', (message)=>{
            dispatch(notifyClientSocket(JSON.parse(message.data)));
        });
        ws.addEventListener('error', ()=>{
            dispatch(setApplicationSocket(null));
        });
        ws.addEventListener('close', ()=>{
            dispatch(setApplicationSocket(null));
        });
    };
    (0,external_react_.useEffect)(()=>{
        if (pageProps.__application_ports) {
            dispatch(setApplicationPorts(pageProps.__application_ports));
            connectToWSServer();
        }
    });
    return "";
}
function MyApp({ Component , pageProps  }) {
    // Ini adalah handler aplikasi custom yang sudah terintegrasi
    // dengan react-redux
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalToast, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PortConnectivity, {
                pageProps: pageProps
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [488], () => (__webpack_exec__(111)));
module.exports = __webpack_exports__;

})();