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
const _usetoast = require("@/hooks/use-toast");
const _toast = require("@/components/ui/toast");
function Toaster() {
    const { toasts } = (0, _usetoast.useToast)();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_toast.ToastProvider, {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_toast.Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, _jsxruntime.jsx)(_toast.ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ (0, _jsxruntime.jsx)(_toast.ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_toast.ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_toast.ToastViewport, {})
        ]
    });
}

