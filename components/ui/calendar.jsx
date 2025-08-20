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
    get Calendar () {
        return Calendar;
    },
    get CalendarDayButton () {
        return CalendarDayButton;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _lucidereact = require("lucide-react");
const _reactdaypicker = require("react-day-picker");
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
function Calendar({ className, classNames, showOutsideDays = true, captionLayout = "label", buttonVariant = "ghost", formatters, components, ...props }) {
    const defaultClassNames = (0, _reactdaypicker.getDefaultClassNames)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactdaypicker.DayPicker, {
        showOutsideDays: showOutsideDays,
        className: (0, _utils.cn)("bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent", String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`, String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`, className),
        captionLayout: captionLayout,
        formatters: {
            formatMonthDropdown: (date)=>date.toLocaleString("default", {
                    month: "short"
                }),
            ...formatters
        },
        classNames: {
            root: (0, _utils.cn)("w-fit", defaultClassNames.root),
            months: (0, _utils.cn)("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
            month: (0, _utils.cn)("flex flex-col w-full gap-4", defaultClassNames.month),
            nav: (0, _utils.cn)("flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between", defaultClassNames.nav),
            button_previous: (0, _utils.cn)((0, _button.buttonVariants)({
                variant: buttonVariant
            }), "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none", defaultClassNames.button_previous),
            button_next: (0, _utils.cn)((0, _button.buttonVariants)({
                variant: buttonVariant
            }), "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none", defaultClassNames.button_next),
            month_caption: (0, _utils.cn)("flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)", defaultClassNames.month_caption),
            dropdowns: (0, _utils.cn)("w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5", defaultClassNames.dropdowns),
            dropdown_root: (0, _utils.cn)("relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md", defaultClassNames.dropdown_root),
            dropdown: (0, _utils.cn)("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
            caption_label: (0, _utils.cn)("select-none font-medium", captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5", defaultClassNames.caption_label),
            table: "w-full border-collapse",
            weekdays: (0, _utils.cn)("flex", defaultClassNames.weekdays),
            weekday: (0, _utils.cn)("text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none", defaultClassNames.weekday),
            week: (0, _utils.cn)("flex w-full mt-2", defaultClassNames.week),
            week_number_header: (0, _utils.cn)("select-none w-(--cell-size)", defaultClassNames.week_number_header),
            week_number: (0, _utils.cn)("text-[0.8rem] select-none text-muted-foreground", defaultClassNames.week_number),
            day: (0, _utils.cn)("relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none", defaultClassNames.day),
            range_start: (0, _utils.cn)("rounded-l-md bg-accent", defaultClassNames.range_start),
            range_middle: (0, _utils.cn)("rounded-none", defaultClassNames.range_middle),
            range_end: (0, _utils.cn)("rounded-r-md bg-accent", defaultClassNames.range_end),
            today: (0, _utils.cn)("bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none", defaultClassNames.today),
            outside: (0, _utils.cn)("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
            disabled: (0, _utils.cn)("text-muted-foreground opacity-50", defaultClassNames.disabled),
            hidden: (0, _utils.cn)("invisible", defaultClassNames.hidden),
            ...classNames
        },
        components: {
            Root: ({ className, rootRef, ...props })=>{
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    "data-slot": "calendar",
                    ref: rootRef,
                    className: (0, _utils.cn)(className),
                    ...props
                });
            },
            Chevron: ({ className, orientation, ...props })=>{
                if (orientation === "left") {
                    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronLeftIcon, {
                        className: (0, _utils.cn)("size-4", className),
                        ...props
                    });
                }
                if (orientation === "right") {
                    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronRightIcon, {
                        className: (0, _utils.cn)("size-4", className),
                        ...props
                    });
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.ChevronDownIcon, {
                    className: (0, _utils.cn)("size-4", className),
                    ...props
                });
            },
            DayButton: CalendarDayButton,
            WeekNumber: ({ children, ...props })=>{
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("td", {
                    ...props,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "flex size-(--cell-size) items-center justify-center text-center",
                        children: children
                    })
                });
            },
            ...components
        },
        ...props
    });
}
function CalendarDayButton({ className, day, modifiers, ...props }) {
    const defaultClassNames = (0, _reactdaypicker.getDefaultClassNames)();
    const ref = _react.useRef(null);
    _react.useEffect(()=>{
        if (modifiers.focused) ref.current?.focus();
    }, [
        modifiers.focused
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_button.Button, {
        ref: ref,
        variant: "ghost",
        size: "icon",
        "data-day": day.date.toLocaleDateString(),
        "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
        "data-range-start": modifiers.range_start,
        "data-range-end": modifiers.range_end,
        "data-range-middle": modifiers.range_middle,
        className: (0, _utils.cn)("data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70", defaultClassNames.day, className),
        ...props
    });
}

