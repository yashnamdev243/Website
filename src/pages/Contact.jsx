// // ContactPage.jsx
// import React, { useState } from "react";
// import { Input, Button, Form, message } from "antd";
// import { motion } from "framer-motion";
// import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

// export default function Contact() {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = (values) => {
//     setLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       console.log("Submitted Contact Form:", values);
//       message.success("Message sent successfully!");
//       form.resetFields();
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-[#fffef9] px-6 py-12 md:px-20 lg:px-40 text-[#2f2f2f]">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-[#7f4a18] mb-8">
//         Contact Us
//       </h1>

//       <div className="grid md:grid-cols-2 gap-10">
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
//           <p className="text-sm text-gray-700 mb-4">
//             Whether you're looking to buy a handcrafted Shivling, have a custom request, or want to learn more — we’re happy to hear from you!
//           </p>
//           <p className="flex items-center gap-2 text-sm text-[#7f4a18]">
//             <PhoneOutlined /> +91-XXXXXXXXXX
//           </p>
//           <p className="flex items-center gap-2 text-sm text-[#7f4a18] mt-2">
//             <MailOutlined /> info@namdevshivling.com
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <Form layout="vertical" form={form} onFinish={handleSubmit}>
//             <Form.Item name="name" label="Your Name" rules={[{ required: true }]}> 
//               <Input placeholder="Enter your name" />
//             </Form.Item>
//             <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}> 
//               <Input placeholder="Enter your email" />
//             </Form.Item>
//             <Form.Item name="message" label="Message" rules={[{ required: true }]}> 
//               <Input.TextArea rows={4} placeholder="Enter your message" />
//             </Form.Item>
//             <Button type="primary" htmlType="submit" loading={loading} className="bg-[#edb21f] border-none hover:bg-[#d4af37] text-black">
//               Send Message
//             </Button>
//           </Form>
//         </motion.div>
//       </div>

//       <div className="mt-12">
//         <iframe
//           title="Location Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.0000000000005!2d81.60000000000001!3d21.200000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzAwLjAiTiA4McKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
//           width="100%"
//           height="300"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="rounded-lg shadow"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Input, Button, Form, message } from "antd";
import { motion } from "framer-motion";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

export default function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // Load contact info from localStorage
  const info = JSON.parse(localStorage.getItem("contactInfo")) || {
    phone: "Default Phone",
    email: "Default Email",
    address: "Default Address"
  };

 const handleSubmit = (values) => {
  setLoading(true);
  setTimeout(() => {
    // Save submitted form data
    const oldMessages = JSON.parse(localStorage.getItem("contactMessages")) || [];
    const newMessages = [...oldMessages, values];
    localStorage.setItem("contactMessages", JSON.stringify(newMessages));

    message.success("Message sent successfully!");
    form.resetFields();
    setLoading(false);
  }, 1000);
};


  return (
    <div className="min-h-screen bg-[#fffef9] px-6 py-12 md:px-20 lg:px-40 text-[#2f2f2f]">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#7f4a18] mb-8">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-sm text-gray-700 mb-4">
            Whether you're looking to buy a handcrafted Shivling, have a custom request, or want to learn more — we’re happy to hear from you!
          </p>
          <p className="flex items-center gap-2 text-sm text-[#7f4a18]">
            <PhoneOutlined /> {info.phone}
          </p>
          <p className="flex items-center gap-2 text-sm text-[#7f4a18] mt-2">
            <MailOutlined /> {info.email}
          </p>
          <p className="text-sm text-gray-700 mt-2">{info.address}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item name="name" label="Your Name" rules={[{ required: true }]}>
              <Input placeholder="Enter your name" />
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item name="message" label="Message" rules={[{ required: true }]}>
              <Input.TextArea rows={4} placeholder="Enter your message" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="bg-[#edb21f] border-none hover:bg-[#d4af37] text-black"
            >
              Send Message
            </Button>
          </Form>
        </motion.div>
      </div>

      <div className="mt-12">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.0000000000005!2d81.60000000000001!3d21.200000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzAwLjAiTiA4McKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow"
        ></iframe>
      </div>
    </div>
  );
}
