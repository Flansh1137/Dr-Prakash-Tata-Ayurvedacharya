import React, { useEffect, useState } from "react";

const ads = [
  {
    title: "Up to 50% Off on Herbal Teas",
    subtitle: "Boost your health with natural immunity",
    image: "https://www.vachmi.com/images/ayurveda.jpg",
  },
  {
    title: "Buy 1 Get 1 Free – Ayurvedic Oils",
    subtitle: "Natural pain relief oils for joints & muscles",
    image:
      "https://static.vecteezy.com/system/resources/previews/002/076/659/non_2x/homeopathic-spa-treatment-on-a-leaf-free-photo.jpg",
  },
  {
    title: "Free Shipping on Orders Above ₹499",
    subtitle: "Order now and get fast delivery across India",
    image: "https://wallpapercave.com/wp/wp6845526.jpg",
  },
];

const AdBanner = () => {
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, image } = ads[currentAd];

  return (
    <div className="relative w-full h-[220px] md:h-[520px] overflow-hidden shadow-md ">
      <img
        src={image}
        alt="Ad banner"
        className="w-full h-full object-cover transition-all duration-1000 "
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col  justify-center items-start px-20 text-white">
        <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
        <p className="mt-2 md:text-lg">{subtitle}</p>
        <a
          href="/products"
          className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default AdBanner;
