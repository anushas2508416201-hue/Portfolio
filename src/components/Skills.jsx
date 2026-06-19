import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaJava,
    FaPython,
    FaCode,
} from "react-icons/fa";

import { SiDart, SiFlutter, SiFirebase } from "react-icons/si";
function Skills() {
    const skills = [
        { name: "C", icon: <FaCode className="text-gray-400" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Dart", icon: <SiDart className="text-blue-400" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
        { name: "GitHub", icon: <FaGithub /> },
    ];

    return (
        <section id="skills" className="max-w-6xl mx-auto px-6 py-24">

            <h2 className="text-4xl font-bold mb-10">
                Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        className="
              flex flex-col items-center gap-3

              p-6

              bg-white/5
              border border-white/10

              rounded-2xl

              text-sm
            "
                    >
                        <div className="text-3xl">
                            {skill.icon}
                        </div>

                        {skill.name}
                    </motion.div>
                ))}

            </div>

        </section>
    );
}

export default Skills;