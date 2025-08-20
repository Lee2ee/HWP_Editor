"use client";

import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export function TextEditor({ content, onChange, disabled = false, editorRef }) {
  return (
    <div className="h-[500px] flex flex-col overflow-y-auto">
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onReady={editor => {
          // You can store the "editor" and use it when needed.
          console.log('Editor is ready to use!', editor);
          if (editorRef) {
            editorRef.current = editor;
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
        disabled={disabled}
      />
    </div>
  );
}