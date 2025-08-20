"use client";
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProgressIndicator", {
    enumerable: true,
    get: function() {
        return ProgressIndicator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _progress = require("@/components/ui/progress");
const _lucidereact = require("lucide-react");
function ProgressIndicator({ currentStage, uploadProgress, extractProgress }) {
    const stages = [
        {
            key: "uploading",
            label: "파일 업로드",
            progress: uploadProgress
        },
        {
            key: "extracting",
            label: "텍스트 추출",
            progress: extractProgress
        },
        {
            key: "inserting",
            label: "에디터 삽입",
            progress: currentStage === "inserting" ? 100 : 0
        },
        {
            key: "completed",
            label: "완료",
            progress: currentStage === "completed" ? 100 : 0
        }
    ];
    const getStageStatus = (stageKey)=>{
        const stageIndex = stages.findIndex((s)=>s.key === stageKey);
        const currentIndex = stages.findIndex((s)=>s.key === currentStage);
        if (currentStage === "error") return "error";
        if (stageIndex < currentIndex) return "completed";
        if (stageIndex === currentIndex) return "active";
        return "pending";
    };
    const getStageIcon = (stageKey)=>{
        const status = getStageStatus(stageKey);
        switch(status){
            case "completed":
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.CheckCircle, {
                    className: "h-5 w-5 text-green-600"
                });
            case "active":
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.Loader2, {
                    className: "h-5 w-5 text-blue-600 animate-spin"
                });
            case "error":
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.Circle, {
                    className: "h-5 w-5 text-red-600"
                });
            default:
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_lucidereact.Circle, {
                    className: "h-5 w-5 text-gray-400"
                });
        }
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "space-y-6",
        children: stages.map((stage, index)=>{
            const status = getStageStatus(stage.key);
            const showProgress = status === "active" && stage.progress > 0;
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                            getStageIcon(stage.key),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                className: `font-medium ${status === "completed" ? "text-green-700" : status === "active" ? "text-blue-700" : status === "error" ? "text-red-700" : "text-gray-500"}`,
                                                children: stage.label
                                            }),
                                            showProgress && /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                                                className: "text-sm text-gray-600",
                                                children: [
                                                    stage.progress,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    }),
                                    showProgress && /*#__PURE__*/ (0, _jsxruntime.jsx)(_progress.Progress, {
                                        value: stage.progress,
                                        className: "mt-2 h-2"
                                    })
                                ]
                            })
                        ]
                    }),
                    index < stages.length - 1 && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "ml-2.5 h-4 w-px bg-gray-200"
                    })
                ]
            }, stage.key);
        })
    });
}

