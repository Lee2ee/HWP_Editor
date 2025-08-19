"use client"

import type React from "react"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, File, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileUploaderProps {
  onFileSelect: (file: File) => void
  selectedFile: File | null
  disabled?: boolean
}

export function FileUploader({ onFileSelect, selectedFile, disabled = false }: FileUploaderProps) {
  const [dragActive, setDragActive] = useState(false)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0 && !disabled) {
        onFileSelect(acceptedFiles[0])
      }
    },
    [onFileSelect, disabled],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/x-hwp": [".hwp"],
      "application/haansofthwp": [".hwp"],
    },
    multiple: false,
    disabled,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false),
  })

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation()
    onFileSelect(null as any)
  }

  return (
    <div className="w-full">
      {!selectedFile ? (
        <Card
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed transition-colors cursor-pointer",
            "hover:border-blue-400 hover:bg-blue-50/50",
            isDragActive && "border-blue-500 bg-blue-50",
            disabled && "opacity-50 cursor-not-allowed",
          )}
        >
          <div className="p-8 text-center">
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <div className="space-y-2">
              <p className="text-lg font-medium text-gray-700">
                {isDragActive ? "HWP 파일을 여기에 놓으세요" : "HWP 파일을 드래그하거나 클릭하여 선택"}
              </p>
              <p className="text-sm text-gray-500">.hwp 파일만 지원됩니다</p>
            </div>
            <Button variant="outline" className="mt-4 bg-transparent" disabled={disabled}>
              파일 선택
            </Button>
          </div>
        </Card>
      ) : (
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <File className="h-8 w-8 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">{selectedFile.name}</p>
                <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            {!disabled && (
              <Button variant="ghost" size="sm" onClick={handleRemoveFile} className="text-gray-500 hover:text-red-600">
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  )
}
