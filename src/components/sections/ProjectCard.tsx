import ProjectCard from "../../ui/ProjectCard";
import { projects } from "../../data/Projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-cyan-400 tracking-[.2em] uppercase mb-4">
          → Réalisations
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight mb-12">Projets</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {/* Placeholder prochain projet */}
          <div className="border border-dashed border-zinc-700 rounded-lg p-6 flex items-center justify-center opacity-40">
            <span className="font-mono text-xs text-zinc-500 tracking-widest">
              Prochain projet...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
