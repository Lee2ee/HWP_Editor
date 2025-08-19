"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileUploader } from "@/components/file-uploader"
import { ProgressIndicator } from "@/components/progress-indicator"
import { TextEditor } from "@/components/text-editor"
import { Button } from "@/components/ui/button"
import { AlertCircle, FileText, Upload } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export type ProcessingStage = "idle" | "uploading" | "extracting" | "inserting" | "completed" | "error"

export default function HWPEditorPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [extractProgress, setExtractProgress] = useState(0)
  const [currentStage, setCurrentStage] = useState<ProcessingStage>("idle")
  const [extractedText, setExtractedText] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  const handleFileSelect = (file: File) => {
    setSelectedFile(file)
    setCurrentStage("idle")
    setErrorMessage("")
    setExtractedText("")
    setUploadProgress(0)
    setExtractProgress(0)
  }

  const handleStartProcessing = async () => {
    if (!selectedFile) return

    try {
      setCurrentStage("uploading")
      setErrorMessage("")

      const arrayBuffer = await selectedFile.arrayBuffer()

      // 업로드 진행률 시뮬레이션
      for (let i = 0; i <= 100; i += 20) {
        setUploadProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      setCurrentStage("extracting")

      // hwp.js를 사용한 실제 텍스트 추출
      await extractTextFromHWP(arrayBuffer)
    } catch (error) {
      setCurrentStage("error")
      setErrorMessage(error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다")
    }
  }

  const extractTextFromHWP = async (arrayBuffer: ArrayBuffer) => {
    try {
      // hwp.js 동적 import (브라우저 환경에서만 실행)
      const { parse } = await import("hwp.js")

      // 추출 진행률 시뮬레이션
      for (let i = 0; i <= 80; i += 20) {
        setExtractProgress(i)
        await new Promise((resolve) => setTimeout(resolve, 200))
      }

      // ArrayBuffer를 바이너리 문자열로 변환
      const bytes = new Uint8Array(arrayBuffer);
      let binaryString = '';
      for (let i = 0; i < bytes.byteLength; i++) {
        binaryString += String.fromCharCode(bytes[i]);
      }

      // HWP 문서 파싱
      const hwpDoc = parse(binaryString, { type: 'binary' })

      setExtractProgress(90)
      await new Promise((resolve) => setTimeout(resolve, 200))

      // 텍스트 추출 (hwp.js API에 따라 조정 필요)
      let extractedContent = ""

      try {
        hwpDoc.sections.forEach((section) => {
          section.content.forEach((paragraph) => {
            paragraph.content.forEach((char) => {
              if (char.type === 0) { // CharType.Char
                if (char.value === 13) {
                  extractedContent += '\n';
                } else if (typeof char.value === 'string') {
                  extractedContent += char.value;
                }
              }
            });
          });
        });
      } catch (e) {
        console.error("텍스트 추출 중 오류:", e);
        throw new Error("문서 구조가 복잡하여 텍스트를 추출하는 데 실패했습니다. 표, 그림, 도형 등이 없는 간단한 HWP 파일로 시도해 주세요.");
      }

      console.log('Extracted Content Type:', typeof extractedContent, 'Value:', extractedContent);

      setExtractProgress(100)
      setCurrentStage("inserting")

      // HTML 형태로 변환
      const htmlContent = typeof extractedContent === 'string' ? extractedContent.replace(/\n/g, "<br>") : ""

      setExtractedText(htmlContent)
      setCurrentStage("completed")
    } catch (error) {
      console.error("HWP 파싱 오류:", error)
      // 오류 발생 시 기본 메시지 표시
      setExtractedText("HWP 파일 파싱 중 오류가 발생했습니다. 파일이 손상되었거나 지원되지 않는 형식일 수 있습니다.")
      setCurrentStage("completed")
    }
  }

  const handleReset = () => {
    setSelectedFile(null)
    setCurrentStage("idle")
    setExtractedText("")
    setErrorMessage("")
    setUploadProgress(0)
    setExtractProgress(0)
  }

  const getStageMessage = () => {
    switch (currentStage) {
      case "uploading":
        return "파일 업로드 중..."
      case "extracting":
        return "HWP 텍스트 추출 중..."
      case "inserting":
        return "CKEditor에 텍스트 삽입 중..."
      case "completed":
        return "처리 완료!"
      case "error":
        return "오류 발생"
      default:
        return "HWP 파일을 선택해주세요"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* 헤더 */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">HWP 에디터</h1>
          </div>
          <p className="text-gray-600 text-lg">HWP 파일을 업로드하고 텍스트를 추출하여 편집하세요</p>
        </div>

        <div className="space-y-6">
          {/* 파일 업로드 섹션 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                파일 업로드
              </CardTitle>
              <CardDescription>HWP 파일을 선택하고 텍스트 추출을 시작하세요</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FileUploader
                onFileSelect={handleFileSelect}
                selectedFile={selectedFile}
                disabled={currentStage !== "idle" && currentStage !== "completed" && currentStage !== "error"}
              />

              {selectedFile && (
                <div className="flex gap-2">
                  <Button
                    onClick={handleStartProcessing}
                    disabled={currentStage !== "idle" && currentStage !== "completed" && currentStage !== "error"}
                    className="flex-1"
                  >
                    {currentStage === "idle" || currentStage === "completed" || currentStage === "error"
                      ? "처리 시작"
                      : "처리 중..."}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    disabled={currentStage === "uploading" || currentStage === "extracting"}
                  >
                    초기화
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* 진행 상황 */}
          {currentStage !== "idle" && (
            <Card>
              <CardHeader>
                <CardTitle>처리 진행 상황</CardTitle>
                <CardDescription>{getStageMessage()}</CardDescription>
              </CardHeader>
              <CardContent>
                <ProgressIndicator
                  currentStage={currentStage}
                  uploadProgress={uploadProgress}
                  extractProgress={extractProgress}
                />
              </CardContent>
            </Card>
          )}

          {/* 오류 메시지 */}
          {errorMessage && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{errorMessage}</AlertDescription>
            </Alert>
          )}

          {/* 텍스트 에디터 */}
          <Card>
            <CardHeader>
              <CardTitle>텍스트 에디터</CardTitle>
              <CardDescription>추출된 텍스트가 여기에 표시되고 편집할 수 있습니다</CardDescription>
            </CardHeader>
            <CardContent className="h-[600px]">
              <TextEditor content={extractedText} onChange={setExtractedText} disabled={currentStage !== "completed"} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
