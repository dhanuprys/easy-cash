(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 349:
/***/ ((module) => {

// Exports
module.exports = {
	"baseLayout": "BaseLayout_baseLayout__1gy2v",
	"sideContainer": "BaseLayout_sideContainer__1bETK",
	"sidenavSelect": "BaseLayout_sidenavSelect__3TjmV",
	"mainContainer": "BaseLayout_mainContainer__3DZwG",
	"transactionHistoryContainer": "BaseLayout_transactionHistoryContainer__2OdBO",
	"transactionIn": "BaseLayout_transactionIn__3_bSh",
	"transactionOut": "BaseLayout_transactionOut__1mPOO",
	"navigationDisplay": "BaseLayout_navigationDisplay__3Dukq"
};


/***/ }),

/***/ 166:
/***/ ((module) => {

// Exports
module.exports = {
	"updateContainer": "ApplicationInfo_updateContainer__3wocE",
	"updateInfo": "ApplicationInfo_updateInfo__1vpmu",
	"updateIcon": "ApplicationInfo_updateIcon__3dcgH",
	"updateTitle": "ApplicationInfo_updateTitle__24aGx",
	"updateProgress": "ApplicationInfo_updateProgress__3E9wu",
	"updateProgressUI": "ApplicationInfo_updateProgressUI__25LHA",
	"change-width": "ApplicationInfo_change-width__3Wkpv",
	"updateAction": "ApplicationInfo_updateAction__3nqaR",
	"updateButton": "ApplicationInfo_updateButton__2j-9q",
	"updateReady": "ApplicationInfo_updateReady__zoeYz"
};


/***/ }),

/***/ 746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
// EXTERNAL MODULE: ./components/base/BaseLayout.module.css
var BaseLayout_module = __webpack_require__(349);
var BaseLayout_module_default = /*#__PURE__*/__webpack_require__.n(BaseLayout_module);
;// CONCATENATED MODULE: ./components/base/TransactionDay.jsx




function TransactionDay() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BaseLayout_module_default()).transactionHistoryContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BaseLayout_module_default()).transactionOut,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_namespaceObject.faArrowUp
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Rp. 300.000,00"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BaseLayout_module_default()).transactionIn,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_namespaceObject.faArrowDown
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Rp. 29.000,00"
                    })
                ]
            })
        ]
    }));
};

// EXTERNAL MODULE: ./items/FullScreen.jsx
var FullScreen = __webpack_require__(536);
// EXTERNAL MODULE: ./scripts/reducers/mainAppSlice.js
var mainAppSlice = __webpack_require__(174);
;// CONCATENATED MODULE: ./components/base/SideBar.jsx







