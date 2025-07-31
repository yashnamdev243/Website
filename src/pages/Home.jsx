// HomePage.jsx
import React from "react";
import { Button } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff8ed] text-[#2f2f2f] font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-yellow-100 to-orange-100">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-[#7f4a18]"
        >
          Namdev Narmadeshwar Shivling Art
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-xl max-w-2xl text-[#4a3b28]"
        >
          Original Narmada Shivlings | Handmade with Devotion | Direct from Namdev Ji's Workshop
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6"
        >
          <Link to="/products">
            <Button size="large" type="primary" className="bg-[#edb21f] text-black border-none hover:bg-[#d4af37]">
              Explore Shivlings
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Featured Section */}
      <div className="py-16 px-4 md:px-12 lg:px-32 bg-white text-center">
        <h2 className="text-3xl font-semibold text-[#7f4a18] mb-8">
          Featured Shivlings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((id) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05 }}
              className="rounded-xl overflow-hidden shadow-lg border border-[#e0d6c7]"
            >
              <img
                src={`https://source.unsplash.com/400x300/?shivling,temple,stone&sig=${id}`}
                alt="Shivling"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold">Narmada Shivling #{id}</h3>
                <p className="text-sm text-gray-700 mt-1">Handcrafted spiritual Shivling from Narmada River stones.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#fef3dc] px-6 md:px-20 py-16 text-center">
        <h2 className="text-3xl font-semibold text-[#7f4a18] mb-6">About Namdev Shivling Art</h2>
        <p className="max-w-3xl mx-auto text-[#4a3b28]">
          Namdev Narmadeshwar Shivling Art is dedicated to preserving the divine art of Shivling crafting using stones sourced from the holy Narmada river. Each piece is blessed, handmade, and delivered with utmost devotion to bring peace and spirituality to your home.
        </p>
      </div>

      {/* Blog Section */}
      <div className="bg-white px-6 md:px-20 py-16 text-center">
        <h2 className="text-3xl font-semibold text-[#7f4a18] mb-6">Spiritual Insights & Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Identify Real Shivling", "Pooja Rituals", "Benefits of Shivling"].map((title, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl border border-[#f1e9d7] p-4 shadow"
            >
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">
                Learn about {title.toLowerCase()} and explore how you can enhance your spiritual practice.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#7f4a18] text-white py-8 text-center">
        <p className="text-sm">© 2025 Namdev Narmadeshwar Shivling Art. All rights reserved.</p>
        <p className="text-xs mt-1">Contact: +91-XXXXXXXXXX | Email: info@namdevshivling.com</p>
      </footer>
    </div>
  );
}
