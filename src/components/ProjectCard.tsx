type ProjectCard = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

type Props = {
  projects: ProjectCard;
};

export default function ProjectCard({ projects }: Props) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-xl font-bold mb-2 text-white">{projects.title}</h3>

      <p className="text-gray-400 mb-4">{projects.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {projects.tech.map((tech, index) => (
          <span
            key={index}
            className="text-sm bg-gray-800 text-gray-200 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={projects.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          GitHub
        </a>
        <a
          href={projects.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:underline"
        >
          Live
        </a>
      </div>
    </div>
  );
}