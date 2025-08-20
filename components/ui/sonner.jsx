"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Toaster", {
    enumerable: true,
    get: function() {
        return Toaster;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _nextthemes = require("next-themes");
const _sonner = require("sonner");
const Toaster = ({ ...props })=>{
    const { theme = "system" } = (0, _nextthemes.useTheme)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sonner.Toaster, {
        theme: theme,
        className: "toaster group",
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)"
        },
        ...props
    });
};

