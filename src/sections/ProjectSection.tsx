import { projects } from "../data/Projects";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        Mes projets
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} projects={project} />
        ))}
      </div>
    </section>
  );
}