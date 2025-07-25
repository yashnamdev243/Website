import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sliderImages = [
    "/IMG20230917194412.jpg",
    "/IMG20240831105044.jpg",
    "/IMG20250618110149.jpg",
    "/IMG20240625172711.jpg",
    "/IMG20240831105044.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="h-screen w-full relative mt-[-66px] bg-black overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {sliderImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className={`w-full h-screen object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
              currentIndex === i ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full w-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          className="text-3xl sm:text-5xl font-extrabold text-[#ffcc70] mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Welcome to Namdev Narmadeshwar Shivling Arts
        </motion.h1>

        <motion.p
          className="text-lg lg:text-xl text-gray-100 max-w-2xl mb-8"
          data-aos="fade-up"
        >
          Handcrafted sacred Shivlings & divine art pieces for your spiritual
          journey.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/products">
            <Button
              size="large"
              className="!bg-[#1f1300] !text-[#ffcc70] !border-[#ffcc70] hover:scale-105 transition"
            >
              Explore Products
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              size="large"
              className="!bg-[#f0d39e] !border-[#1f1300] !text-[#1f1300] hover:scale-105 transition"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
