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
    get Popover () {
        return Popover;
    },
    get PopoverAnchor () {
        return PopoverAnchor;
    },
    get PopoverContent () {
        return PopoverContent;
    },
    get PopoverTrigger () {
        return PopoverTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactpopover = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-popover"));
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
function Popover({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactpopover.Root, {
        "data-slot": "popover",
        ...props
    });
}
function PopoverTrigger({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactpopover.Trigger, {
        "data-slot": "popover-trigger",
        ...props
    });
}
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactpopover.Portal, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactpopover.Content, {
            "data-slot": "popover-content",
            align: align,
            sideOffset: sideOffset,
            className: (0, _utils.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden", className),
            ...props
        })
    });
}
function PopoverAnchor({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactpopover.Anchor, {
        "data-slot": "popover-anchor",
        ...props
    });
}

