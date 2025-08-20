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
    get Command () {
        return Command;
    },
    get CommandDialog () {
        return CommandDialog;
    },
    get CommandEmpty () {
        return CommandEmpty;
    },
    get CommandGroup () {
        return CommandGroup;
    },
    get CommandInput () {
        return CommandInput;
    },
    get CommandItem () {
        return CommandItem;
    },
    get CommandList () {
        return CommandList;
    },
    get CommandSeparator () {
        return CommandSeparator;
    },
    get CommandShortcut () {
        return CommandShortcut;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _cmdk = require("cmdk");
const _lucidereact = require("lucide-react");
const _utils = require("@/lib/utils");
const _dialog = require("@/components/ui/dialog");
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
function Command({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_cmdk.Command, {
        "data-slot": "command",
        className: (0, _utils.cn)("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className),
        ...props
    });
}
function CommandDialog({ title = "Command Palette", description = "Search for a command to run...", children, className, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_dialog.Dialog, {
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_dialog.DialogHeader, {
                className: "sr-only",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_dialog.DialogTitle, {
                        children: title
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_dialog.DialogDescription, {
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_dialog.DialogContent, {
                className: (0, _utils.cn)("overflow-hidden p-0", className),
                showCloseButton: showCloseButton,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Command, {
                    className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                    children: children
                })
            })
        ]
    });
}
function CommandInput({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-slot": "command-input-wrapper",
        className: "flex h-9 items-center gap-2 border-b px-3",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.SearchIcon, {
                className: "size-4 shrink-0 opacity-50"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_cmdk.Command.Input, {
                "data-slot": "command-input",
                className: (0, _utils.cn)("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            })
        ]
    });
}
function CommandList({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_cmdk.Command.List, {
        "data-slot": "command-list",
        className: (0, _utils.cn)("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
        ...props
    });
}
function CommandEmpty({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_cmdk.Command.Empty, {
        "data-slot": "command-empty",
        className: "py-6 text-center text-sm",
        ...props
    });
}
function CommandGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_cmdk.Command.Group, {
        "data-slot": "command-group",
        className: (0, _utils.cn)("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className),
        ...props
    });
}
function CommandSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_cmdk.Command.Separator, {
        "data-slot": "command-separator",
        className: (0, _utils.cn)("bg-border -mx-1 h-px", className),
        ...props
    });
}
function CommandItem({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_cmdk.Command.Item, {
        "data-slot": "command-item",
        className: (0, _utils.cn)("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    });
}
function CommandShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        "data-slot": "command-shortcut",
        className: (0, _utils.cn)("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    });
}

