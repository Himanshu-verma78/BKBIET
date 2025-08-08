import React from 'react';

const programs = [
  { name: "Computer Science & Engineering", level: "B.Tech", seats: 120, fee: "₹3.12 L (total)" },
  { name: "Information Technology", level: "B.Tech", seats: 60, fee: "₹3.12 L (total)" },
  { name: "Electrical Engineering", level: "B.Tech", seats: 60, fee: "₹3.12 L (total)" },
  { name: "Electronics & Communication Engineering", level: "B.Tech", seats: 60, fee: "₹3.12 L (total)" },
  { name: "Mechanical Engineering", level: "B.Tech", seats: 60, fee: "₹3.12 L (total)" },
  { name: "Artificial Intelligence", level: "B.Tech", seats: 60, fee: "₹3.12 L (total)" },
  { name: "CSE (Data Science)", level: "B.Tech", seats: 60, fee: "₹3.12 L (total)" },
  { name: "Computer Science & Engineering", level: "M.Tech", seats: 18, fee: "₹1.81 L (total)" },
  { name: "VLSI Design", level: "M.Tech", seats: 18, fee: "₹1.81 L (total)" },
];

export default function ProgramsSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">BKBIET Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-1">{p.name}</h3>
              <p className="text-sm text-indigo-600 font-medium">{p.level}</p>
              <p className="text-gray-600 mt-2">Seats: {p.seats}</p>
              <p className="text-gray-600">Fee: {p.fee}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-gray-500">
          *Note: Admission via JEE Main & REAP. Additional one-time refundable charges apply (~₹6,500).
        </p>
      </div>
    </section>
  );
}
