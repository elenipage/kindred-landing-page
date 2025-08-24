import React from "react";
import { Link } from "react-scroll";
import { FaLinkedinIn } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#BBF246] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          to="top"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-gray-800 cursor-pointer"
        >
          Kindred
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="our-mission"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            Our Mission
          </Link>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            className="text-gray-700 hover:text-gray-900 cursor-pointer"
          >
            Contact Us
          </Link>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/company/kindred-app" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}
