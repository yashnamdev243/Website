import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  WhatsAppOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { MdCall } from "react-icons/md";
import { FaHome, FaInfoCircle, FaBoxOpen, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => setIsMobileOpen(!isMobileOpen);
  const menuItems = [
    { label: "Home", icon: <FaHome />, to: "/" },
    { label: "About", icon: <FaInfoCircle />, to: "/about" },
    { label: "Products", icon: <FaBoxOpen />, to: "/products" },
    { label: "Contact", icon: <FaPhoneAlt />, to: "/contact" },
  ];
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky lg:top-3 top-1 z-50  bg-gradient-to-br from-orange-100 to-yellow-50 shadow-2xl border-b-2 border-[#ff8c00] lg:rounded-lg rounded-lg px-4 sm:px-8  flex justify-between items-center lg:mx-40 mx-2"
    >
      {/* bg-[#f0d39e] */}
      <div className="m-0 p-0 flex items-center lg:gap-10 gap-4 ">
        <Link
          to="/"
          className="m-0 p-0 text-xl sm:text-2xl font-bold text-[#1f1300] tracking-wide flex items-center "
          onClick={() => setIsMobileOpen(false)}
        >
          <img
            src="/Namdevlogo.png"
            alt="Namdev Logo"
            className="lg:h-16 h-16 w-auto"
          />
        </Link>
        <a
          href="tel:9926642925"
          className="inline-flex items-center gap-2 lg:px-4 lg:py-1 px-2 py-2 text-lg lg:text-lg font-semibold text-[#1f1300] border border-[#ff8c00] rounded-full bg-orange-50 shadow-sm hover:shadow-lg transition"
        >
          <MdCall className="text-[#1f1300] text-xl lg:text-2xl" />
          <span className="hidden sm:inline">9691089549</span>
        </a>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-10  text-lg font-semibold text-[#1f1300]  ml-auto">
        {["Home", "About", "Products", "Contact"].map((item) => (
          <Link
            key={item}
            to={`/${item === "Home" ? "" : item.toLowerCase()}`}
            className="hover:text-[#ff8c00] transition relative group "
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#ff8c00] transition-all duration-300 group-hover:w-full rounded-lg"></span>
          </Link>
        ))}
      </nav>

      <div>
        {" "}
        <button
          onClick={toggleMenu}
          className="md:hidden text-xl text-[#1f1300]"
        >
          {isMobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed  top-[70px] right-2 w-2/3 sm:w-1/2 h-screen bg-gradient-to-br from-orange-100 to-yellow-50 shadow-md p-6 flex flex-col gap-6 z-40 md:hidden rounded-lg"
          >
            {menuItems.map(({ label, icon, to }) => (
              <Link
                key={label}
                to={to}
                className="flex items-center gap-3 text-lg text-[#1f1300] font-semibold hover:text-[#ff8c00] transition"
                onClick={() => setIsMobileOpen(false)}
              >
                {icon}
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
