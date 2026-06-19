import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../data/profile";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10 px-6 py-4 flex justify-between items-center">

      <div className="font-bold text-lg flex items-center gap-2">
        <span className="text-blue-400">{`</>`}</span>
        Portfolio
      </div>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#skills">SKILLS</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>

      {/* SOCIAL */}
      <div className="flex gap-4 text-xl">
        <a href={profile.github} target="_blank">
          <FaGithub className="hover:text-white text-gray-400" />
        </a>

        <a href={profile.linkedin} target="_blank">
          <FaLinkedin className="hover:text-blue-400 text-gray-400" />
        </a>
      </div>

    </nav>
  );
}

export default Navbar;