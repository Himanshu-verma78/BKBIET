import React from "react";

const Location = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">
          Our Location
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Birla Institute of Technology, Pilani Campus
          </h3>
          <p className="text-gray-700 mb-2">
            Near CEERI Pilani, Jhunjhunu, Rajasthan - 333031, India
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +91 1596 244054 / 9414062520
          </p>
        </div>

        <div className="w-full mb-10">
          <iframe
            title="BKBIT Pilani Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.2923443918694!2d75.58841751506213!3d28.35812580145456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911bd841d6cc82d%3A0x5c43b29ccf186e58!2sBirla%20Institute%20of%20Technology%20(BKBIT)%2C%20Pilani!5e0!3m2!1sen!2sin!4v1625232045678!5m2!1sen!2sin"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl shadow"
          ></iframe>
          
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h4 className="text-xl font-semibold text-blue-700 mb-3">Nearby Landmarks:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>CEERI Pilani (Central Electronics Engineering Research Institute)</li>
            <li>Birla Science Museum</li>
            <li>BITS Pilani Campus</li>
            <li>Birla Mandir Pilani</li>
            <li>Sharda Cinema</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Location;
