"use client"

import { Progress } from "@/components/ui/progress"
import { CheckCircle, Circle, Loader2 } from "lucide-react"
import type { ProcessingStage } from "@/app/page"

interface ProgressIndicatorProps {
  currentStage: ProcessingStage
  uploadProgress: number
  extractProgress: number
}

export function ProgressIndicator({ currentStage, uploadProgress, extractProgress }: ProgressIndicatorProps) {
  const stages = [
    { key: "uploading", label: "파일 업로드", progress: uploadProgress },
    { key: "extracting", label: "텍스트 추출", progress: extractProgress },
    { key: "inserting", label: "에디터 삽입", progress: currentStage === "inserting" ? 100 : 0 },
    { key: "completed", label: "완료", progress: currentStage === "completed" ? 100 : 0 },
  ]

  const getStageStatus = (stageKey: string) => {
    const stageIndex = stages.findIndex((s) => s.key === stageKey)
    const currentIndex = stages.findIndex((s) => s.key === currentStage)

    if (currentStage === "error") return "error"
    if (stageIndex < currentIndex) return "completed"
    if (stageIndex === currentIndex) return "active"
    return "pending"
  }

  const getStageIcon = (stageKey: string) => {
    const status = getStageStatus(stageKey)

    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-600" />
      case "active":
        return <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
      case "error":
        return <Circle className="h-5 w-5 text-red-600" />
      default:
        return <Circle className="h-5 w-5 text-gray-400" />
    }
  }

  return (
    <div className="space-y-6">
      {stages.map((stage, index) => {
        const status = getStageStatus(stage.key)
        const showProgress = status === "active" && stage.progress > 0

        return (
          <div key={stage.key} className="space-y-2">
            <div className="flex items-center gap-3">
              {getStageIcon(stage.key)}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-medium ${
                      status === "completed"
                        ? "text-green-700"
                        : status === "active"
                          ? "text-blue-700"
                          : status === "error"
                            ? "text-red-700"
                            : "text-gray-500"
                    }`}
                  >
                    {stage.label}
                  </span>
                  {showProgress && <span className="text-sm text-gray-600">{stage.progress}%</span>}
                </div>

                {showProgress && <Progress value={stage.progress} className="mt-2 h-2" />}
              </div>
            </div>

            {index < stages.length - 1 && <div className="ml-2.5 h-4 w-px bg-gray-200" />}
          </div>
        )
      })}
    </div>
  )
}
