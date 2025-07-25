// // src/pages/About.jsx
// import React from 'react';

// const About = () => {
//   return (
//     <section className="py-12 px-4 sm:px-16 bg-white">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
//         {/* Image Section */}
//         <div>
//           <img
//             src="/assets/about-shivling.jpg"
//             alt="Namdev Narmadeshwar Shivling Arts"
//             className="rounded-lg shadow-md object-cover w-full max-h-[500px]"
//           />
//         </div>

//         {/* Text Content */}
//         <div>
//           <h2 className="text-4xl font-bold text-[#b84d1c] mb-4">About Us</h2>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             At <strong>Namdev Narmadeshwar Shivling Arts</strong>, we are dedicated to preserving the sacred
//             heritage of Indian spirituality by crafting authentic <strong>Narmadeshwar Shivlings</strong> and
//             other divine art pieces.
//           </p>
//           <p className="text-gray-700 mb-4 leading-relaxed">
//             Founded with devotion and precision, our workshop has grown into a trusted name for devotees across India. Each Shivling is
//             sourced and shaped with respect, faith, and traditional values—designed to bring peace and divinity to your home or temple.
//           </p>
//           <p className="text-gray-700 leading-relaxed">
//             With over <strong>5+ years of experience</strong> and <strong>50+ successful spiritual treks & tours</strong>,
//             our aim is to blend sacred art with soulful living.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


// src/pages/About.jsx
// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   useEffect(() => {
//     AOS.init({ once: true, duration: 1000 });
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <section className="py-12 px-4 sm:px-16 bg-gradient-to-b from-[#fefaf7] to-white text-gray-800">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
//         {/* Image Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="/assets/about-shivling.jpg"
//             alt="Namdev Narmadeshwar Shivling Arts"
//             className="rounded-2xl shadow-xl object-cover w-full max-h-[500px]"
//           />
//         </motion.div>

//         {/* Text Section */}
//         <div data-aos="fade-left">
//           <h2 className="text-4xl font-bold text-[#b84d1c] mb-4">About Us</h2>
//           <p className="text-lg leading-relaxed mb-4">
//             <strong>Namdev Narmadeshwar Shivling Arts</strong> is devoted to preserving Indian spiritual
//             heritage by handcrafting authentic <strong>Narmadeshwar Shivlings</strong> and sacred art pieces
//             with love, tradition, and devotion.
//           </p>
//           <p className="text-lg leading-relaxed mb-4">
//             With <strong>5+ years of dedication</strong> and <strong>50+ successful spiritual yatras</strong>,
//             we blend ancient wisdom with modern craftsmanship to deliver purity and divinity in every product.
//           </p>
//           <p className="text-lg leading-relaxed">
//             Our mission is to guide souls toward inner peace through sacred art, and to be your spiritual
//             partner on the path of devotion.
//           </p>
//         </div>
//       </div>

//       {/* Highlights */}
//       <div className="mt-16 grid md:grid-cols-3 gap-6" data-aos="fade-up">
//         {[
//           {
//             title: "Authentic Craftsmanship",
//             desc: "Every Shivling is shaped with spiritual care and tradition.",
//             icon: "🛕",
//           },
//           {
//             title: "Spiritual Tours",
//             desc: "We’ve led 50+ treks to divine locations including Kailash, Kedarnath & more.",
//             icon: "🧘‍♂️",
//           },
//           {
//             title: "Devotee Trust",
//             desc: "Trusted by thousands of devotees across India for purity and quality.",
//             icon: "🙏",
//           },
//         ].map((item, idx) => (
//           <motion.div
//             key={idx}
//             whileHover={{ scale: 1.05 }}
//             className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all"
//           >
//             <div className="text-4xl mb-3">{item.icon}</div>
//             <h3 className="text-xl font-semibold text-[#b84d1c] mb-2">{item.title}</h3>
//             <p className="text-gray-600">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Timeline / Vertical Values */}
//       <div className="mt-20 max-w-4xl mx-auto" data-aos="fade-up">
//         <h3 className="text-2xl font-bold text-[#b84d1c] text-center mb-8">Our Core Values</h3>
//         <ul className="relative border-l-4 border-[#b84d1c] pl-6 space-y-6">
//           {[
//             {
//               title: "Devotion",
//               desc: "We infuse every piece with spiritual energy and reverence.",
//             },
//             {
//               title: "Purity",
//               desc: "Using natural, sacred stones from the holy Narmada River.",
//             },
//             {
//               title: "Tradition",
//               desc: "Rooted in age-old Indian artisan methods and Vedic beliefs.",
//             },
//           ].map((item, idx) => (
//             <li key={idx} className="relative">
//               <span className="absolute w-4 h-4 bg-[#b84d1c] rounded-full -left-2 top-1.5"></span>
//               <h4 className="text-lg font-semibold text-[#b84d1c]">{item.title}</h4>
//               <p className="text-gray-700">{item.desc}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// export default About;

