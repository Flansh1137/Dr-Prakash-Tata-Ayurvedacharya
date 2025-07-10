import React from "react";
import { categories } from "../data";
import { Link } from "react-router-dom";

const CategoryCarousel = () => {
  return (
    <div className="bg-white px-8  sm:p-12    ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-semibold ">Categories</h2>
        <Link
          to="/categories"
          className="text-blue-600 text-sm hover:underline"
        >
          View All &rarr;
        </Link>
      </div>

      {/* Horizontal Scroll Wrapper */}
      <div className="flex justify-between gap-[6rem]   ">
        {categories.map((cat, idx) => (
          <Link
            to={`/categories/${encodeURIComponent(cat.name)}`}
            key={idx}
            className="flex flex-col pt-6s items-center min-w-[130px]" // ensures spacing works
          >
          <div className="w-40 h-40 p-1 bg-green-900  flex items-center justify-center overflow-hidden rounded-full">
          <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-full object-cover rounded-full"
          />
          </div>
            <span className="mt-2 text-sm text-center">{cat.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
