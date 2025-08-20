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
    get Pagination () {
        return Pagination;
    },
    get PaginationContent () {
        return PaginationContent;
    },
    get PaginationEllipsis () {
        return PaginationEllipsis;
    },
    get PaginationItem () {
        return PaginationItem;
    },
    get PaginationLink () {
        return PaginationLink;
    },
    get PaginationNext () {
        return PaginationNext;
    },
    get PaginationPrevious () {
        return PaginationPrevious;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _lucidereact = require("lucide-react");
const _utils = require("@/lib/utils");
const _button = require("@/components/ui/button");
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
function Pagination({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("nav", {
        role: "navigation",
        "aria-label": "pagination",
        "data-slot": "pagination",
        className: (0, _utils.cn)("mx-auto flex w-full justify-center", className),
        ...props
    });
}
function PaginationContent({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("ul", {
        "data-slot": "pagination-content",
        className: (0, _utils.cn)("flex flex-row items-center gap-1", className),
        ...props
    });
}
function PaginationItem({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
        "data-slot": "pagination-item",
        ...props
    });
}
function PaginationLink({ className, isActive, size = "icon", ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        "aria-current": isActive ? "page" : undefined,
        "data-slot": "pagination-link",
        "data-active": isActive,
        className: (0, _utils.cn)((0, _button.buttonVariants)({
            variant: isActive ? "outline" : "ghost",
            size
        }), className),
        ...props
    });
}
function PaginationPrevious({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(PaginationLink, {
        "aria-label": "Go to previous page",
        size: "default",
        className: (0, _utils.cn)("gap-1 px-2.5 sm:pl-2.5", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronLeftIcon, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "hidden sm:block",
                children: "Previous"
            })
        ]
    });
}
function PaginationNext({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(PaginationLink, {
        "aria-label": "Go to next page",
        size: "default",
        className: (0, _utils.cn)("gap-1 px-2.5 sm:pr-2.5", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "hidden sm:block",
                children: "Next"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronRightIcon, {})
        ]
    });
}
function PaginationEllipsis({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
        "aria-hidden": true,
        "data-slot": "pagination-ellipsis",
        className: (0, _utils.cn)("flex size-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.MoreHorizontalIcon, {
                className: "size-4"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "sr-only",
                children: "More pages"
            })
        ]
    });
}

