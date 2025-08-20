"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Slider", {
    enumerable: true,
    get: function() {
        return Slider;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactslider = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-slider"));
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
function Slider({ className, defaultValue, value, min = 0, max = 100, ...props }) {
    const _values = _react.useMemo(()=>Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [
            min,
            max
        ], [
        value,
        defaultValue,
        min,
        max
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactslider.Root, {
        "data-slot": "slider",
        defaultValue: defaultValue,
        value: value,
        min: min,
        max: max,
        className: (0, _utils.cn)("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactslider.Track, {
                "data-slot": "slider-track",
                className: (0, _utils.cn)("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactslider.Range, {
                    "data-slot": "slider-range",
                    className: (0, _utils.cn)("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")
                })
            }),
            Array.from({
                length: _values.length
            }, (_, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_reactslider.Thumb, {
                    "data-slot": "slider-thumb",
                    className: "border-primary bg-background ring-ring/50 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
                }, index))
        ]
    });
}

