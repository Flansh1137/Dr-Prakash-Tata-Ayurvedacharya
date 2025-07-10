import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data";

export default function CategoryProductList() {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName || "");
  const [searchTerm, setSearchTerm] = useState(decodedCategory);

  const filteredProducts = products.filter((product) =>
    searchTerm
      ? product.category.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-green-100 via-yellow-50 to-gray-100 py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
            Our Ayurvedic Products
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our collection of authentic Ayurvedic products crafted with
            traditional wisdom and modern quality standards.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b px-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-4 py-2 rounded w-full max-w-md"
          />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSearchTerm("")}
              className={`px-4 py-2 rounded text-sm ${
                searchTerm === ""
                  ? "bg-green-600 text-white"
                  : "border text-gray-700 hover:bg-green-100"
              }`}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSearchTerm(category)}
                className={`px-4 py-2 border rounded text-sm hover:bg-green-100 ${
                  category === searchTerm ? "bg-green-600 text-white" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse all products.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 px-4 py-2 border rounded text-sm hover:bg-gray-100"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-8">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
                {searchTerm && ` for "${searchTerm}"`}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    key={product.id}
                    className="border rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md hover:scale-[1.02] transition-transform duration-200"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <p>{product.description}</p>
                      <p className="text-green-600 font-bold">
                        ₹{product.price}
                      </p>
                      <span className="text-xs text-gray-500">
                        {product.category}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
