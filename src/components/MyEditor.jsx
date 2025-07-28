// MyEditor.js
import React from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const MyEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"]
    ]
  };

  const formats = [
    "header", "bold", "italic", "underline",
    "list", "bullet", "link", "image"
  ];

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      theme="snow"
      modules={modules}
      formats={formats}
      placeholder="Write a description..."
    />
  );
};

export default MyEditor;
