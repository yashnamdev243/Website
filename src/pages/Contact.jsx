
import React, { useState ,useEffect } from "react";
import { Input, Button, Form, message, notification } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  FacebookOutlined,
  UserOutlined,
  MessageOutlined
} from "@ant-design/icons";
import "aos/dist/aos.css";
import Aos from "aos";
import { HiPaperAirplane } from "react-icons/hi2"; 
import { toast } from "react-toastify";

const Contact = () => {
   const [form] = Form.useForm();

  const onFinish = (values) => {
    // Save to localStorage
    const existing = JSON.parse(localStorage.getItem("contacts")) || [];
    localStorage.setItem("contacts", JSON.stringify([...existing, values]));

    // Show success toast
      toast.success("Message Sent Successfully! We'll contact you soon.");


    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
     toast.warning("Please fill all fields correctly before submitting.");

  };


  useEffect(() => {
    Aos.init(); // make sure AOS is initialized
  }, []);

  return (
    <section className="min-h-screen py-12 bg-gradient-to-br from-[#fffdf9] to-[#f8f4f0] overflow-hidden">
      <div className="max-w-6xl mx-auto  lg:px-6  gap-16 items-start">
        <div className="space-y-4" data-aos="fade-right">
          <h2 className="lg:text-3xl text-2xl font-bold text-center text-[#b84d1c] lg:mb-4">
            Contact Us
          </h2>
          <p className="text-[16px] lg:text-xl text-gray-600  mb-8 text-center">
            We’d love to hear from you. Whether you have a question, want to
            collaborate, or just want to say hi – our team is here.
          </p>

          {/* Quick Info Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 lg:px-0  px-10">
            {/* Call Us */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border border-transparent border-red-500 cursor-pointer flex flex-col items-center text-cente">
              <PhoneOutlined className="text-3xl text-red-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="mt-3 text-lg font-semibold text-gray-800">
                Call Us
              </p>
              <a
                href="tel:+919691089549"
                className="text-sm text-red-600 block mt-1"
              >
                +91 9691089549
              </a>
            </div>

            {/* Facebook */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border border-transparent border-blue-500 cursor-pointer flex flex-col items-center text-cente">
              <FacebookOutlined className="text-3xl text-blue-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="mt-3 text-lg font-semibold text-gray-800">
                Facebook
              </p>
              <a
                href="https://www.facebook.com/arvind.namdev.98096"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 block mt-1"
              >
                @yourfacebookname
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border border-transparent border-green-500 cursor-pointer flex flex-col items-center text-cente">
              <WhatsAppOutlined className="text-3xl text-green-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="mt-3 text-lg font-semibold text-gray-800">
                WhatsApp
              </p>
              <a
                href="https://wa.me/919691089549"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-600 block mt-1"
              >
                Arvind Namdev
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group border border-transparent border-pink-500 cursor-pointer flex flex-col items-center text-cente">
              <InstagramOutlined className="text-3xl text-pink-500 group-hover:scale-110 transition-transform duration-300" />
              <p className="mt-3 text-lg font-semibold text-gray-800">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/namdev_shivling_09?igsh=MWttZGpwNmlpd2I4cg==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-pink-600 block mt-1"
              >
                @yourhandle
              </a>
            </div>
          </div>
        </div>
       
        {/* Contact Form */}
       <div className="flex flex-col lg:flex-row items-center justify-center gap-8 p-6  bg-white/20 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30  mx-auto mt-10 ">
      {/* Left Side Image */}
      <div data-aos="fade-right" className="w-full lg:w-1/2">
        <img
          src="/contact.png"
          alt="Contact Illustration"
          className="w-full  max-w-md mx-auto h-auto rounded-2xl object-contain"
        />
      </div>

      {/* Right Side Form */}
      <div
        className="w-full lg:w-1/2  bg-gradient-to-br from-orange-100 to-yellow-50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl"
        data-aos="fade-left"
      >
        <h2 className="text-2xl font-bold text-center text-[#b84d1c] mb-6 ">
           Get in Touch with Us
        </h2>
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label={<span className="text-gray-700 font-medium">Full Name</span>}
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter Your Name"
              className="rounded-xl px-4 py-2  !border-yellow-600 !shadow-none focus:!ring-0 focus:!outline-none"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700 font-medium">Contact</span>}
            name="number"
            rules={[
              { required: true, message: "Please enter your contact number" },
              {
                pattern: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit Indian phone number",
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Enter Your Contact Number"
              className="rounded-xl px-4 py-2 !border-yellow-600 !shadow-none focus:!ring-0 focus:!outline-none"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-gray-700 font-medium">Message</span>}
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea
              prefix={<MessageOutlined />}
              rows={4}
              placeholder="Your message here..."
              className="rounded-xl px-4 py-2 !border-yellow-600 !shadow-none focus:!ring-0 focus:!outline-none"
            />
          </Form.Item>

       <div className="flex justify-center">
  <button
    type="submit"
    className="group mt-6 w-full lg:w-auto px-2 sm:px-6 py-2 lg:py-2 rounded-full bg-gradient-to-r from-[#b84d1c] to-[#e86c24] text-white text-base sm:text-lg font-semibold shadow-md transition-all duration-300 ease-in-out hover:from-[#993d12] hover:to-[#cc5c1d] focus:outline-none focus:ring-2 focus:ring-orange-300"
  >
    <span className="flex items-center justify-center gap-2">
      <HiPaperAirplane className="text-lg sm:text-xl group-hover:translate-x-1 group-hover:-rotate-12 transform transition-all duration-300" />
      Send Message
    </span>
  </button>
</div>

        </Form>
      </div>
    </div>

   

      {/* MAP */}
      <div className="mt-20 ">     <h2 className="lg:text-3xl text-2xl font-bold text-center text-[#b84d1c] lg:mb-4">
        Our Location
      </h2>
</div>
      <div className="mt-6 lg:px-0 px-4" data-aos="fade-up">
        <iframe
          title="Location Map"
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.3007286430195!2d75.84536085632806!3d22.169948918145355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396285fe663a371b%3A0xd15c87bf6c844939!2sNamdev%20Shivling%20Art!5e1!3m2!1sen!2sin!4v1753381937757!5m2!1sen!2sin" 
          className="w-full h-80 rounded-lg shadow-lg"
          loading="lazy"
        ></iframe>
      
      </div>
       </div>
    </section>
  );
};

export default Contact;
