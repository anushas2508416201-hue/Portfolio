import experience from "../data/experience";
import Section from "./Section";
function ExperienceSection() {
  return (
    <Section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Experience
      </h2>

      {experience.map((item) => (
        <div
          key={item.id}
          className="border rounded-xl p-6"
        >
          <h3 className="text-2xl font-semibold">
            {item.role}
          </h3>

          <p>{item.company}</p>

          <p>{item.duration}</p>

          <p>{item.description}</p>
        </div>
      ))}
    </Section>
  );
}

export default ExperienceSection;