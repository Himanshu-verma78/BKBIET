import React, { useEffect, useState } from "react";

function Name() {
  const [count, setCount] = useState(34); // starting count

  // Simulate admissions every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3)); // Add 0-2
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-2 border-2 border-blue-500   flex-col items-center    justify-center p-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-blue-600 tracking-wide text-center drop-shadow-md underline decoration-blue-400 decoration-4 underline-offset-4 animate-fadeIn">
  Admission Section
</h1>


      <div className="flex flex-col md:flex-row  ">
        {/* Left Counter Section */}
        <div className=" shadow-lg rounded-xl p-6 flex flex-col items-center justify-center w-full md:w-1/3">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            Live Admissions
          </h2>
          <p className="text-5xl font-bold text-green-600 animate-bounce">
            {count}
          </p>
          <p className="text-gray-500 mt-2 text-sm">Admissions per minute</p>
        </div>

        {/* Glowing Border Form */}
        <div className="relative p-10 rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-blue-400 before:to-purple-600 before:blur-md before:animate-pulse w-full md:w-1\2">
          <form className="relative bg-white shadow-xl rounded-xl p-8 space-y-4 z-10">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Course
              </label>
              <select className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Select course</option>
                <option>B.Tech</option>
                <option>BCA</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Submit Application
            </button>
          </form>

        </div>
      </div>
    </div>
    
  );
}

export default Name;
