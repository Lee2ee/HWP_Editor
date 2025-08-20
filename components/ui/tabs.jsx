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
    get Tabs () {
        return Tabs;
    },
    get TabsContent () {
        return TabsContent;
    },
    get TabsList () {
        return TabsList;
    },
    get TabsTrigger () {
        return TabsTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reacttabs = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-tabs"));
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
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttabs.Root, {
        "data-slot": "tabs",
        className: (0, _utils.cn)("flex flex-col gap-2", className),
        ...props
    });
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttabs.List, {
        "data-slot": "tabs-list",
        className: (0, _utils.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className),
        ...props
    });
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttabs.Trigger, {
        "data-slot": "tabs-trigger",
        className: (0, _utils.cn)("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    });
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacttabs.Content, {
        "data-slot": "tabs-content",
        className: (0, _utils.cn)("flex-1 outline-none", className),
        ...props
    });
}

