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
    get Avatar () {
        return Avatar;
    },
    get AvatarFallback () {
        return AvatarFallback;
    },
    get AvatarImage () {
        return AvatarImage;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactavatar = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-avatar"));
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
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactavatar.Root, {
        "data-slot": "avatar",
        className: (0, _utils.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
        ...props
    });
}
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactavatar.Image, {
        "data-slot": "avatar-image",
        className: (0, _utils.cn)("aspect-square size-full", className),
        ...props
    });
}
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactavatar.Fallback, {
        "data-slot": "avatar-fallback",
        className: (0, _utils.cn)("bg-muted flex size-full items-center justify-center rounded-full", className),
        ...props
    });
}

