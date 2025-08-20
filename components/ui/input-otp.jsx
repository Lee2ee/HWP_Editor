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
    get InputOTP () {
        return InputOTP;
    },
    get InputOTPGroup () {
        return InputOTPGroup;
    },
    get InputOTPSeparator () {
        return InputOTPSeparator;
    },
    get InputOTPSlot () {
        return InputOTPSlot;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _inputotp = require("input-otp");
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
function InputOTP({ className, containerClassName, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_inputotp.OTPInput, {
        "data-slot": "input-otp",
        containerClassName: (0, _utils.cn)("flex items-center gap-2 has-disabled:opacity-50", containerClassName),
        className: (0, _utils.cn)("disabled:cursor-not-allowed", className),
        ...props
    });
}
function InputOTPGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "input-otp-group",
        className: (0, _utils.cn)("flex items-center", className),
        ...props
    });
}
function InputOTPSlot({ index, className, ...props }) {
    const inputOTPContext = _react.useContext(_inputotp.OTPInputContext);
    const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-slot": "input-otp-slot",
        "data-active": isActive,
        className: (0, _utils.cn)("data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]", className),
        ...props,
        children: [
            char,
            hasFakeCaret && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: "animate-caret-blink bg-foreground h-4 w-px duration-1000"
                })
            })
        ]
    });
}
function InputOTPSeparator({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "input-otp-separator",
        role: "separator",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.MinusIcon, {})
    });
}

