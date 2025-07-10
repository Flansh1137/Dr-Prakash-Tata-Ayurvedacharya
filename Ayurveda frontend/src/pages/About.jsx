import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [activeValue, setActiveValue] = useState(0);

  const cn = (...classes) => classes.filter(Boolean).join(" ");

  const coreValues = [
    {
      title: "Traditional Wisdom",
      description:
        "We honor the ancient knowledge of Ayurveda, passed down through generations of healers and sages.",
      icon: "📜",
      details:
        "Our formulations are based on classical Ayurvedic texts like Charaka Samhita and Sushruta Samhita, ensuring authenticity in every product.",
    },
    {
      title: "Natural Purity",
      description:
        "Every ingredient is sourced from nature, carefully selected for its therapeutic properties and purity.",
      icon: "🌿",
      details:
        "We work directly with organic farms and maintain strict quality control from seed to shelf, ensuring 100% natural products.",
    },
    {
      title: "Scientific Approach",
      description:
        "Combining ancient wisdom with modern scientific methods to create effective, safe, and reliable products.",
      icon: "🔬",
      details:
        "Our research team validates traditional formulations using modern analytical techniques and clinical studies.",
    },
    {
      title: "Holistic Wellness",
      description:
        "We believe in treating the whole person - mind, body, and spirit - not just the symptoms.",
      icon: "🧘‍♀️",
      details:
        "Our approach addresses root causes and promotes overall well-being through personalized wellness solutions.",
    },
  ];

  const timeline = [
    {
      year: "1998",
      event: "Founded with a vision to revive traditional Ayurveda",
      milestone: "Company Founded",
    },
    {
      year: "2002",
      event: "Opened our first research facility",
      milestone: "R&D Expansion",
    },
    {
      year: "2008",
      event: "Launched organic certification program",
      milestone: "Quality Milestone",
    },
    {
      year: "2015",
      event: "Received Padma Shree recognition",
      milestone: "National Honor",
    },
    {
      year: "2020",
      event: "Expanded internationally",
      milestone: "Global Reach",
    },
    {
      year: "2024",
      event: "25+ years of healing excellence",
      milestone: "Silver Jubilee",
    },
  ];

  const team = [
    {
      name: "Dr. Ayurveda Guruji",
      role: "Founder & Chief Ayurvedic Physician",
      image:
        "https://images.unsplash.com/photo-1622556498246-755f44ca76f3?w=300&h=300&fit=crop&crop=face",
      credentials: [
        "Padma Shree Awardee",
        "25+ Years Experience",
        "5000+ Patients Healed",
      ],
      description:
        "A visionary leader who has dedicated his life to preserving and promoting traditional Ayurvedic healing.",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Research & Development",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      credentials: [
        "PhD in Botanical Sciences",
        "15+ Years R&D",
        "50+ Research Papers",
      ],
      description:
        "Leading our scientific research initiatives to validate and enhance traditional Ayurvedic formulations.",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Quality Assurance Director",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      credentials: [
        "M.Pharm in Quality Control",
        "ISO Certified Expert",
        "20+ Years Experience",
      ],
      description:
        "Ensuring every product meets the highest standards of quality, safety, and efficacy.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-800/10 via-green-300/5 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-800/5 rounded-full translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full -translate-x-48 translate-y-48"></div>
        </div>
        <div className="container mx-auto px-4 relative text-center max-w-4xl mx-auto">
          <div className="inline-block bg-green-800/10 text-green-800 border border-green-800/20 rounded-full px-4 py-2 mb-6">
            25+ Years of Healing Excellence
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-green-800">AyurVeda</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are guardians of ancient wisdom, bridging the gap between
            traditional Ayurvedic knowledge and modern wellness needs.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                To make authentic Ayurvedic healing accessible to everyone,
                preserving ancient wisdom while embracing modern scientific
                validation.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-4 text-gray-900">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600">
                To become the world's most trusted brand in Ayurvedic wellness,
                setting new standards for quality and effectiveness.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=500&fit=crop"
              alt="Herbs"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-green-800 text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm">Lives Transformed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {coreValues.map((value, index) => (
            <div
              key={index}
              onClick={() => setActiveValue(activeValue === index ? -1 : index)}
              className={cn(
                "cursor-pointer bg-white p-6 text-center rounded-xl shadow-md hover:shadow-xl transition-all",
                activeValue === index && "ring-2 ring-green-800/30"
              )}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 mb-2">{value.description}</p>
              {activeValue === index && (
                <p className="text-sm text-green-800 mt-2 bg-green-100 p-2 rounded">
                  {value.details}
                </p>
              )}
              <button className="mt-4 text-green-800 hover:underline">
                {activeValue === index ? "Show Less" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A timeline of milestones that shaped our commitment to Ayurvedic
            excellence.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-green-800/20"></div>
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-800 rounded-full border-4 border-white shadow-lg z-10"></div>
              <div
                className={`w-5/12 bg-white p-6 rounded-lg shadow-lg border border-gray-100 ${
                  index % 2 === 0 ? "mr-auto" : "ml-auto"
                }`}
              >
                <div className="inline-block bg-green-800 text-white text-sm px-3 py-1 rounded-full mb-3">
                  {item.milestone}
                </div>
                <div className="text-2xl font-bold text-green-800 mb-2">
                  {item.year}
                </div>
                <p className="text-gray-600">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-green-800/5 to-green-300/5">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team of dedicated professionals combines deep Ayurvedic
            knowledge with modern expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-800 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.credentials.map((cred, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-xs px-3 py-1 rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of satisfied customers who have experienced the power
            of authentic Ayurvedic healing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products">
              <button className="bg-white text-green-800 text-lg font-semibold px-8 py-3 rounded-lg hover:bg-gray-100">
                Explore Our Products
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-white text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-green-800">
                Get Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
