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
    get ScrollArea () {
        return ScrollArea;
    },
    get ScrollBar () {
        return ScrollBar;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactscrollarea = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-scroll-area"));
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
function ScrollArea({ className, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactscrollarea.Root, {
        "data-slot": "scroll-area",
        className: (0, _utils.cn)("relative", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactscrollarea.Viewport, {
                "data-slot": "scroll-area-viewport",
                className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
                children: children
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ScrollBar, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactscrollarea.Corner, {})
        ]
    });
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactscrollarea.ScrollAreaScrollbar, {
        "data-slot": "scroll-area-scrollbar",
        orientation: orientation,
        className: (0, _utils.cn)("flex touch-none p-px transition-colors select-none", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent", className),
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactscrollarea.ScrollAreaThumb, {
            "data-slot": "scroll-area-thumb",
            className: "bg-border relative flex-1 rounded-full"
        })
    });
}

