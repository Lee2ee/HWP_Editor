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
    get Tooltip () {
        return Tooltip;
    },
    get TooltipContent () {
        return TooltipContent;
    },
    get TooltipProvider () {
        return TooltipProvider;
    },
    get TooltipTrigger () {
        return TooltipTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacttooltip = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-tooltip"));
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
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttooltip.Provider, {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    });
}
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(TooltipProvider, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttooltip.Root, {
            "data-slot": "tooltip",
            ...props
        })
    });
}
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttooltip.Trigger, {
        "data-slot": "tooltip-trigger",
        ...props
    });
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttooltip.Portal, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reacttooltip.Content, {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, _utils.cn)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttooltip.Arrow, {
                    className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                })
            ]
        })
    });
}