// src/pages/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0); // Scroll to top on load
  }, []);
const awards = [
  {
    title: "Best Spiritual Artisanship Award",
    year: "2023",
    icon: "/assets/awards/award1.png",
  },
  {
    title: "Certified Narmadeshwar Shivling Supplier",
    year: "2022",
    icon: "/assets/awards/award2.png",
  },
  {
    title: "Excellence in Pilgrimage Services",
    year: "2021",
    icon: "/assets/awards/award3.png",
  },
];

  return (
    <section className="py-12 px-4 sm:px-16 bg-gradient-to-br from-[#fff8f3] to-[#fff]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div data-aos="fade-right">
          <img
            src="/assets/about-shivling.jpg"
            alt="Namdev Narmadeshwar Shivling Arts"
            className="rounded-2xl shadow-xl object-cover w-full max-h-[500px]"
          />
        </div>

        {/* Text Content */}
        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold text-[#b84d1c] mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            <strong>Namdev Narmadeshwar Shivling Arts</strong> is devoted to
            preserving India's sacred traditions by crafting authentic{" "}
            <strong>Narmadeshwar Shivlings</strong> and spiritual artworks that
            enrich lives and homes with divinity.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            With over <strong>5+ years of expertise</strong> and{" "}
            <strong>50+ successful spiritual yatras</strong>, we merge divine
            craftsmanship with soulful living. Every piece is curated with
            reverence and faith.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From temples to personal shrines, our creations are trusted by
            thousands across India.
          </p>
        </div>
      </div>

      {/* Mission / Vision Cards */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {[
          {
            title: "Our Mission",
            desc: "To spread spiritual awareness by offering handmade divine artifacts that reflect ancient Hindu culture.",
            icon: "🕉️",
          },
          {
            title: "Spiritual Treks",
            desc: "We organize soulful treks like Char Dham, Manimahesh Kailash, and Shrikhand Mahadev Yatras.",
            icon: "🗻",
          },
          {
            title: "Authenticity",
            desc: "Every Shivling is sourced directly from the sacred Narmada River, ensuring authenticity and power.",
            icon: "🔱",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all"
            data-aos="zoom-in"
          >
            <div className="text-4xl mb-4">{card.icon}</div>
            <h3 className="text-xl font-semibold text-[#c54d1e] mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Timeline Section */}
      <div className="mt-20">
        <h2
          className="text-3xl font-bold text-center text-[#b84d1c] mb-10"
          data-aos="fade-up"
        >
          Our Journey
        </h2>
        <div className="relative border-l-4 border-[#c54d1e] pl-6 space-y-8">
          {[
            {
              year: "2018",
              event: "Company founded with devotion and a vision to spread spiritual positivity.",
            },
            {
              year: "2020",
              event: "Launched spiritual trek services to Char Dham and Kinnaur Kailash.",
            },
            {
              year: "2024",
              event: "Expanded reach across India with over 1000+ happy customers.",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative" data-aos="fade-right">
              <div className="absolute -left-3 w-6 h-6 bg-[#c54d1e] rounded-full border-4 border-white"></div>
              <h4 className="text-lg font-bold text-[#c54d1e]">{item.year}</h4>
              <p className="text-gray-700">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-20">
        <h2
          className="text-3xl font-bold text-center text-[#b84d1c] mb-10"
          data-aos="fade-up"
        >
          What Our Devotees Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="zoom-in-up">
          {[
            {
              name: "Ravi Sharma",
              feedback:
                "The Shivling I received radiates divine energy. Truly authentic craftsmanship!",
              location: "Haridwar",
            },
            {
              name: "Sunita Verma",
              feedback:
                "Their service is spiritual in every sense. Felt peace after our Kedarnath tour.",
              location: "Jaipur",
            },
            {
              name: "Amit Joshi",
              feedback:
                "Every piece is handmade with faith. Grateful for this divine experience.",
              location: "Pune",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-gray-600 italic">"{t.feedback}"</p>
              <div className="mt-4 font-semibold text-[#b84d1c]">
                - {t.name}, <span className="text-gray-500">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="mt-20" data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-[#794229] text-center mb-6">
          Certifications & Awards
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-[#f3f3f3] to-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all"
            >
              <img
                src={award.icon}
                alt={award.title}
                className="w-16 h-16 mb-4 mx-auto"
              />
              <h4 className="text-lg font-semibold text-center">
                {award.title}
              </h4>
              <p className="text-sm text-center text-gray-600">{award.year}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
