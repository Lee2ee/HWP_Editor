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
    get Form () {
        return Form;
    },
    get FormControl () {
        return FormControl;
    },
    get FormDescription () {
        return FormDescription;
    },
    get FormField () {
        return FormField;
    },
    get FormItem () {
        return FormItem;
    },
    get FormLabel () {
        return FormLabel;
    },
    get FormMessage () {
        return FormMessage;
    },
    get useFormField () {
        return useFormField;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = /*#__PURE__*/ _interop_require_wildcard(require("react"));
const _reactslot = require("@radix-ui/react-slot");
const _reacthookform = require("react-hook-form");
const _utils = require("@/lib/utils");
const _label = require("@/components/ui/label");
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
const Form = _reacthookform.FormProvider;
const FormFieldContext = /*#__PURE__*/ _react.createContext({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_reacthookform.Controller, {
            ...props
        })
    });
};
const useFormField = ()=>{
    const fieldContext = _react.useContext(FormFieldContext);
    const itemContext = _react.useContext(FormItemContext);
    const { getFieldState } = (0, _reacthookform.useFormContext)();
    const formState = (0, _reacthookform.useFormState)({
        name: fieldContext.name
    });
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
const FormItemContext = /*#__PURE__*/ _react.createContext({});
function FormItem({ className, ...props }) {
    const id = _react.useId();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            "data-slot": "form-item",
            className: (0, _utils.cn)("grid gap-2", className),
            ...props
        })
    });
}
function FormLabel({ className, ...props }) {
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_label.Label, {
        "data-slot": "form-label",
        "data-error": !!error,
        className: (0, _utils.cn)("data-[error=true]:text-destructive", className),
        htmlFor: formItemId,
        ...props
    });
}
function FormControl({ ...props }) {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_reactslot.Slot, {
        "data-slot": "form-control",
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    });
}
function FormDescription({ className, ...props }) {
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
        "data-slot": "form-description",
        id: formDescriptionId,
        className: (0, _utils.cn)("text-muted-foreground text-sm", className),
        ...props
    });
}
function FormMessage({ className, ...props }) {
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message ?? "") : props.children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
        "data-slot": "form-message",
        id: formMessageId,
        className: (0, _utils.cn)("text-destructive text-sm", className),
        ...props,
        children: body
    });
}

