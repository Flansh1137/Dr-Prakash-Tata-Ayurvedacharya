import React from 'react';

const Contact = () => {
  return (
    <div className="px-4 py-10 md:px-20 bg-green-50 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-800 mb-4">Get in Touch With Us</h1>
      <p className="text-base text-green-700 mb-6 max-w-xl">
        Have questions about Ayurvedic treatments or herbal remedies? We’re here to guide you toward natural healing.
      </p>

      {/* Contact Form */}
      <form className="bg-white shadow-md rounded-xl p-6 space-y-5 max-w-lg border border-green-200">
        <div>
          <label className="block mb-1 text-green-800 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border border-green-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your full name"
          />
        </div>
        <div>
          <label className="block mb-1 text-green-800 font-medium">Email Address</label>
          <input
            type="email"
            className="w-full border border-green-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-1 text-green-800 font-medium">Your Message</label>
          <textarea
            rows="4"
            className="w-full border border-green-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
