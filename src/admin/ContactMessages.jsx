import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";

export default function ContactMessages() {
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
