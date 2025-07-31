// AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-[#fff8ed] text-[#2f2f2f] min-h-screen font-sans">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-[#7f4a18]"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-[#4a3b28]"
        >
          Discover the legacy of devotion, craftsmanship, and spiritual heritage behind every Narmadeshwar Shivling we create.
        </motion.p>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-20 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="https://source.unsplash.com/600x400/?narmada,stone,spiritual"
            alt="About Shivling"
            className="rounded-xl shadow-md w-full h-auto object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold text-[#7f4a18] mb-4">Our Mission</h2>
            <p className="text-[#4a3b28] text-base leading-relaxed">
              At Namdev Narmadeshwar Shivling Art, we aim to deliver authentic, handcrafted Shivlings made from sacred Narmada stones. Our devotion lies in ensuring each piece holds spiritual significance, promoting peace, prosperity, and divine blessings in every home.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold text-[#7f4a18] text-center mb-6">Our Values</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              "Authenticity in Materials",
              "Spiritual Purpose",
              "Craftsmanship Excellence",
              "Cultural Preservation",
              "Customer Dedication",
              "Environmental Respect"
            ].map((value, idx) => (
              <li key={idx} className="bg-white rounded-lg shadow p-6 text-[#4a3b28] font-medium">
                {value}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
