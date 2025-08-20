"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FileUploader", {
    enumerable: true,
    get: function() {
        return FileUploader;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _reactdropzone = require("react-dropzone");
const _card = require("@/components/ui/card");
const _button = require("@/components/ui/button");
const _lucidereact = require("lucide-react");
const _utils = require("@/lib/utils");
function FileUploader({ onFileSelect, selectedFile, disabled = false }) {
    const [dragActive, setDragActive] = (0, _react.useState)(false);
    const onDrop = (0, _react.useCallback)((acceptedFiles)=>{
        if (acceptedFiles.length > 0 && !disabled) {
            onFileSelect(acceptedFiles[0]);
        }
    }, [
        onFileSelect,
        disabled
    ]);
    const { getRootProps, getInputProps, isDragActive } = (0, _reactdropzone.useDropzone)({
        onDrop,
        accept: {
            "application/x-hwp": [
                ".hwp"
            ],
            "application/haansofthwp": [
                ".hwp"
            ]
        },
        multiple: false,
        disabled,
        onDragEnter: ()=>setDragActive(true),
        onDragLeave: ()=>setDragActive(false)
    });
    const handleRemoveFile = (e)=>{
        e.stopPropagation();
        onFileSelect(null);
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "w-full",
        children: !selectedFile ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_card.Card, {
            ...getRootProps(),
            className: (0, _utils.cn)("border-2 border-dashed transition-colors cursor-pointer", "hover:border-blue-400 hover:bg-blue-50/50", isDragActive && "border-blue-500 bg-blue-50", disabled && "opacity-50 cursor-not-allowed"),
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "p-8 text-center",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("input", {
                        ...getInputProps()
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.Upload, {
                        className: "mx-auto h-12 w-12 text-gray-400 mb-4"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                className: "text-lg font-medium text-gray-700",
                                children: isDragActive ? "HWP 파일을 여기에 놓으세요" : "HWP 파일을 드래그하거나 클릭하여 선택"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                className: "text-sm text-gray-500",
                                children: ".hwp 파일만 지원됩니다"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_button.Button, {
                        variant: "outline",
                        className: "mt-4 bg-transparent",
                        disabled: disabled,
                        children: "파일 선택"
                    })
                ]
            })
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_card.Card, {
            className: "p-4",
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.File, {
                                className: "h-8 w-8 text-blue-600"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                        className: "font-medium text-gray-900",
                                        children: selectedFile.name
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            (selectedFile.size / 1024 / 1024).toFixed(2),
                                            " MB"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    !disabled && /*#__PURE__*/ (0, _jsxruntime.jsx)(_button.Button, {
                        variant: "ghost",
                        size: "sm",
                        onClick: handleRemoveFile,
                        className: "text-gray-500 hover:text-red-600",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.X, {
                            className: "h-4 w-4"
                        })
                    })
                ]
            })
        })
    });
}

