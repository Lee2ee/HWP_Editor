"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Sheet () {
        return Sheet;
    },
    get SheetClose () {
        return SheetClose;
    },
    get SheetContent () {
        return SheetContent;
    },
    get SheetDescription () {
        return SheetDescription;
    },
    get SheetFooter () {
        return SheetFooter;
    },
    get SheetHeader () {
        return SheetHeader;
    },
    get SheetTitle () {
        return SheetTitle;
    },
    get SheetTrigger () {
        return SheetTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactdialog = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-dialog"));
const _lucidereact = require("lucide-react");
const _utils = require("@/lib/utils");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Root, {
        "data-slot": "sheet",
        ...props
    });
}
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Trigger, {
        "data-slot": "sheet-trigger",
        ...props
    });
}
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Close, {
        "data-slot": "sheet-close",
        ...props
    });
}
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Portal, {
        "data-slot": "sheet-portal",
        ...props
    });
}
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Overlay, {
        "data-slot": "sheet-overlay",
        className: (0, _utils.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    });
}
function SheetContent({ className, children, side = "right", ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(SheetOverlay, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactdialog.Content, {
                "data-slot": "sheet-content",
                className: (0, _utils.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500", side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm", side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm", side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b", side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactdialog.Close, {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.XIcon, {
                                className: "size-4"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "sheet-header",
        className: (0, _utils.cn)("flex flex-col gap-1.5 p-4", className),
        ...props
    });
}
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "sheet-footer",
        className: (0, _utils.cn)("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    });
}
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Title, {
        "data-slot": "sheet-title",
        className: (0, _utils.cn)("text-foreground font-semibold", className),
        ...props
    });
}
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Description, {
        "data-slot": "sheet-description",
        className: (0, _utils.cn)("text-muted-foreground text-sm", className),
        ...props
    });
}

