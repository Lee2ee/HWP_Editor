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
    get Toast () {
        return Toast;
    },
    get ToastAction () {
        return ToastAction;
    },
    get ToastClose () {
        return ToastClose;
    },
    get ToastDescription () {
        return ToastDescription;
    },
    get ToastProvider () {
        return ToastProvider;
    },
    get ToastTitle () {
        return ToastTitle;
    },
    get ToastViewport () {
        return ToastViewport;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacttoast = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-toast"));
const _classvarianceauthority = require("class-variance-authority");
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
const ToastProvider = _reacttoast.Provider;
const ToastViewport = /*#__PURE__*/ _react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttoast.Viewport, {
        ref: ref,
        className: (0, _utils.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = _reacttoast.Viewport.displayName;
const toastVariants = (0, _classvarianceauthority.cva)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ _react.forwardRef(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttoast.Root, {
        ref: ref,
        className: (0, _utils.cn)(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = _reacttoast.Root.displayName;
const ToastAction = /*#__PURE__*/ _react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttoast.Action, {
        ref: ref,
        className: (0, _utils.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }));
ToastAction.displayName = _reacttoast.Action.displayName;
const ToastClose = /*#__PURE__*/ _react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttoast.Close, {
        ref: ref,
        className: (0, _utils.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.X, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = _reacttoast.Close.displayName;
const ToastTitle = /*#__PURE__*/ _react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttoast.Title, {
        ref: ref,
        className: (0, _utils.cn)("text-sm font-semibold", className),
        ...props
    }));
ToastTitle.displayName = _reacttoast.Title.displayName;
const ToastDescription = /*#__PURE__*/ _react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttoast.Description, {
        ref: ref,
        className: (0, _utils.cn)("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = _reacttoast.Description.displayName;

