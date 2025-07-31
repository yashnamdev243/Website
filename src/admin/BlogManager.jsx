import React, { useState, useEffect } from "react";
import { Form, Input, Button, List, Card, Modal, message } from "antd";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(savedBlogs);
  }, []);

  const saveBlogs = (newBlogs) => {
    localStorage.setItem("blogs", JSON.stringify(newBlogs));
    setBlogs(newBlogs);
  };

  const onFinish = (values) => {
    let newBlogs;
    if (editingIndex !== null) {
      newBlogs = [...blogs];
      newBlogs[editingIndex] = values;
      setEditingIndex(null);
    } else {
      newBlogs = [...blogs, values];
    }
    saveBlogs(newBlogs);
    form.resetFields();
    message.success("Blog saved!");
  };

  const editBlog = (index) => {
    form.setFieldsValue(blogs[index]);
    setEditingIndex(index);
  };

  const deleteBlog = (index) => {
    Modal.confirm({
      title: "Delete this blog?",
      onOk: () => {
        const updated = blogs.filter((_, i) => i !== index);
        saveBlogs(updated);
        message.success("Blog deleted");
      },
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Blogs</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input placeholder="Enter blog title" />
        </Form.Item>
        <Form.Item name="content" label="Content" rules={[{ required: true }]}>
          <Input.TextArea rows={4} placeholder="Enter blog content" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {editingIndex !== null ? "Update Blog" : "Add Blog"}
        </Button>
      </Form>

      <div className="mt-8">
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={blogs}
          renderItem={(item, index) => (
            <List.Item>
              <Card
                title={item.title}
                actions={[
                  <Button type="link" onClick={() => editBlog(index)}>
                    Edit
                  </Button>,
                  <Button type="link" danger onClick={() => deleteBlog(index)}>
                    Delete
                  </Button>,
                ]}
              >
                {item.content}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
