import React from 'react';

const teamMembers = [
  {
    name: 'Dr. TATA',
    role: 'Chief Ayurvedic Practitioner',
    image: '',
  },
];

const AboutUs = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 space-y-12 bg-green-50">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-green-800">Meet Our Ayurvedic Experts</h1>
        <p className="max-w-2xl mx-auto text-base text-green-700">
          Our dedicated team blends ancient Ayurvedic wisdom with modern wellness practices to guide you on a holistic healing journey.
        </p>
      </header>

      {/* Centered Team Card Section */}
    {/* Centered Team Card Section */}
<div className="flex justify-center h-[700px] items-center">
  {teamMembers.map((member) => (
    
    <div
      key={member.name}
      className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-24 h-24 object-cover mx-auto mb-4 h-[300px] w-[300px] rounded-full border-2 border-green-200 hover:border-green-500 transition"

        onError={(e) => {
          e.target.src = '/team/default.jpg';
        }}
      />
      <h3 className="text-lg font-semibold text-green-800">{member.name}</h3>
      <p className="text-sm text-green-600 mt-1">{member.role}</p>
    </div>
  ))}
</div>


      {/* CTA */}
      <div className="text-center mt-10">
        <p className="italic text-green-700">
          “Healing begins with nature — and our team is here to help you restore balance through Ayurveda.”
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
