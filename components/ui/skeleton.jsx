"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Skeleton", {
    enumerable: true,
    get: function() {
        return Skeleton;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _utils = require("@/lib/utils");
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "skeleton",
        className: (0, _utils.cn)("bg-accent animate-pulse rounded-md", className),
        ...props
    });
}

