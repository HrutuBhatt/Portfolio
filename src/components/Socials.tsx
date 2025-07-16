// src/components/Socials.tsx
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {MdEmail} from "react-icons/md";

export default function Socials() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      <a
        href="https://www.linkedin.com/in/hrutu-bhatt-891095252/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 text-2xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/HrutuBhatt"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 hover:text-black text-2xl"
      >
        <FaGithub />
      </a>
      <a
        href="mailto:hrutubhatt04@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-500 hover:text-red-600 text-2xl"
        >
        <MdEmail />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black-400 hover:text-black-600 text-2xl"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://instagram.com/_hrutubhatt_"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 text-2xl"
      >
        <FaInstagram />
      </a>
    </div>
  );
}
