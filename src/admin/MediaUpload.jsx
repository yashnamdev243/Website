import React, { useState } from "react";
import { Upload, Button, message, Modal } from "antd";
import { UploadOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

export default function MediaUpload() {
  const [fileList, setFileList] = useState([]);
  const [preview, setPreview] = useState({ visible: false, url: "" });

  const handleChange = ({ fileList }) => setFileList(fileList);

  const handlePreview = async (file) => {
    setPreview({ visible: true, url: file.thumbUrl || file.url });
  };

  const handleRemove = () => {
    setFileList([]);
    message.info("Media cleared");
  };

  const handleUpload = () => {
    // Dummy logic — replace with real API
    console.log("Uploading...", fileList);
    message.success("Uploaded successfully (dummy)");
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-[#7f4a18] mb-4">Upload Images / Videos</h2>

      <Upload
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
        onPreview={handlePreview}
        beforeUpload={() => false} // prevent auto upload
      >
        {fileList.length < 8 && "+ Upload"}
      </Upload>

      <div className="mt-4 flex gap-3">
        <Button type="primary" icon={<UploadOutlined />} onClick={handleUpload}>
          Upload
        </Button>
        <Button danger icon={<DeleteOutlined />} onClick={handleRemove}>
          Clear
        </Button>
      </div>

      <Modal
        open={preview.visible}
        title="Preview"
        footer={null}
        onCancel={() => setPreview({ visible: false, url: "" })}
      >
        <img alt="preview" style={{ width: "100%" }} src={preview.url} />
      </Modal>
    </div>
  );
}
