import React, { useState, useEffect } from "react";
import { Form, Input, Button, List, Card, Modal, message, Upload } from "antd";
import { UploadOutlined } from "@mui/icons-material";

export default function ProductsManager() {
  const [products, setProducts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  const saveProducts = (newData) => {
    localStorage.setItem("products", JSON.stringify(newData));
    setProducts(newData);
  };

//   const onFinish = (values) => {
//     let updated;
//     if (editingIndex !== null) {
//       updated = [...products];
//       updated[editingIndex] = values;
//       setEditingIndex(null);
//     } else {
//       updated = [...products, values];
//     }
//     saveProducts(updated);
//     form.resetFields();
//     message.success("Product saved successfully!");
//   };

const onFinish = (values) => {
  const imageFile = values.image?.[0]?.originFileObj;

  if (!imageFile) {
    message.error("Please upload an image.");
    return;
  }

  // Optional: Add preview URL or upload logic here
  const imageUrl = URL.createObjectURL(imageFile);

  const productData = {
    ...values,
    image: imageUrl, // Or keep it as File object if uploading to server
  };

  let updated;
  if (editingIndex !== null) {
    updated = [...products];
    updated[editingIndex] = productData;
    setEditingIndex(null);
  } else {
    updated = [...products, productData];
  }

  saveProducts(updated);
  form.resetFields();
  message.success("Product saved successfully!");
};

  const handleEdit = (index) => {
    form.setFieldsValue(products[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    Modal.confirm({
      title: "Confirm Delete",
      onOk: () => {
        const newData = products.filter((_, i) => i !== index);
        saveProducts(newData);
        message.success("Product deleted");
      },
    });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item name="name" label="Product Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>
        <Form.Item name="price" label="Price (INR)" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        {/* <Form.Item name="image" label="Image URL" rules={[{ required: true }]}>
          <Input placeholder="https://example.com/image.jpg" />
        </Form.Item> */}
        <Form.Item
  name="image"
  label="Upload Image"
  valuePropName="fileList"
  getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}
  rules={[{ required: true, message: "Please upload an image" }]}
>
  <Upload
    name="image"
    listType="picture"
    beforeUpload={() => false} // prevent automatic upload
    maxCount={1}
  >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
</Form.Item>

        <Button type="primary" htmlType="submit">
          {editingIndex !== null ? "Update Product" : "Add Product"}
        </Button>
      </Form>

      <div className="mt-8">
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={products}
          renderItem={(item, index) => (
            <List.Item>
              <Card
                title={item.name}
                cover={<img alt={item.name} src={item.image} className="h-48 object-cover" />}
                actions={[
                  <Button type="link" onClick={() => handleEdit(index)}>Edit</Button>,
                  <Button type="link" danger onClick={() => handleDelete(index)}>Delete</Button>,
                ]}
              >
                <p>{item.description}</p>
                <p><strong>₹{item.price}</strong></p>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
