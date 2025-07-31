import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@shivling.com" && password === "admin123") {
      localStorage.setItem("isAdmin", "true");
      message.success("Login successful!");
      navigate("/admin/dashboard");
    } else {
      message.error("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdf6ed]">
      <div className="w-full max-w-sm p-8 rounded-lg shadow-lg bg-white">
        <h2 className="text-center text-2xl font-bold mb-6 text-[#7f4a18]">Admin Login</h2>
        <Input
          size="large"
          placeholder="Email"
          prefix={<UserOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Input.Password
          size="large"
          placeholder="Password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6"
        />
        <Button type="primary" block onClick={handleLogin}>
          Login
        </Button>
      </div>
    </div>
  );
}
