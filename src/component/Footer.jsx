import React, { useEffect } from "react";
import {
  FacebookFilled,
  InstagramFilled,
  PhoneOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaHome,
  FaInfoCircle,
  FaBoxOpen,
  FaPhoneAlt,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationPin, MdOutgoingMail } from "react-icons/md";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);
  const menuItems = [
    { label: "Home", icon: <FaHome />, to: "/" },
    { label: "About", icon: <FaInfoCircle />, to: "/about" },
    { label: "Products", icon: <FaBoxOpen />, to: "/products" },
    { label: "Contact", icon: <FaPhoneAlt />, to: "/contact" },
  ];
  return (
    <footer className="bg-[#1f1300] text-white px-4 py-10 " data-aos="fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10  justify-items-center ">
        {/* About */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-xl font-semibold mb-3 text-[#ffcc70] flex justify-center">
            {/* <span className="text-4xl animate-pulse">🕉️</span> */}
            Namdev Narmadeshwar Shivling Arts
          </h4>
          <div className="flex justify-center items-center flex-col text-center mt-6">
            <div className="bg-gray-300 rounded-lg inline-block p-1 mb-2  ">
              <img
                src="/Namdevlogo.png"
                alt="Namdev Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="space-y-2 mb-4 text-sm text-gray-300 leading-relaxed">
              Original handcrafted{" "}
              <span className="text-[#ffcc70] font-semibold italic">
                Narmadeshwar Shivlings
              </span>{" "}
              <br /> &
              <span className="text-[#ffcc70] font-semibold italic">
                {" "}
                spiritual Art{" "}
              </span>{" "}
              that bring peace, energy , <br /> and{" "}
              <span>divine harmony to your space. </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-xl font-semibold mb-3 text-[#ffcc70] flex justify-center">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="flex items-center gap-2 group transition-all duration-300 ease-in-out  text-gray-300   hover:text-[#ffcc70]"
                >
                  <span className="text-base transition-transform duration-300 group-hover:scale-125  text-orange-500  group-hover:text-[#ffcc70]">
                    {item.icon}
                  </span>
                  <span className="transition-colors duration-200">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="text-xl font-semibold mb-3 text-[#ffcc70] flex justify-center">
            Our Address
          </h4>

          <div className="space-y-2 mb-4 text-sm text-gray-300 leading-relaxed">
            <div className="flex items-start gap-2">
              <span className="text-orange-500 ">
                <MdLocationPin className="text-2xl" />
              </span>
              <span>
                <span className="text-[#ffcc70] font-semibold italic">
                  Namdev Narmadeshwar Shivling Arts
                </span>
                , <br /> Vill - Bakawan , post - Mardana ,<br /> Teh - Barwaha ,
                Dist - Khargone , <br /> Madhya Pradesh - 451113
              </span>
            </div>
            {/* Email Section */}
            <div className="flex items-start gap-2">
              <span className="text-orange-500">
                <MdOutgoingMail className="text-xl mt-[1px]" />
              </span>
              <a
                href="mailto:namdevshivlingarts@gmail.com"
                className="text-gray-300 hover:underline"
              >
                arvindnamdev62@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

      <div className="flex gap-4 mt-6 justify-center">
        <a
          href="tel:+919691089549"
          aria-label="Call"
          className="w-12 h-12 flex items-center justify-center text-red-500 bg-white/10 hover:bg-red-500 hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaPhoneSquareAlt className="text-2xl" />
        </a>
        <a
          href="https://www.facebook.com/arvind.namdev.98096"
          aria-label="Facebook"
          className="w-12 h-12 flex items-center justify-center text-blue-500 bg-white/10 hover:bg-blue-600 hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FacebookFilled className="text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/namdev_shivling_09?igsh=MWttZGpwNmlpd2I4cg=="
          aria-label="Instagram"
          className="w-12 h-12 flex items-center justify-center text-pink-500 bg-white/10 hover:bg-gradient-to-tr from-pink-500 to-rose-500 hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <InstagramFilled className="text-2xl" />
        </a>
        <a
          href="https://wa.me/919691089549"
          aria-label="WhatsApp"
          className="w-12 h-12 flex items-center justify-center text-green-500 bg-white/10 hover:bg-green-500 hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <WhatsAppOutlined className="text-2xl" />
        </a>
      </div>

      <div className="mt-4 border-t border-yellow-800 pt-4 text-center text-sm text-yellow-800">
        <span className="text-lg"> © </span>
        {new Date().getFullYear()} Namdev Narmadeshwar Shivling Arts. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
