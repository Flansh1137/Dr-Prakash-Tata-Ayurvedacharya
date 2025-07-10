import { useState, useEffect } from "react";
import { featuredDeals } from "../data";

export default function FeaturedDeal() {
  const [currentDeal, setCurrentDeal] = useState(0);
  const [timeLeft, setTimeLeft] = useState(featuredDeals[currentDeal].timeLeft);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        else if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        else if (prev.hours > 0)
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const rotateTimer = setInterval(() => {
      setCurrentDeal((prev) => (prev + 1) % featuredDeals.length);
    }, 15000);
    return () => clearInterval(rotateTimer);
  }, []);

  useEffect(() => {
    setTimeLeft(featuredDeals[currentDeal].timeLeft);
    setShowFullDescription(false);
    setQuantity(1);
  }, [currentDeal]);

  const deal = featuredDeals[currentDeal];
  const savings = deal.originalPrice - deal.salePrice;
  const stockPercentage = Math.max(0, (deal.stockLeft / 20) * 100);

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the featured deal: ${
        deal.title
      } (Qty: ${quantity}) at ₹${deal.salePrice * quantity} (${
        deal.discount
      }% off). Please provide more details.`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Featured Deal of the Day</h2>
          <p className="text-base text-gray-600">
            Don’t miss out on our exclusive Ayurvedic offers!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-5xl mx-auto md:flex md:gap-6">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img
              src={deal.image}
              alt={deal.title}
              className="rounded-xl w-full object-cover mb-4 md:mb-0 h-64"
            />
            <div className="text-sm text-red-600 font-semibold mb-1">
              {deal.discount}% OFF - Only {deal.stockLeft} left!
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${stockPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
            <p className="text-gray-600 mb-4">
              {showFullDescription
                ? deal.description
                : `${deal.description.slice(0, 100)}...`}
              <button
                className="ml-2 text-green-600 underline text-sm"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? "Show less" : "Read more"}
              </button>
            </p>

            <div className="flex items-center gap-4 mb-2">
              <span className="text-2xl font-bold text-green-700">
                ₹{deal.salePrice * quantity}
              </span>
              <span className="text-lg text-gray-500 line-through">
                ₹{deal.originalPrice * quantity}
              </span>
            </div>
            <div className="text-sm text-green-700 mb-4">
              You save ₹{savings * quantity}!
            </div>

            <div className="mb-4">
              <label className="mr-2 font-medium">Quantity:</label>
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded-l bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1 border-t border-b bg-white">
                {quantity}
              </span>
              <button
                onClick={() =>
                  setQuantity(Math.min(deal.stockLeft, quantity + 1))
                }
                className="px-3 py-1 border rounded-r bg-gray-100"
              >
                +
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {deal.features.map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  ✓ {f}
                </span>
              ))}
            </div>

            <div className="mb-4 text-sm text-red-700">
              Offer ends in: {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full border border-green-700 text-green-700 py-3 rounded-lg font-semibold"
            >
              Order via WhatsApp
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {featuredDeals.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDealChange(idx)}
              className={`w-4 h-4 rounded-full ${
                currentDeal === idx ? "bg-green-700" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
