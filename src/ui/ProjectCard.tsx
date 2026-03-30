import type { Project } from "../types/Project";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col gap-4 transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1 group overflow-hidden">
      {/* Barre top au hover */}
      <span className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>

      <p className="text-sm text-zinc-400 leading-relaxed font-mono flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded bg-violet-900/40 border border-violet-700/40 text-violet-300 font-mono"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            className="text-xs font-mono text-cyan-400 hover:opacity-70 tracking-widest uppercase transition"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="text-xs font-mono text-cyan-400 hover:opacity-70 tracking-widest uppercase transition"
          >
            Live →
          </a>
        )}
      </div>
    </div>
  );
}
