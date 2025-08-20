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
    get ToggleGroup () {
        return ToggleGroup;
    },
    get ToggleGroupItem () {
        return ToggleGroupItem;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacttogglegroup = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-toggle-group"));
const _utils = require("@/lib/utils");
const _toggle = require("@/components/ui/toggle");
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
const ToggleGroupContext = /*#__PURE__*/ _react.createContext({
    size: "default",
    variant: "default"
});
function ToggleGroup({ className, variant, size, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttogglegroup.Root, {
        "data-slot": "toggle-group",
        "data-variant": variant,
        "data-size": size,
        className: (0, _utils.cn)("group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs", className),
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ToggleGroupContext.Provider, {
            value: {
                variant,
                size
            },
            children: children
        })
    });
}
function ToggleGroupItem({ className, children, variant, size, ...props }) {
    const context = _react.useContext(ToggleGroupContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttogglegroup.Item, {
        "data-slot": "toggle-group-item",
        "data-variant": context.variant || variant,
        "data-size": context.size || size,
        className: (0, _utils.cn)((0, _toggle.toggleVariants)({
            variant: context.variant || variant,
            size: context.size || size
        }), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", className),
        ...props,
        children: children
    });
}

