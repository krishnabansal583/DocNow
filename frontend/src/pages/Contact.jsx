import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 mb-40">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
          CONTACT <span className="text-blue-600">US</span>
        </h2>
        <p className="text-gray-500 mt-4">
          We would love to hear from you! Get in touch with our team.
        </p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-12 mb-16">
        <div className="flex-1 space-y-6 text-gray-700">
          <img
            className="w-full md:max-w-sm rounded-lg shadow-lg"
            src={assets.contact_image}
            alt="Contact Us"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
            <p>
              282002 Kamla Nagar <br />
              E-48, Agra, Uttar Pradesh, India
            </p>
            <p>
              <strong>Telephone:</strong> +1 234 567 890 <br />
              <strong>Email:</strong> DocNow@gmail.com
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-800">
              Careers at DocNow
            </h3>
            <p>Join our team and help make healthcare accessible for all.</p>
            <button className="mt-4 border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition duration-300">
              Explore Jobs
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-600">Your Name</label>
              <input
                type="text"
                className="border border-gray-300 p-3 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600">Your Email</label>
              <input
                type="email"
                className="border border-gray-300 p-3 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600">Message</label>
              <textarea
                className="border border-gray-300 p-3 rounded-lg h-32"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto">
        <h3 className="text-2xl text-center font-semibold text-gray-800 mb-8">
          Find Us Here
        </h3>
        <div className="mb-16">
          <iframe
            title="Map to DocNow Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.7236951646214!2d78.00575401505585!3d26.209550983446973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e0b7e81f6f%3A0x7b21d7650c760594!2sKamla%20Nagar%2C%20Agra%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1617688546732!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0 rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-center space-x-6 text-gray-600">
          <p className="text-xl mb-2 font-semibold">Follow Us</p>
          <a
            href="https://facebook.com"
            className="hover:text-blue-600 transition duration-200"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-blue-500 transition duration-200"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-blue-500 transition duration-200"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-blue-700 transition duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
