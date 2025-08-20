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
    get Breadcrumb () {
        return Breadcrumb;
    },
    get BreadcrumbEllipsis () {
        return BreadcrumbEllipsis;
    },
    get BreadcrumbItem () {
        return BreadcrumbItem;
    },
    get BreadcrumbLink () {
        return BreadcrumbLink;
    },
    get BreadcrumbList () {
        return BreadcrumbList;
    },
    get BreadcrumbPage () {
        return BreadcrumbPage;
    },
    get BreadcrumbSeparator () {
        return BreadcrumbSeparator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactslot = require("@radix-ui/react-slot");
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
function Breadcrumb({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("nav", {
        "aria-label": "breadcrumb",
        "data-slot": "breadcrumb",
        ...props
    });
}
function BreadcrumbList({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("ol", {
        "data-slot": "breadcrumb-list",
        className: (0, _utils.cn)("text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5", className),
        ...props
    });
}
function BreadcrumbItem({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
        "data-slot": "breadcrumb-item",
        className: (0, _utils.cn)("inline-flex items-center gap-1.5", className),
        ...props
    });
}
function BreadcrumbLink({ asChild, className, ...props }) {
    const Comp = asChild ? _reactslot.Slot : "a";
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Comp, {
        "data-slot": "breadcrumb-link",
        className: (0, _utils.cn)("hover:text-foreground transition-colors", className),
        ...props
    });
}
function BreadcrumbPage({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        "data-slot": "breadcrumb-page",
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: (0, _utils.cn)("text-foreground font-normal", className),
        ...props
    });
}
function BreadcrumbSeparator({ children, className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
        "data-slot": "breadcrumb-separator",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, _utils.cn)("[&>svg]:size-3.5", className),
        ...props,
        children: children ?? /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronRight, {})
    });
}
function BreadcrumbEllipsis({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
        "data-slot": "breadcrumb-ellipsis",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, _utils.cn)("flex size-9 items-center justify-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.MoreHorizontal, {
                className: "size-4"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "sr-only",
                children: "More"
            })
        ]
    });
}

