import React from 'react';

function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div>
          <h2 className="text-4xl font-bold text-blue-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions or need more information? Reach out to us!
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-blue-700 font-semibold">Address:</h3>
              <p className="text-gray-700">
                BKBIT College, Pilani,<br />
                Rajasthan, India – 333031
              </p>
            </div>

            <div>
              <h3 className="text-blue-700 font-semibold">Phone:</h3>
              <p className="text-gray-700">+91 9876543210</p>
            </div>

            <div>
              <h3 className="text-blue-700 font-semibold">Email:</h3>
              <p className="text-gray-700">info@bkbitcollege.edu.in</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Type your message here..."
              rows="4"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
