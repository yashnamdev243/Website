import React from "react";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "aos/dist/aos.css";

const FloatingIcons = () => {
  return (
    <div
      className="fixed bottom-6 right-4 z-50 flex flex-col items-end space-y-4"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/919691089549"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 bg-green-600 text-white text-xs rounded-md px-3 py-1 transition-opacity duration-300 shadow-md">
          Chat on WhatsApp
        </span>
        <div className="bg-green-500 text-white p-3 rounded-full shadow-xl hover:scale-110 hover:shadow-green-400 transition-all duration-300 animate-pulse">
          <WhatsAppOutlined className="text-xl" />
        </div>
      </a>

      {/* Call */}
      <a href="tel:+919691089549" className="group relative flex items-center">
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 bg-blue-600 text-white text-xs rounded-md px-3 py-1 transition-opacity duration-300 shadow-md ">
          Call Us
        </span>
        <div className="bg-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-110 hover:shadow-blue-400 transition-all duration-300 animate-pulse">
          <PhoneOutlined className="text-xl" />
        </div>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/namdev_shivling_09?igsh=MWttZGpwNmlpd2I4cg=="
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        <span className="absolute right-12 opacity-0 group-hover:opacity-100 bg-pink-500 text-white text-xs rounded-md px-3 py-1 transition-opacity duration-300 shadow-md">
          Instagram
        </span>
        <div className="bg-pink-500 text-white p-3 rounded-full shadow-xl hover:scale-110 hover:shadow-pink-400 transition-all duration-300 animate-pulse">
          <InstagramOutlined className="text-xl" />
        </div>
      </a>
    </div>
  );
};

export default FloatingIcons;
