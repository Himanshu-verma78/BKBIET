import React from "react";
import { useNavigate } from "react-router-dom";

function Body() {
  const navigate = useNavigate();
  return (
    <section className="bg-blue-100 py-12 px-6 text-center">
      <h2 className="text-4xl font-bold   text-black  mb-6 relative bg-[url('IMG_3009.jpg')] bg-cover bg-center bg-no-repeat h-60 p-3 ">
        {" "}
        <span className="text-4xl font-extrabold p-2 rounded  ">
          Birla Institute of Engineering & Technology College
        </span>
      </h2>

      <p className="text-lg max-w-3xl mx-auto text-gray-700 mb-8">
        BKBIT College is dedicated to providing an enriching academic experience
        with a focus on innovation, excellence, and holistic development.
      </p>

      <div className="grid gap-6    duration-750 md:grid-cols-3 mt-8">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl   transition" onClick={() => navigate("/Experienced")}>
          <h3 className="text-xl font-semibold mb-2 ">
           Experienced Faculty
           
          </h3>
          <p className="text-gray-600">
            Learn from top professors with real-world experience.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition" onClick={() => navigate("/Modern")}>
          <h3 className="text-xl font-semibold mb-2">
            Modern Campus
          </h3>
          <p className="text-gray-600">
            Smart classrooms, labs, library, and Wi-Fi across campus.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl transition"  onClick={() => navigate("/Career")}>
          <h3 className="text-xl font-semibold mb-2">
            Career Support
          </h3>
          <p className="text-gray-600">
            Internships, placements, and startup support for every student.
          </p>
        </div>
      </div>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            'url("https://source.unsplash.com/1600x900/?college,building")',
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to BKBIT College
          </h1>
          <p className="text-lg max-w-xl mx-auto">
            Empowering students with knowledge, innovation, and leadership for a
            better tomorrow.
          </p>
        </div>
        {/* About Section */}
        <section className="py-12 px-6 md:px-16 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Why Choose BKBIT?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            BKBIT College offers world-class infrastructure, industry-integrated
            curriculum, and expert faculty to shape the leaders of tomorrow. We
            believe in holistic education that fosters both academic excellence
            and personal growth.
          </p>
        </section>
      </section>
      {/* Features Section */}
      <section className="py-12 px-4 md:px-16 bg-purple-100">
        <h2 className="text-2xl font-bold text-center mb-6">
          Our Key Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-2 " onClick={() => navigate("/Industry")}>
              syllabus
            </h3>
            <p className="text-gray-700">
              Courses designed with real-world skills and industry partnerships.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-2" onClick={() => navigate("/Location")}>
              Location
            </h3>
            <p className="text-gray-700">
              Smart classrooms, innovation labs, and research centers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-purple-700 mb-2 " onClick={() => navigate("/Placement")}>
              Placement Support
            </h3>
            <p className="text-gray-700">
              Top recruiters and 90%+ placement success every year.
            </p>
          </div>
        </div>
      </section>
      {/* Image Gallery */}
      <section className="py-8 px-4 md:px-16 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Campus Life & Facilities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            className="rounded-lg shadow-lg"
            src="\src\components\download (5).jpeg"
            alt="Campus 1"
          />
          <img
            className="rounded-lg shadow-lg"
            src="\src\components\download (4).jpeg"
            alt="Campus 2"
          />
          <img
            className="rounded-lg shadow-lg"
            src="\src\components\download (6).jpeg"
            alt="Campus 3"
          />
        </div>
      </section>
    </section>
  );
}

export default Body;
