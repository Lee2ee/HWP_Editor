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
    get ResizableHandle () {
        return ResizableHandle;
    },
    get ResizablePanel () {
        return ResizablePanel;
    },
    get ResizablePanelGroup () {
        return ResizablePanelGroup;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _lucidereact = require("lucide-react");
const _reactresizablepanels = /*#__PURE__*/ _interop_require_wildcard(require("react-resizable-panels"));
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
function ResizablePanelGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactresizablepanels.PanelGroup, {
        "data-slot": "resizable-panel-group",
        className: (0, _utils.cn)("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
        ...props
    });
}
function ResizablePanel({ ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactresizablepanels.Panel, {
        "data-slot": "resizable-panel",
        ...props
    });
}
function ResizableHandle({ withHandle, className, ...props }) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactresizablepanels.PanelResizeHandle, {
        "data-slot": "resizable-handle",
        className: (0, _utils.cn)("bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90", className),
        ...props,
        children: withHandle && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.GripVerticalIcon, {
                className: "size-2.5"
            })
        })
    });
}