function NavSelect({ icon , label , target  }) {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const currentActiveComponent = (0,external_react_redux_.useSelector)((state)=>state.mainApp.component
    );
    const checkIfValid = ()=>{
        // Jika komponen utama yang akan di-update sama dengan komponen
        // utama yang sudah di tampilkan sebelumnya, maka event pada react-redux
        // tidak akan di panggil
        if (currentActiveComponent === target) {
            return;
        }
        dispatch((0,mainAppSlice/* changeComponent */.tv)(target));
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BaseLayout_module_default()).sidenavSelect,
        onClick: checkIfValid,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                style: {
                    marginRight: '1rem'
                },
                icon: icon
            }),
            " ",
            label
        ]
    }));
}
function SideBar() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BaseLayout_module_default()).sideContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                children: "Navigasi"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavSelect, {
                        icon: free_solid_svg_icons_namespaceObject.faCashRegister,
                        label: "Mode Kasir",
                        target: "cashier_confirmation"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavSelect, {
                        icon: free_solid_svg_icons_namespaceObject.faBoxes,
                        label: "Stok Barang",
                        target: "stocks"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavSelect, {
                        icon: free_solid_svg_icons_namespaceObject.faHistory,
                        label: "Histori Transaksi",
                        target: "history"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavSelect, {
                        icon: free_solid_svg_icons_namespaceObject.faFileMedicalAlt,
                        label: "Laporan",
                        target: "reports"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NavSelect, {
                        icon: free_solid_svg_icons_namespaceObject.faSync,
                        label: "Info",
                        target: "app_info"
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./components/main/CashierConfirmation.jsx
function CashierConfirmation() {
    return "Confirmation";
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./scripts/reducers/toastSlice.js
var toastSlice = __webpack_require__(867);
// EXTERNAL MODULE: ./components/main/ApplicationInfo.module.css
var ApplicationInfo_module = __webpack_require__(166);
var ApplicationInfo_module_default = /*#__PURE__*/__webpack_require__.n(ApplicationInfo_module);
;// CONCATENATED MODULE: ./components/main/ApplicationInfo.jsx



// import { ipcRenderer } from 'electron';




function ApplicationInfo() {
    const dispatch = (0,external_react_redux_.useDispatch)();
    const wsMessage = (0,external_react_redux_.useSelector)((state)=>state.app.wsMessage
    );
    const ws = (0,external_react_redux_.useSelector)((state)=>state.app.ws
    );
    const { 0: isUpdateEvent , 1: setUpdate  } = (0,external_react_.useState)(false);
    const checkForUpdates = ()=>{
        if (!ws) {
            console.log('ws');
            return;
        }
        ws.send(JSON.stringify({
            action: 'check-update'
        }));
    };
    const downloadUpdate = ()=>{
        if (!ws) {
            console.log('ws');
            return;
        }
        ws.send(JSON.stringify({
            action: 'download-update'
        }));
    };
    const installUpdate = ()=>{
        if (!ws) {
            console.log('ws');
            return;
        }
        ws.send(JSON.stringify({
            action: 'install-update'
        }));
    };
    (0,external_react_.useEffect)(()=>{
        if (!wsMessage) {
            return;
        }
        switch(wsMessage.action){
            case 'update-available':
                setUpdate('available');
                break;
            case 'update-downloaded':
                setUpdate('downloaded');
                break;
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mainAppFullSize",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ApplicationInfo_module_default()).updateContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (ApplicationInfo_module_default()).updateInfo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (ApplicationInfo_module_default()).updateIcon,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                    icon: free_solid_svg_icons_namespaceObject.faSync
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (ApplicationInfo_module_default()).updateTitle,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        style: {
                                            margin: 0,
                                            padding: 0
                                        },
                                        children: "Update"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: (ApplicationInfo_module_default()).updateProgress,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: (ApplicationInfo_module_default()).updateProgressUI,
                                            children: "\xa0"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: {
                                            fontSize: '13px',
                                            color: 'grey'
                                        },
                                        children: "Terakhir dicek: kemarin"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (ApplicationInfo_module_default()).updateAction,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (ApplicationInfo_module_default()).updateButton,
                            onClick: checkForUpdates,
                            children: "Cek Update"
                        })
                    })
                ]
            }),
            isUpdateEvent ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (ApplicationInfo_module_default()).updateReady,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                    children: [
                        "Update tersedia ",
                        isUpdateEvent === 'available' ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: downloadUpdate,
                            children: "update sekarang"
                        }) : isUpdateEvent === 'downloaded' ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: installUpdate,
                            children: "install sekarang"
                        }) : null
                    ]
                })
            }) : null
        ]
    }));
};

;// CONCATENATED MODULE: ./components/base/BaseLayout.jsx









function Stocks() {
    return "Stock";
}
function TransactionHistory() {
    return "History";
}
function DefaultMainPage() {
    // const message = useSelector((state) => state.app.wsMessage);
    // useEffect(() => {
    //     alert(JSON.stringify(message));
    // })
    return "ME";
}
function BaseLayout() {
    const selectedPage = (0,external_react_redux_.useSelector)((state)=>state.mainApp.component
    );
    let ActivePage = DefaultMainPage;
    // Memastikan komponen utama yang dipilih ada dalam salah satu
    // pilihan komponen
    switch(selectedPage){
        case 'cashier_confirmation':
            ActivePage = CashierConfirmation;
            break;
        case 'stocks':
            ActivePage = Stocks;
            break;
        case 'history':
            ActivePage = TransactionHistory;
            break;
        case 'app_info':
            ActivePage = ApplicationInfo;
            break;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FullScreen/* default */.Z, {
        className: (BaseLayout_module_default()).baseLayout,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SideBar, {
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BaseLayout_module_default()).mainContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TransactionDay, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (BaseLayout_module_default()).navigationDisplay,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ActivePage, {
                        })
                    })
                ]
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./pages/index.js


async function getServerSideProps() {
    const fs = __webpack_require__(292);
    const electronIsDev = __webpack_require__(1);
    const { join: pathJoin  } = __webpack_require__(17);
    let ports = {
    };
    let portsPath = pathJoin(__dirname, '../../../../../../ports.json');
    if (electronIsDev) {
        portsPath = pathJoin(__dirname, '../ports.json');
    }
    try {
        ports = JSON.parse((await fs.readFile(portsPath)).toString());
    } catch (e) {
        console.log('Client error');
        throw e;
    }
    return {
        props: {
            __application_ports: ports
        }
    };
}
function Home() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(BaseLayout, {
    }));
};


/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1:
/***/ ((module) => {

"use strict";
module.exports = require("electron-is-dev");

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

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [488], () => (__webpack_exec__(746)));
module.exports = __webpack_exports__;

})();