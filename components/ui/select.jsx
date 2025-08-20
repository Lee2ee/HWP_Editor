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
    get Select () {
        return Select;
    },
    get SelectContent () {
        return SelectContent;
    },
    get SelectGroup () {
        return SelectGroup;
    },
    get SelectItem () {
        return SelectItem;
    },
    get SelectLabel () {
        return SelectLabel;
    },
    get SelectScrollDownButton () {
        return SelectScrollDownButton;
    },
    get SelectScrollUpButton () {
        return SelectScrollUpButton;
    },
    get SelectSeparator () {
        return SelectSeparator;
    },
    get SelectTrigger () {
        return SelectTrigger;
    },
    get SelectValue () {
        return SelectValue;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactselect = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-select"));
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
function Select({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.Root, {
        "data-slot": "select",
        ...props
    });
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.Group, {
        "data-slot": "select-group",
        ...props
    });
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.Value, {
        "data-slot": "select-value",
        ...props
    });
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactselect.Trigger, {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, _utils.cn)("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.Icon, {
                asChild: true,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronDownIcon, {
                    className: "size-4 opacity-50"
                })
            })
        ]
    });
}
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.Portal, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactselect.Content, {
            "data-slot": "select-content",
            className: (0, _utils.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(SelectScrollUpButton, {}),
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.Viewport, {
                    className: (0, _utils.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)(SelectScrollDownButton, {})
            ]
        })
    });
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.Label, {
        "data-slot": "select-label",
        className: (0, _utils.cn)("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    });
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactselect.Item, {
        "data-slot": "select-item",
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.ItemIndicator, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.CheckIcon, {
                        className: "size-4"
                    })
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.ItemText, {
                children: children
            })
        ]
    });
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.Separator, {
        "data-slot": "select-separator",
        className: (0, _utils.cn)("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    });
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.ScrollUpButton, {
        "data-slot": "select-scroll-up-button",
        className: (0, _utils.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronUpIcon, {
            className: "size-4"
        })
    });
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactselect.ScrollDownButton, {
        "data-slot": "select-scroll-down-button",
        className: (0, _utils.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronDownIcon, {
            className: "size-4"
        })
    });
}

