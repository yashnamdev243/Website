// import React, { useState, useEffect } from "react";
// import { Form, Input, Button, message } from "antd";

// export default function ContactInfoManager() {
//   const [form] = Form.useForm();
//   const [info, setInfo] = useState({
//     phone: "",
//     email: "",
//     address: ""
//   });

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("contactInfo"));
//     if (saved) {
//       setInfo(saved);
//       form.setFieldsValue(saved);
//     }
//   }, [form]);

//   const onFinish = (values) => {
//     localStorage.setItem("contactInfo", JSON.stringify(values));
//     setInfo(values);
//     message.success("Contact info updated!");
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold text-[#7f4a18] mb-4">Manage Contact Info</h2>
//       <Form form={form} layout="vertical" onFinish={onFinish}>
//         <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="email" label="Email" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>
//         <Form.Item name="address" label="Address" rules={[{ required: true }]}>
//           <Input.TextArea rows={3} />
//         </Form.Item>
//         <Button type="primary" htmlType="submit">Save Info</Button>
//       </Form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";

export default function AdminContactMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contactMessages")) || [];
    setMessages(data);
  }, []);

  const clearMessages = () => {
    localStorage.removeItem("contactMessages");
    setMessages([]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Form Submissions</h2>

      <Button danger onClick={clearMessages} className="mb-4">
        Clear All Messages
      </Button>

      {messages.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <Card key={idx} title={msg.name}>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
