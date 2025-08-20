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
    get Drawer () {
        return Drawer;
    },
    get DrawerClose () {
        return DrawerClose;
    },
    get DrawerContent () {
        return DrawerContent;
    },
    get DrawerDescription () {
        return DrawerDescription;
    },
    get DrawerFooter () {
        return DrawerFooter;
    },
    get DrawerHeader () {
        return DrawerHeader;
    },
    get DrawerOverlay () {
        return DrawerOverlay;
    },
    get DrawerPortal () {
        return DrawerPortal;
    },
    get DrawerTitle () {
        return DrawerTitle;
    },
    get DrawerTrigger () {
        return DrawerTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _vaul = require("vaul");
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
function Drawer({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_vaul.Drawer.Root, {
        "data-slot": "drawer",
        ...props
    });
}
function DrawerTrigger({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_vaul.Drawer.Trigger, {
        "data-slot": "drawer-trigger",
        ...props
    });
}
function DrawerPortal({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_vaul.Drawer.Portal, {
        "data-slot": "drawer-portal",
        ...props
    });
}
function DrawerClose({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_vaul.Drawer.Close, {
        "data-slot": "drawer-close",
        ...props
    });
}
function DrawerOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_vaul.Drawer.Overlay, {
        "data-slot": "drawer-overlay",
        className: (0, _utils.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    });
}
function DrawerContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(DrawerPortal, {
        "data-slot": "drawer-portal",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(DrawerOverlay, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_vaul.Drawer.Content, {
                "data-slot": "drawer-content",
                className: (0, _utils.cn)("group/drawer-content bg-background fixed z-50 flex h-auto flex-col", "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b", "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t", "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm", "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm", className),
                ...props,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block"
                    }),
                    children
                ]
            })
        ]
    });
}
function DrawerHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "drawer-header",
        className: (0, _utils.cn)("flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left", className),
        ...props
    });
}
function DrawerFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "drawer-footer",
        className: (0, _utils.cn)("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    });
}
function DrawerTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_vaul.Drawer.Title, {
        "data-slot": "drawer-title",
        className: (0, _utils.cn)("text-foreground font-semibold", className),
        ...props
    });
}
function DrawerDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_vaul.Drawer.Description, {
        "data-slot": "drawer-description",
        className: (0, _utils.cn)("text-muted-foreground text-sm", className),
        ...props
    });
}

