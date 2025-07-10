import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data";
import ReactImageMagnify from "react-image-magnify";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">Product not found.</p>
      </div>
    );
  }

  const whatsappNumber = "91XXXXXXXXXX"; // Replace with actual number
  const whatsappMessage = `Hello, I'm interested in buying *${
    product.name
  }* (Qty: ${quantity}) for ₹${
    product.price * quantity
  }. Please provide more details.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        {/* LEFT: Zoom Image */}
        <div className="md:w-1/2">
          <div className="border rounded">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: product.name,
                  isFluidWidth: true,
                  src: mainImage,
                },
                largeImage: {
                  src: mainImage,
                  width: 1200,
                  height: 1200,
                },
                enlargedImageContainerStyle: {
                  background: "#fff",
                  zIndex: 999,
                },
                enlargedImageContainerDimensions: {
                  width: "120%",
                  height: "80%",
                },
                isHintEnabled: true,
                shouldUsePositiveSpaceLens: true,
              }}
            />
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.name} ${index}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover border rounded cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 ${
                  mainImage === img ? "ring-1 ring-green-300" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-green-700 font-semibold">
            ₹{product.price}{" "}
            <span className="text-sm text-gray-500">/ unit</span>
          </p>

          {/* Quantity selector */}
          <div className="flex items-center border rounded-md w-max overflow-hidden text-xl">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
            >
              −
            </button>
            <div className="px-6 py-2 bg-white text-center select-none">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
            >
              +
            </button>
          </div>

          {/* Total price */}
          <p className="text-lg text-gray-800 font-semibold">
            Total: ₹{product.price * quantity}
          </p>

          <p className="text-sm text-gray-500 italic">
            Category: {product.category}
          </p>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Description:
            </h3>
            <p className="text-gray-700">{product.description}</p>
          </div>

          {/* Ingredients */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Ingredients:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Direction for Use */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Direction for Use:
            </h3>
            <p className="text-gray-700">{product.direction}</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F3CC59] hover:bg-yellow-400 text-black text-center px-6 py-3 rounded-md text-lg transition-colors duration-300"
            >
              Buy on WhatsApp
            </a>
            <button
              onClick={() => navigate(-1)}
              className="border border-gray-400 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-md text-lg"
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
