import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import profile from "../data/profile";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >

        {/* Developer icons */}
        <div className="flex justify-center gap-4 text-blue-400 text-2xl mb-6 animate-pulse">
          <FaCode />
          <FaLaptopCode />
        </div>

        {/* 👇 GIF ADDED HERE (before name) */}
        <img
          src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif"
          alt="developer working"
          className="w-40 mx-auto mb-6 rounded-xl"
        />

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold">
          {profile.name}
        </h1>

        <h2 className="text-xl text-gray-400 mt-4">
          {profile.title}
        </h2>

        <p className="text-gray-500 mt-6">
          {profile.description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition"
          >
            Resume
          </a>

        </div>

        {/* SOCIAL ICONS */}
        <div className="mt-10 flex justify-center gap-6 text-2xl">

          <a href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub className="text-gray-400 hover:text-white transition" />
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin className="text-gray-400 hover:text-blue-400 transition" />
          </a>

          <a href={profile.leetcode} target="_blank" rel="noreferrer">
            <SiLeetcode className="text-gray-400 hover:text-yellow-400 transition" />
          </a>

          <a href={profile.hackerrank} target="_blank" rel="noreferrer">
            <FaLaptopCode className="text-gray-400 hover:text-green-400 transition" />
          </a>  
        </div>

      </motion.div>
    </section>
  );
}

export default Hero;