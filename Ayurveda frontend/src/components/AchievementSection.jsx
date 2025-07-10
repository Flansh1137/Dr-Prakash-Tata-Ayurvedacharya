import { useState, useEffect } from "react";
import { achievements, achievementCategories as categories } from "../data";

export default function OurAchievements() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredAchievements =
    selectedCategory === "All"
      ? achievements
      : achievements.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header with Guruji Photo */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto relative overflow-hidden rounded-full border-4 border-green-600 shadow-2xl">
              <img
                src="https://images.navbharatlive.com/wp-content/uploads/2023/03/Prakash-Indian-Tata_V_jpeg--1280x720-4g.webp?sw=1536&dsz=1280x720&iw=855&p=false&r=1.25"
                alt="Guruji - Our Spiritual Leader"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
            </div>
            <div className="absolute -top-2 -right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
              Padma Shree
            </div>
            <div className="absolute -bottom-2 -left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              25+ Years
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our Guruji's Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Meet our esteemed spiritual leader, Dr. Ayurveda Guruji, whose
            dedication to traditional healing has touched thousands of lives and
            earned recognition at the highest levels.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-6">
            Experience the wisdom and healing touch of our renowned Guruji
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918208049909?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20consultation%20with%20Guruji."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-700 text-white rounded shadow hover:bg-green-800 transition text-center"
            >
              Book Consultation
            </a>
            <a
              href="/achievements"
              className="px-6 py-3 border border-yellow-500 text-yellow-600 rounded shadow hover:bg-yellow-100 transition text-center"
            >
              Read Success Stories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
