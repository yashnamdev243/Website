import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UploadOutlined,
  FileTextOutlined,
  ShopOutlined,
  PhoneOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import MediaUpload from "./MediaUpload";
import ProductsManager from "./ProductsManager";
import BlogManager from "./BlogManager";
import ContactMessages from "./ContactMessages";

const { Sider, Content } = Layout;

export default function AdminDashboard() {
  const navigate = useNavigate();
const [activeTab, setActiveTab] = useState("dashboard");

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
      localStorage.removeItem("isAdmin");
      navigate("/admin/login");
    } else {
      // Handle internal navigation (or later, switch views)
    setActiveTab(key);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={220} className="bg-[#7f4a18]">
        <div className="text-white text-xl font-bold p-4 text-center">
          Admin Panel
        </div>
        <Menu
          mode="inline"
          theme="dark"
          onClick={handleMenuClick}
          defaultSelectedKeys={["dashboard"]}
          items={[
            { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
            { key: "media", icon: <UploadOutlined />, label: "Media Uploads" },
            { key: "products", icon: <ShopOutlined />, label: "Products" },
            { key: "blogs", icon: <FileTextOutlined />, label: "Blogs" },
            { key: "contact", icon: <PhoneOutlined />, label: "Contact Info" },
            { key: "logout", icon: <LogoutOutlined />, label: "Logout" },
          ]}
        />
      </Sider>
      <Layout>
        <Content className="p-6">
  {activeTab === "dashboard" && (
    <>
      <h1 className="text-2xl font-bold text-[#7f4a18]">Welcome, Admin!</h1>
      <p className="mt-2 text-gray-600">Use the sidebar to manage your website content.</p>
    </>
  )}

  {activeTab === "media" && <MediaUpload />}
  {activeTab === "products" && <ProductsManager />}
  {activeTab === "blogs" && <BlogManager />}
  {activeTab === "contact" && <ContactMessages />}


  {/* Add more tab components later */}
</Content>
      </Layout>
    </Layout>
  );
}
