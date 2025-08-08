import React from "react";

const facultyList = [
  {
    name: "Dr. Renu Sharma",
    subject: "Artificial Intelligence",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "PhD in AI, 12+ years experience, published 15+ papers in reputed journals."
  },
  {
    name: "Prof. Mohit Verma",
    subject: "Data Structures",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "IIT alumnus, GATE topper, strong focus on hands-on coding skills."
  },
  {
    name: "Dr. Pooja Mehta",
    subject: "Machine Learning",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
    bio: "Researcher with patents in ML, 10 years teaching experience."
  },
  {
    name: "Prof. Rajesh Kumar",
    subject: "Cyber Security",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
    bio: "Worked with DRDO, specialized in ethical hacking and data privacy."
  }
];

function Experienced() {
  return (
    <div className="bg-white min-h-screen py-10 px-6 md:px-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Meet Our Experienced Faculty</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          BKBIT College takes pride in its faculty members who are leaders in their fields and mentors for students.
        </p>
      </div>

      {/* Faculty Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {facultyList.map((faculty, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
          >
            <img
              src={faculty.img}
              alt={faculty.name}
              className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800">{faculty.name}</h2>
            <h4 className="text-purple-600 mb-2">{faculty.subject}</h4>
            <p className="text-gray-600 text-sm">{faculty.bio}</p>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">What Our Students Say</h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-10">
          Hear from students who have learned from our expert faculty and shaped successful careers.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic">
              "Learning under Dr. Renu Sharma changed my career direction — her AI classes were amazing!"
            </p>
            <p className="mt-2 font-semibold text-right text-purple-600">— Priya S., AI Engineer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic">
              "Prof. Mohit's live coding style made DSA super fun and helped me crack interviews at Amazon."
            </p>
            <p className="mt-2 font-semibold text-right text-purple-600">— Rahul V., SDE @ Amazon</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-purple-100 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-purple-800 mb-2">Ready to Learn from the Best?</h3>
        <p className="text-gray-700 mb-4">
          Join BKBIT College and get mentored by faculty who care about your future.
        </p>
       
      </div>
    </div>
  );
}

export default Experienced;
