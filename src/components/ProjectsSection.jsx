import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import Section from "./Section";
import AnimatedDiv from "./AnimatedDiv";
function ProjectsSection() {
    return (
        <Section
            id="projects">
            <AnimatedDiv>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Projects
            </h2>

            <div
                className="
  bg-white/5
  border border-white/10

  rounded-2xl

  p-6

  hover:scale-[1.03]
  hover:border-blue-500

  transition
  "
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
            </AnimatedDiv>
        </Section>
    );
}

export default ProjectsSection;