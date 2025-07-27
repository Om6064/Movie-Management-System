import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { useRef, useEffect } from 'react';

function MyEditor({ value, onChange }) {
    const editorRef = useRef();

    useEffect(() => {
        if (editorRef.current && value) {
            editorRef.current.getInstance().setMarkdown(value);
        }
    }, [value]);

    const handleEditorChange = () => {
        const instance = editorRef.current.getInstance();
        const markdown = instance.getMarkdown();
        onChange(markdown);
    };

    return (
        <div>
            <Editor
                ref={editorRef}
                initialValue={value || ""}
                previewStyle="vertical"
                height="400px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                onChange={handleEditorChange}
            />
        </div>
    );
}

export default MyEditor;
