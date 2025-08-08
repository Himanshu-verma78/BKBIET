import React from "react";

const Placement = () => {
  const stats = [
    {
      session: "2023-24",
      registered: 159,
      eligible: 109,
      companies: 48,
      offers: 74,
      highest: "8.50",
      average: "5.40",
      recruiters:
        "Aditya Birla Group, Hexaview Technologies, Grapecity, Secure Meters, FiftyFive Technologies, Genus Power Infrastructures Ltd., Celeb AI, Asahi India Glass Ltd, Coforge, Motherson Sumi Wiring India Limited (MSWIL)",
    },
    {
      session: "2022-23",
      registered: 200,
      eligible: 126,
      companies: 82,
      offers: 138,
      highest: "9.00",
      average: "5.50",
      recruiters:
        "Hexaview Technologies, Trilogy Innovations (36 LPA), ABG, RMS -Moody’s Analytics, Simplify VMS, OneBanc, Rapid Circle, Accolite Digital, Byju’s Learning App, Knoldus",
    },
    {
      session: "2021-22",
      registered: 182,
      eligible: 127,
      companies: 115,
      offers: 150,
      highest: "20.00",
      average: "5.17",
      recruiters:
        "Samsung R & D, Aditya Birla Group, Cybage Software, Unthinkable Solutions, Daffodil Software, Polestar Solutions, MTX Group, Upgrade Education, Metacube Software, Decimal Technologies",
    },
    {
      session: "2020-21",
      registered: 206,
      eligible: 105,
      companies: 97,
      offers: 130,
      highest: "12.00",
      average: "5.04",
      recruiters:
        "Cadence Design Systems, Commvault, Aditya Birla Group, Byju’s, Celebal Technologies, Securemeters, Digital Web Analytics, Zoxima, MTX Group, LifeRay",
    },
    {
      session: "2019-20",
      registered: 276,
      eligible: 107,
      companies: 58,
      offers: 107,
      highest: "10.00",
      average: "4.20",
      recruiters:
        "BYJU’s, Aditya Birla Group, UHG, Cadence, Celebal, Securemeters, Truechip, Daffodil, MTX Group, LifeRay",
    },
    // Add more records if needed
  ];

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
          Training & Placement Cell
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Training & Placement Cell continuously works towards developing employability skills in
          the students. Interactions with leading industry experts are conducted on a regular basis
          where eminent speakers share their experiences. Our training methodology includes
          presentations, live projects, tours, seminars, and various grooming sessions like aptitude
          tests, mock interviews, and group discussions.
        </p>

        <div className="bg-white p-4 rounded-lg shadow mb-10">
          <h2 className="text-2xl font-semibold text-blue-600">Contact Placement Cell</h2>
          <p className="mt-2 text-gray-700">
            <strong>Phone:</strong> 01596-244054 or 9414062520
            <br />
            <strong>Timings:</strong> 9am – 1pm & 3pm – 5pm
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Placement Statistics (2015 - 2024)</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700 bg-white rounded-lg shadow">
            <thead className="bg-blue-800 text-white">
              <tr>
                <th className="px-3 py-2">Session</th>
                <th className="px-3 py-2">Registered</th>
                <th className="px-3 py-2">Eligible</th>
                <th className="px-3 py-2">Companies</th>
                <th className="px-3 py-2">Offers</th>
                <th className="px-3 py-2">Highest (LPA)</th>
                <th className="px-3 py-2">Avg (LPA)</th>
                <th className="px-3 py-2">Top Recruiters</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((row, index) => (
                <tr key={index} className="border-b hover:bg-blue-50">
                  <td className="px-3 py-2 font-medium">{row.session}</td>
                  <td className="px-3 py-2">{row.registered}</td>
                  <td className="px-3 py-2">{row.eligible}</td>
                  <td className="px-3 py-2">{row.companies}</td>
                  <td className="px-3 py-2">{row.offers}</td>
                  <td className="px-3 py-2">{row.highest}</td>
                  <td className="px-3 py-2">{row.average}</td>
                  <td className="px-3 py-2">{row.recruiters}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Placement;
