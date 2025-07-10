import React, { useEffect, useState } from 'react';

const images = [
  'https://wallpaperaccess.com/full/2996863.jpg', // ✅ Replace these with your actual image paths
  'https://wallpaperaccess.com/full/2996864.jpg',
  'https://wallpaperaccess.com/full/2996865.jpg'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500); // changes image every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full h-[65vh] bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          Discover the Power of Ayurved
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Natural remedies for a healthier life
        </p>
        <a href="/products">
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-3 rounded font-semibold md:text-lg transition-colors duration-300">
            Learn More
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
