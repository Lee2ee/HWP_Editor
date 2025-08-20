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
    get Table () {
        return Table;
    },
    get TableBody () {
        return TableBody;
    },
    get TableCaption () {
        return TableCaption;
    },
    get TableCell () {
        return TableCell;
    },
    get TableFooter () {
        return TableFooter;
    },
    get TableHead () {
        return TableHead;
    },
    get TableHeader () {
        return TableHeader;
    },
    get TableRow () {
        return TableRow;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
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
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("table", {
            "data-slot": "table",
            className: (0, _utils.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    });
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("thead", {
        "data-slot": "table-header",
        className: (0, _utils.cn)("[&_tr]:border-b", className),
        ...props
    });
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("tbody", {
        "data-slot": "table-body",
        className: (0, _utils.cn)("[&_tr:last-child]:border-0", className),
        ...props
    });
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("tfoot", {
        "data-slot": "table-footer",
        className: (0, _utils.cn)("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    });
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("tr", {
        "data-slot": "table-row",
        className: (0, _utils.cn)("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    });
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("th", {
        "data-slot": "table-head",
        className: (0, _utils.cn)("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    });
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("td", {
        "data-slot": "table-cell",
        className: (0, _utils.cn)("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    });
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("caption", {
        "data-slot": "table-caption",
        className: (0, _utils.cn)("text-muted-foreground mt-4 text-sm", className),
        ...props
    });
}

