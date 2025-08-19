"use client"

import { useEffect, useRef } from "react"

interface TextEditorProps {
  content: string
  onChange: (content: string) => void
  disabled?: boolean
}

export function TextEditor({ content, onChange, disabled = false }: TextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorRef.current && content) {
      editorRef.current.innerHTML = content
    }
  }, [content])

  const handleInput = () => {
    if (editorRef.current && !disabled) {
      onChange(editorRef.current.innerHTML)
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* 에디터 툴바 */}
      <div className="border-b p-2 bg-gray-50 rounded-t-lg">
        <div className="flex gap-2">
          <button
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={disabled}
            onClick={() => document.execCommand("bold")}
          >
            <strong>B</strong>
          </button>
          <button
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={disabled}
            onClick={() => document.execCommand("italic")}
          >
            <em>I</em>
          </button>
          <button
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={disabled}
            onClick={() => document.execCommand("underline")}
          >
            <u>U</u>
          </button>
          <div className="border-l mx-2" />
          <button
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={disabled}
            onClick={() => document.execCommand("insertUnorderedList")}
          >
            • 목록
          </button>
          <button
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100 disabled:opacity-50"
            disabled={disabled}
            onClick={() => document.execCommand("insertOrderedList")}
          >
            1. 목록
          </button>
        </div>
      </div>

      {/* 에디터 영역 */}
      <div className="flex-1 relative overflow-y-auto rounded-b-lg border-t">
        {disabled && !content && (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gray-50">
            <div className="text-center">
              <p className="text-lg font-medium mb-2">텍스트 에디터</p>
              <p className="text-sm">HWP 파일을 업로드하고 처리하면 추출된 텍스트가 여기에 표시됩니다</p>
            </div>
          </div>
        )}

        <div
          ref={editorRef}
          contentEditable={!disabled}
          onInput={handleInput}
          className={`p-4 outline-none w-full min-h-full ${
            disabled ? "bg-gray-50 text-gray-500" : "bg-white"
          }`}
          suppressContentEditableWarning={true}
        />
      </div>
    </div>
  )
}
