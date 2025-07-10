import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'your_service_id',     // Replace with your EmailJS service ID
      'your_template_id',    // Replace with your EmailJS template ID
      form.current,
      'your_public_key'      // Replace with your EmailJS public key
    )
    .then((result) => {
      alert("Message sent successfully!");
      form.current.reset();
    })
    .catch((error) => {
      alert("Failed to send message.");
      console.log(error.text);
    });
  };

  return (
    <footer className="bg-green-800 text-white py-10 ">
      <div className=" px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Ayurved</h1>
          <p className="text-sm">Bringing natural wellness to your life.</p>
        </div>

        {/* About & Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-sm mb-4">
            Ayurved is your one-stop platform for herbal and organic wellness products. Embrace nature’s healing.
          </p>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">Email: info@ayurved.com</p>
        </div>

        {/* Email Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-3">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="px-3 py-2 rounded text-black"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="px-3 py-2 rounded text-black"
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Your Message"
              required
              className="px-3 py-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-yellow-300 hover:bg-yellow-300 text-black font-semibold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-300">
        © {new Date().getFullYear()} Ayurved. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
