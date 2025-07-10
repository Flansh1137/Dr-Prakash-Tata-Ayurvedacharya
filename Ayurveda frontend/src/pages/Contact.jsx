import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consultationType: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeContact, setActiveContact] = useState(0);

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consultationType: "general",
    });
  };

  const contactMethods = [
    {
      icon: "📍",
      title: "Visit Our Center",
      details: ["123 Wellness Street", "Nature City, State 12345", "India"],
      action: "Get Directions",
      color: "bg-green-700",
    },
    {
      icon: "📞",
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 9AM-7PM"],
      action: "Call Now",
      color: "bg-emerald-500",
    },
    {
      icon: "📧",
      title: "Email Us",
      details: [
        "info@ayurveda.com",
        "support@ayurveda.com",
        "Response within 24hrs",
      ],
      action: "Send Email",
      color: "bg-green-700",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: ["+91 98765 43210", "Quick responses", "Available 24/7"],
      action: "Chat Now",
      color: "bg-green-500",
    },
  ];

  const consultationTypes = [
    { value: "general", label: "General Inquiry", icon: "❓" },
    { value: "consultation", label: "Health Consultation", icon: "🩺" },
    { value: "product", label: "Product Information", icon: "🌿" },
    { value: "partnership", label: "Business Partnership", icon: "🤝" },
  ];

  const faqs = [
    {
      question: "How can I book a consultation?",
      answer:
        "You can book a consultation by filling out our contact form, calling us directly, or using our WhatsApp service. Our experts will get back to you within 24 hours.",
    },
    {
      question: "Are your products certified organic?",
      answer:
        "Yes, all our products are certified organic and undergo rigorous testing for quality and purity. We maintain the highest standards in Ayurvedic product manufacturing.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide. Shipping times and costs vary by location. Please contact us for specific shipping information to your country.",
    },
    {
      question: "Can I visit your facility?",
      answer:
        "Absolutely! We welcome visitors to our wellness center. Please schedule an appointment in advance to ensure our experts are available to meet with you.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative py-20 bg-gradient-to-br from-green-700/10 via-green-400/5 to-white overflow-hidden">
        <div className="container mx-auto px-4 relative text-center">
          <span className="inline-block mb-6 bg-green-700/10 text-green-700 border border-green-700/20 px-4 py-2 rounded">
            We're Here to Help
          </span>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get in <span className="text-green-700">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or need personalized wellness
            guidance? Our team of Ayurvedic experts is ready to help you on your
            journey to natural health.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg p-6 text-center cursor-pointer transition-transform ${
                activeContact === index ? "ring-2 ring-green-700/30" : ""
              }`}
              onClick={() => setActiveContact(index)}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl ${method.color}`}
              >
                {method.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {method.title}
              </h3>
              <div className="space-y-1 mb-4 text-sm text-gray-600">
                {method.details.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
              <button className="border border-green-700 text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white text-sm">
                {method.action}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Send us a Message
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you as soon as
              possible.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  What can we help you with?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {consultationTypes.map((type) => (
                    <label
                      key={type.value}
                      className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-all ${
                        formData.consultationType === type.value
                          ? "border-green-700 bg-green-100"
                          : "border-gray-200 hover:border-green-400"
                      }`}
                    >
                      <input
                        type="radio"
                        name="consultationType"
                        value={type.value}
                        checked={formData.consultationType === type.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-lg">{type.icon}</span>
                      <span className="text-sm font-medium">{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-700"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject of your inquiry"
                  required
                  className="border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-700"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your inquiry in detail..."
                className="border p-2 rounded w-full min-h-[120px] focus:outline-none focus:ring-2 focus:ring-green-700"
                required
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 transition-all"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <div className="h-64 relative bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop')] opacity-50">
                <div className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <h3 className="font-bold text-green-700 mb-1">
                      Visit Our Wellness Center
                    </h3>
                    <p className="text-sm text-gray-600">
                      123 Wellness Street, Nature City
                    </p>
                    <button className="mt-3 px-4 py-2 bg-green-700 text-white rounded">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="text-xl text-green-700 font-bold flex items-center mb-4">
                🕒 Business Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
                  { day: "Sunday", hours: "10:00 AM - 4:00 PM" },
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between text-gray-800">
                    <span>{schedule.day}</span>
                    <span className="font-semibold text-green-700">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-green-700 bg-green-100 p-3 rounded">
                💡 Emergency consultations available 24/7 via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and
              products.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
