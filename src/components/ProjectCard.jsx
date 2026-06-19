function ProjectCard({ project }) {
  return (
    <div
      className="
      bg-white/5

      border
      border-white/10

      rounded-3xl

      p-8

      hover:scale-105

      hover:border-blue-500

      transition-all
      duration-300
      "
    >
      <h3 className="text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mt-4 text-gray-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="
            px-3
            py-1

            rounded-full

            border
            border-white/10

            text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;