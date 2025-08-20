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
    get Carousel () {
        return Carousel;
    },
    get CarouselContent () {
        return CarouselContent;
    },
    get CarouselItem () {
        return CarouselItem;
    },
    get CarouselNext () {
        return CarouselNext;
    },
    get CarouselPrevious () {
        return CarouselPrevious;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _emblacarouselreact = /*#__PURE__*/ _interop_require_default(require("embla-carousel-react"));
const _lucidereact = require("lucide-react");
const _utils = require("@/lib/utils");
const _button = require("@/components/ui/button");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const CarouselContext = /*#__PURE__*/ _react.createContext(null);
function useCarousel() {
    const context = _react.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}
function Carousel({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }) {
    const [carouselRef, api] = (0, _emblacarouselreact.default)({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    const [canScrollPrev, setCanScrollPrev] = _react.useState(false);
    const [canScrollNext, setCanScrollNext] = _react.useState(false);
    const onSelect = _react.useCallback((api)=>{
        if (!api) return;
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);
    const scrollPrev = _react.useCallback(()=>{
        api?.scrollPrev();
    }, [
        api
    ]);
    const scrollNext = _react.useCallback(()=>{
        api?.scrollNext();
    }, [
        api
    ]);
    const handleKeyDown = _react.useCallback((event)=>{
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollPrev();
        } else if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollNext();
        }
    }, [
        scrollPrev,
        scrollNext
    ]);
    _react.useEffect(()=>{
        if (!api || !setApi) return;
        setApi(api);
    }, [
        api,
        setApi
    ]);
    _react.useEffect(()=>{
        if (!api) return;
        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);
        return ()=>{
            api?.off("select", onSelect);
        };
    }, [
        api,
        onSelect
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(CarouselContext.Provider, {
        value: {
            carouselRef,
            api: api,
            opts,
            orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
            scrollPrev,
            scrollNext,
            canScrollPrev,
            canScrollNext
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            onKeyDownCapture: handleKeyDown,
            className: (0, _utils.cn)("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            "data-slot": "carousel",
            ...props,
            children: children
        })
    });
}
function CarouselContent({ className, ...props }) {
    const { carouselRef, orientation } = useCarousel();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        ref: carouselRef,
        className: "overflow-hidden",
        "data-slot": "carousel-content",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: (0, _utils.cn)("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
            ...props
        })
    });
}
function CarouselItem({ className, ...props }) {
    const { orientation } = useCarousel();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        role: "group",
        "aria-roledescription": "slide",
        "data-slot": "carousel-item",
        className: (0, _utils.cn)("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
        ...props
    });
}
function CarouselPrevious({ className, variant = "outline", size = "icon", ...props }) {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_button.Button, {
        "data-slot": "carousel-previous",
        variant: variant,
        size: size,
        className: (0, _utils.cn)("absolute size-8 rounded-full", orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ArrowLeft, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "sr-only",
                children: "Previous slide"
            })
        ]
    });
}
function CarouselNext({ className, variant = "outline", size = "icon", ...props }) {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_button.Button, {
        "data-slot": "carousel-next",
        variant: variant,
        size: size,
        className: (0, _utils.cn)("absolute size-8 rounded-full", orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ArrowRight, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "sr-only",
                children: "Next slide"
            })
        ]
    });
}

