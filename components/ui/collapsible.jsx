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
    get Collapsible () {
        return Collapsible;
    },
    get CollapsibleContent () {
        return CollapsibleContent;
    },
    get CollapsibleTrigger () {
        return CollapsibleTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _reactcollapsible = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-collapsible"));
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
function Collapsible({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactcollapsible.Root, {
        "data-slot": "collapsible",
        ...props
    });
}
function CollapsibleTrigger({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactcollapsible.CollapsibleTrigger, {
        "data-slot": "collapsible-trigger",
        ...props
    });
}
function CollapsibleContent({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactcollapsible.CollapsibleContent, {
        "data-slot": "collapsible-content",
        ...props
    });
}

