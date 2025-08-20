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
    get Accordion () {
        return Accordion;
    },
    get AccordionContent () {
        return AccordionContent;
    },
    get AccordionItem () {
        return AccordionItem;
    },
    get AccordionTrigger () {
        return AccordionTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactaccordion = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-accordion"));
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
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactaccordion.Root, {
        "data-slot": "accordion",
        ...props
    });
}
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactaccordion.Item, {
        "data-slot": "accordion-item",
        className: (0, _utils.cn)("border-b last:border-b-0", className),
        ...props
    });
}
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactaccordion.Header, {
        className: "flex",
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactaccordion.Trigger, {
            "data-slot": "accordion-trigger",
            className: (0, _utils.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronDownIcon, {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                })
            ]
        })
    });
}
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactaccordion.Content, {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: (0, _utils.cn)("pt-0 pb-4", className),
            children: children
        })
    });
}

