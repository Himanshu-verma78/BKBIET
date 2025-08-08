import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* College Info */ }
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-400">BKBIT</h2>
          <p className="text-sm">
            B.K. Birla Institute of Technology is committed to excellence in education and research, fostering innovation for a better tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#" className="hover:text-blue-400">Courses</a></li>
            <li><a href="#" className="hover:text-blue-400">Admission</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Contact Us</h3>
          <p className="text-sm">BKBIT, Pilani, Rajasthan - 333031</p>
          <p className="text-sm mt-2">Email: info@bkbit.edu.in</p>
          <p className="text-sm">Phone: +91-12345-67890</p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-blue-300">Follow Us</h3>
          <div className="flex space-x-4 text-blue-400 text-xl">
            <a href="#"><FaFacebookF className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BKBIT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
