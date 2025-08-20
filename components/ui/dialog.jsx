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
    get Dialog () {
        return Dialog;
    },
    get DialogClose () {
        return DialogClose;
    },
    get DialogContent () {
        return DialogContent;
    },
    get DialogDescription () {
        return DialogDescription;
    },
    get DialogFooter () {
        return DialogFooter;
    },
    get DialogHeader () {
        return DialogHeader;
    },
    get DialogOverlay () {
        return DialogOverlay;
    },
    get DialogPortal () {
        return DialogPortal;
    },
    get DialogTitle () {
        return DialogTitle;
    },
    get DialogTrigger () {
        return DialogTrigger;
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
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Root, {
        "data-slot": "dialog",
        ...props
    });
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    });
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Portal, {
        "data-slot": "dialog-portal",
        ...props
    });
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Close, {
        "data-slot": "dialog-close",
        ...props
    });
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Overlay, {
        "data-slot": "dialog-overlay",
        className: (0, _utils.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    });
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(DialogOverlay, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactdialog.Content, {
                "data-slot": "dialog-content",
                className: (0, _utils.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactdialog.Close, {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.XIcon, {}),
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
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "dialog-header",
        className: (0, _utils.cn)("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    });
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "dialog-footer",
        className: (0, _utils.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    });
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Title, {
        "data-slot": "dialog-title",
        className: (0, _utils.cn)("text-lg leading-none font-semibold", className),
        ...props
    });
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdialog.Description, {
        "data-slot": "dialog-description",
        className: (0, _utils.cn)("text-muted-foreground text-sm", className),
        ...props
    });
}

