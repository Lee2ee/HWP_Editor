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
    get DropdownMenu () {
        return DropdownMenu;
    },
    get DropdownMenuCheckboxItem () {
        return DropdownMenuCheckboxItem;
    },
    get DropdownMenuContent () {
        return DropdownMenuContent;
    },
    get DropdownMenuGroup () {
        return DropdownMenuGroup;
    },
    get DropdownMenuItem () {
        return DropdownMenuItem;
    },
    get DropdownMenuLabel () {
        return DropdownMenuLabel;
    },
    get DropdownMenuPortal () {
        return DropdownMenuPortal;
    },
    get DropdownMenuRadioGroup () {
        return DropdownMenuRadioGroup;
    },
    get DropdownMenuRadioItem () {
        return DropdownMenuRadioItem;
    },
    get DropdownMenuSeparator () {
        return DropdownMenuSeparator;
    },
    get DropdownMenuShortcut () {
        return DropdownMenuShortcut;
    },
    get DropdownMenuSub () {
        return DropdownMenuSub;
    },
    get DropdownMenuSubContent () {
        return DropdownMenuSubContent;
    },
    get DropdownMenuSubTrigger () {
        return DropdownMenuSubTrigger;
    },
    get DropdownMenuTrigger () {
        return DropdownMenuTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactdropdownmenu = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-dropdown-menu"));
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
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Root, {
        "data-slot": "dropdown-menu",
        ...props
    });
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Portal, {
        "data-slot": "dropdown-menu-portal",
        ...props
    });
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Trigger, {
        "data-slot": "dropdown-menu-trigger",
        ...props
    });
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Portal, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Content, {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, _utils.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        })
    });
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Group, {
        "data-slot": "dropdown-menu-group",
        ...props
    });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Item, {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    });
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactdropdownmenu.CheckboxItem, {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.ItemIndicator, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.CheckIcon, {
                        className: "size-4"
                    })
                })
            }),
            children
        ]
    });
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.RadioGroup, {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    });
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactdropdownmenu.RadioItem, {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.ItemIndicator, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.CircleIcon, {
                        className: "size-2 fill-current"
                    })
                })
            }),
            children
        ]
    });
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Label, {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, _utils.cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    });
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Separator, {
        "data-slot": "dropdown-menu-separator",
        className: (0, _utils.cn)("bg-border -mx-1 my-1 h-px", className),
        ...props
    });
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, _utils.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    });
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.Sub, {
        "data-slot": "dropdown-menu-sub",
        ...props
    });
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactdropdownmenu.SubTrigger, {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronRightIcon, {
                className: "ml-auto size-4"
            })
        ]
    });
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdropdownmenu.SubContent, {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, _utils.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    });
}

