import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          About BKBIT College
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
          BKBIT College, Pilani, is a premier institution dedicated to
          excellence in education, innovation, and research. Established with a
          vision to nurture the next generation of leaders, thinkers, and
          creators, our college provides a transformative learning environment
          that combines academic rigor with holistic development.
        </p>
        <div className="text-gray-700 textlg mb-5">
          <h1 className="p-1.5 text-3xl text-blue-800  m-3">History</h1>
          AI Overview CAMPUS RECRUITMENT DRIVE | B K Birla Institute of ... B.K.
          Birla Institute of Engineering & Technology (BKBIET), Pilani, was
          established in 2007 by the Shree Krishnarpan Charity Trust, under the
          chairmanship of Basant Kumar Birla. It is a private engineering
          college located in Pilani, Rajasthan. The institute is focused on
          providing quality engineering and technology education with
          industry-oriented and application-driven programs. BKBIET is approved
          by the AICTE and affiliated with Rajasthan Technical University (RTU),
          Kota, and Bikaner Technical University, Bikaner for its undergraduate
          programs. The institute offers programs in Computer Science
          Engineering, Information Technology, Electronics & Communication
          Engineering, Electrical Engineering, Mechanical Engineering, and
          Artificial Intelligence. The institute emphasizes a strong focus on
          industry collaboration, providing students with opportunities for
          research, innovation, and engagement with leading universities and
          professional bodies. BKBIET boasts modern infrastructure,
          well-equipped laboratories, a dedicated faculty, and a well-stocked
          library. It also provides facilities like hostels, playgrounds, and
          workshops.
        </div>

        <div className=" mb-1.5 gap-8">
          {/* Vision Section */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To become a globally recognized institution that fosters
              innovation, cultivates leadership, and produces graduates capable
              of shaping the future through knowledge and compassion.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to provide high-quality education, encourage
              critical thinking, support groundbreaking research, and promote
              social responsibility among our students.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">
            Core Values
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Integrity and Ethics</li>
            <li>Academic Excellence</li>
            <li>Innovation and Creativity</li>
            <li>Inclusivity and Diversity</li>
            <li>Commitment to Community</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
