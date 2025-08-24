import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Element } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-[#1D2023] text-gray-200 py-10">
      <Element name="contact-us" className="max-w-7xl mx-auto px-10 md:px-5 grid md:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-gray-400 mb-3">Email: hello@kindredapp.org.uk</p>
          <p className="flex justify-start items-center text-gray-400">Socials:
          <a href="#" className="mx-3 hover:text-white"><FaLinkedinIn /></a>
          </p>
        </div>
      </Element>
    </footer>
  );
}
