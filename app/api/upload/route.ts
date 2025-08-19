import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "파일이 없습니다" }, { status: 400 })
    }

    // HWP 파일 검증
    if (!file.name.toLowerCase().endsWith(".hwp")) {
      return NextResponse.json({ error: "HWP 파일만 업로드 가능합니다" }, { status: 400 })
    }

    // 파일 크기 제한 (10MB)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "파일 크기는 10MB 이하여야 합니다" }, { status: 400 })
    }

    // 실제 구현에서는 여기서 hwp.js를 사용하여 텍스트를 추출합니다
    // const buffer = await file.arrayBuffer()
    // const extractedText = await extractTextFromHWP(buffer)

    return NextResponse.json({
      success: true,
      filename: file.name,
      size: file.size,
      message: "파일 업로드 완료",
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "서버 오류가 발생했습니다" }, { status: 500 })
  }
}
