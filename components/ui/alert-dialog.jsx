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
    get AlertDialog () {
        return AlertDialog;
    },
    get AlertDialogAction () {
        return AlertDialogAction;
    },
    get AlertDialogCancel () {
        return AlertDialogCancel;
    },
    get AlertDialogContent () {
        return AlertDialogContent;
    },
    get AlertDialogDescription () {
        return AlertDialogDescription;
    },
    get AlertDialogFooter () {
        return AlertDialogFooter;
    },
    get AlertDialogHeader () {
        return AlertDialogHeader;
    },
    get AlertDialogOverlay () {
        return AlertDialogOverlay;
    },
    get AlertDialogPortal () {
        return AlertDialogPortal;
    },
    get AlertDialogTitle () {
        return AlertDialogTitle;
    },
    get AlertDialogTrigger () {
        return AlertDialogTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactalertdialog = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-alert-dialog"));
const _utils = require("@/lib/utils");
const _button = require("@/components/ui/button");
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
function AlertDialog({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Root, {
        "data-slot": "alert-dialog",
        ...props
    });
}
function AlertDialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Trigger, {
        "data-slot": "alert-dialog-trigger",
        ...props
    });
}
function AlertDialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Portal, {
        "data-slot": "alert-dialog-portal",
        ...props
    });
}
function AlertDialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Overlay, {
        "data-slot": "alert-dialog-overlay",
        className: (0, _utils.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    });
}
function AlertDialogContent({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(AlertDialogOverlay, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Content, {
                "data-slot": "alert-dialog-content",
                className: (0, _utils.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props
            })
        ]
    });
}
function AlertDialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "alert-dialog-header",
        className: (0, _utils.cn)("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    });
}
function AlertDialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "alert-dialog-footer",
        className: (0, _utils.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    });
}
function AlertDialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Title, {
        "data-slot": "alert-dialog-title",
        className: (0, _utils.cn)("text-lg font-semibold", className),
        ...props
    });
}
function AlertDialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Description, {
        "data-slot": "alert-dialog-description",
        className: (0, _utils.cn)("text-muted-foreground text-sm", className),
        ...props
    });
}
function AlertDialogAction({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Action, {
        className: (0, _utils.cn)((0, _button.buttonVariants)(), className),
        ...props
    });
}
function AlertDialogCancel({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactalertdialog.Cancel, {
        className: (0, _utils.cn)((0, _button.buttonVariants)({
            variant: "outline"
        }), className),
        ...props
    });
}

