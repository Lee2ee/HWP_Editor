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
    get Menubar () {
        return Menubar;
    },
    get MenubarCheckboxItem () {
        return MenubarCheckboxItem;
    },
    get MenubarContent () {
        return MenubarContent;
    },
    get MenubarGroup () {
        return MenubarGroup;
    },
    get MenubarItem () {
        return MenubarItem;
    },
    get MenubarLabel () {
        return MenubarLabel;
    },
    get MenubarMenu () {
        return MenubarMenu;
    },
    get MenubarPortal () {
        return MenubarPortal;
    },
    get MenubarRadioGroup () {
        return MenubarRadioGroup;
    },
    get MenubarRadioItem () {
        return MenubarRadioItem;
    },
    get MenubarSeparator () {
        return MenubarSeparator;
    },
    get MenubarShortcut () {
        return MenubarShortcut;
    },
    get MenubarSub () {
        return MenubarSub;
    },
    get MenubarSubContent () {
        return MenubarSubContent;
    },
    get MenubarSubTrigger () {
        return MenubarSubTrigger;
    },
    get MenubarTrigger () {
        return MenubarTrigger;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactmenubar = /*#__PURE__*/ _interop_require_wildcard(require("@radix-ui/react-menubar"));
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
function Menubar({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Root, {
        "data-slot": "menubar",
        className: (0, _utils.cn)("bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs", className),
        ...props
    });
}
function MenubarMenu({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Menu, {
        "data-slot": "menubar-menu",
        ...props
    });
}
function MenubarGroup({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Group, {
        "data-slot": "menubar-group",
        ...props
    });
}
function MenubarPortal({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Portal, {
        "data-slot": "menubar-portal",
        ...props
    });
}
function MenubarRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.RadioGroup, {
        "data-slot": "menubar-radio-group",
        ...props
    });
}
function MenubarTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Trigger, {
        "data-slot": "menubar-trigger",
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none", className),
        ...props
    });
}
function MenubarContent({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(MenubarPortal, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Content, {
            "data-slot": "menubar-content",
            align: align,
            alignOffset: alignOffset,
            sideOffset: sideOffset,
            className: (0, _utils.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md", className),
            ...props
        })
    });
}
function MenubarItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Item, {
        "data-slot": "menubar-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    });
}
function MenubarCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactmenubar.CheckboxItem, {
        "data-slot": "menubar-checkbox-item",
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.ItemIndicator, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.CheckIcon, {
                        className: "size-4"
                    })
                })
            }),
            children
        ]
    });
}
function MenubarRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactmenubar.RadioItem, {
        "data-slot": "menubar-radio-item",
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.ItemIndicator, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.CircleIcon, {
                        className: "size-2 fill-current"
                    })
                })
            }),
            children
        ]
    });
}
function MenubarLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Label, {
        "data-slot": "menubar-label",
        "data-inset": inset,
        className: (0, _utils.cn)("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    });
}
function MenubarSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Separator, {
        "data-slot": "menubar-separator",
        className: (0, _utils.cn)("bg-border -mx-1 my-1 h-px", className),
        ...props
    });
}
function MenubarShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        "data-slot": "menubar-shortcut",
        className: (0, _utils.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    });
}
function MenubarSub({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.Sub, {
        "data-slot": "menubar-sub",
        ...props
    });
}
function MenubarSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_reactmenubar.SubTrigger, {
        "data-slot": "menubar-sub-trigger",
        "data-inset": inset,
        className: (0, _utils.cn)("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronRightIcon, {
                className: "ml-auto h-4 w-4"
            })
        ]
    });
}
function MenubarSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactmenubar.SubContent, {
        "data-slot": "menubar-sub-content",
        className: (0, _utils.cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    });
}

