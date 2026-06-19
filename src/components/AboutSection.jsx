import Section from "./Section";
import AnimatedDiv from "./AnimatedDiv";
function AboutSection() {
  return (
    <Section
      id="about"
      className="max-w-6xl mx-auto px-6 py-24"
    >
    <AnimatedDiv>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        About Me
      </h2>

      <p className="text-gray-300 leading-8 text-justify">
        Third-year Computer Engineering student passionate about building impactful software solutions. Skilled in Flutter, Firebase, React, Node.js, and MongoDB, with a strong interest in full-stack and mobile application development. I enjoy solving real-world problems, learning new technologies, and transforming ideas into scalable, user-focused applications while continuously improving my technical and problem-solving abilities.
      </p>

    </AnimatedDiv>
    </Section>
  );
}

export default AboutSection;