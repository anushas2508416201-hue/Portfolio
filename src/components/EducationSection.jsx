import education from "../data/education";
import Section from "./Section";
import AnimatedDiv from "./AnimatedDiv";
function EducationSection() {
  return (
    <Section
      id="education">
      <AnimatedDiv>

      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Education
      </h2>

      {education.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-6"
        >
          <h3 className="text-2xl font-semibold">
            {item.degree}
          </h3>

          <p>{item.college}</p>

          <p>{item.duration}</p>

          <p>{item.cgpa}</p>
        </div>
      ))}
        </AnimatedDiv>
    </Section>
  );
}

export default EducationSection;