import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

const FollowUsBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[350px] flex items-center justify-center"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/115408.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Sadhu Baba Image */}
        <div className="flex justify-center mb-4">
          <img
            src="https://images.navbharatlive.com/wp-content/uploads/2023/03/Prakash-Indian-Tata_V_jpeg--1280x720-4g.webp?sw=1536&dsz=1280x720&iw=855&p=false&r=1.25"
            alt="Sadhu Baba"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-yellow-400 shadow-lg"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Follow Us On Social Media
        </h1>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-transform transform hover:scale-105 shadow-md"
          >
            <FaYoutube className="text-xl" />
            YouTube
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-semibold py-2 px-4 rounded-full transition-transform transform hover:scale-105 shadow-md"
          >
            <FaInstagram className="text-xl" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default FollowUsBanner;
