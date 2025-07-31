// // components/Navbar.jsx
// import React from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-[#fff8ed] px-4 py-4 shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold text-[#7f4a18]">Namdev Shivling Art</h1>
//         <div className="space-x-4 text-[#4a3b28] font-medium">
//           <Link to="/">Home</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/contact">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#fff8ed] px-4 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#7f4a18]">Namdev Shivling Art</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-[#4a3b28] font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/blogs">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu from the right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#fff8ed] shadow-md transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 md:hidden`}
      >
        <div className="p-4 text-[#4a3b28] font-medium flex flex-col space-y-4 h-full">
          <button onClick={toggleMenu} className="self-end">
            <CloseOutlined />
          </button>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/products" onClick={toggleMenu}>Products</Link>
          <Link to="/blogs" onClick={toggleMenu}>Blog</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
