// Converted JSX version using plain HTML elements and Tailwind CSS
import React, { useState, useRef } from "react";
import OurAchievements from "../components/AchievementSection";
import { galleryCategories, galleryImages, milestones } from "../data";

export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoading, setImageLoading] = useState({});
  const galleryRef = useRef(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  const handleImageLoad = (imageId) => {
    setImageLoading((prev) => ({ ...prev, [imageId]: false }));
  };

  const handleImageError = (imageId) => {
    setImageLoading((prev) => ({ ...prev, [imageId]: false }));
  };

  return (
    <div>
      {/* Our Achievements */}
      <OurAchievements />

      {/* Gallery */}
      <section className="py-20 bg-gray-100">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual journey through our achievements, facilities, and impact in
            Ayurvedic medicine.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm border transition ${
                selectedCategory === category
                  ? "bg-green-700 text-white border-green-700 shadow"
                  : "border-green-300 text-green-700 hover:bg-green-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          ref={galleryRef}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4"
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded shadow group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
                onLoad={() => handleImageLoad(image.id.toString())}
                onError={() => handleImageError(image.id.toString())}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 p-4 text-white">
                <h3 className="text-lg font-bold">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
