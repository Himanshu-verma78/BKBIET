import React from "react";

const features = [
  {
    title: "Smart Classrooms",
    desc: "Equipped with interactive boards & high-speed internet.",
  },
  {
    title: "Hi-Tech Labs",
    desc: "Modern labs for CS, AI, IoT, Robotics, and more.",
  },
  {
    title: "Wi-Fi Campus",
    desc: "High-speed connectivity throughout the campus.",
  },
  {
    title: "Digital Library",
    desc: "Access thousands of e-books, journals, and research papers.",
  },
  {
    title: "Green Infrastructure",
    desc: "Eco-friendly buildings and solar energy systems.",
  },
  {
    title: "Sports Facilities",
    desc: "Modern courts for basketball, volleyball, and gym.",
  },
];

const gallery = [
  "/src/assets/campus1.jpg",
  "/src/assets/campus2.jpg",
  "/src/assets/campus3.jpg",
  "/src/assets/campus4.jpg",
  "/src/assets/campus5.jpg",
  "/src/assets/campus6.jpg",
];

function Modern() {
  return (
    <div className="min-h-screen bg-white px-6 py-10 md:px-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800">Modern Campus</h1>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Explore BKBIT’s state-of-the-art infrastructure designed to empower
          students.
        </p>
      </header>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-700">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Campus Gallery
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Campus ${i + 1}`}
              className="rounded-lg shadow-lg object-cover w-full h-48"
            />
          ))}
        </div>
      </section>

      <section className="bg-blue-100 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold text-blue-800">
          See It For Yourself
        </h3>
        <p className="text-gray-700 mt-2">
          Book a campus tour and experience the learning environment firsthand.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">
          Book a Tour
        </button>
      </section>
    </div>
  );
}

export default Modern;
