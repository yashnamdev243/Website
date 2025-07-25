import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ravi Sharma",
    comment: "Beautifully crafted Shivling, felt divine energy at home!",
    avatar: "/istockphoto-1927704919-612x612.jpg",
    role: "Spiritual Enthusiast",
  },
  {
    name: "Sneha Verma",
    comment:
      "Packaging was excellent, product arrived safely. Highly recommend!",
    avatar: "/istockphoto-1335063517-612x612.jpg",
    role: "Home Decor Buyer",
  },
  {
    name: "Manoj Desai",
    comment: "Authentic Narmadeshwar Shivling, thank you for this sacred gift!",
    avatar: "/istockphoto-1927704919-612x612.jpg",
    role: "Devotee",
  },
  {
    name: "Aarav Patel",
    comment: "Received on time and the quality was top-notch!",
    avatar: "/istockphoto-1227618801-612x612.jpg",
    role: "Shop Owner",
  },
  {
    name: "Pooja Rathi",
    comment: "Such a powerful and calming presence, will order again.",
    avatar: "/istockphoto-1335063517-612x612.jpg",
    role: "Meditation Coach",
  },
  {
    name: "Kunal Mehta",
    comment: "Exactly what I was looking for. Looks divine!",
    avatar: "/istockphoto-1227618801-612x612.jpg",
    role: "Art Collector",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20  px-4 sm:px-10 md:px-20">
      <h2 className="lg:text-3xl text-2xl font-bold text-center text-[#b84d1c] mb-8">
        What Our Customers Say
      </h2>

      <Swiper
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="group bg-white shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl border border-[#ffe3c4] p-6 m-4 w-80 h-[280px] flex flex-col justify-between mb-2">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-[#ffcc70] shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                  <FaQuoteLeft className="absolute -top-2 -left-2 text-[#ffc488] text-xl opacity-80" />
                </div>

                <div className="text-lg font-semibold text-[#b84d1c] tracking-wide">
                  {item.name}
                </div>

                <div className="text-sm text-gray-500 italic">{item.role}</div>

                <p className="text-gray-600 text-sm leading-relaxed px-2 group-hover:text-gray-800 transition line-clamp-4">
                  “{item.comment}”
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
