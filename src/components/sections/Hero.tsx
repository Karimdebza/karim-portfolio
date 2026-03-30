import Button from "../../ui/Button";

const badges = [
  "React · TypeScript",
  "Node.js",
  "Docker · CI/CD",
  "Data Analysis",
  "Linux · Bash",
  "Git · GitHub",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-8 pt-28 pb-16 relative overflow-hidden"
    >
      {/* Grille de fond */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,229,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      {/* Glow violet */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-3xl pointer-events-none" />

      <p className="font-mono text-xs text-cyan-400 tracking-[.2em] uppercase mb-6">
        // Master Ingénierie Numérique · Alternance Dev Full Stack
      </p>

      <h1 className="text-6xl md:text-8xl font-extrabold leading-none tracking-tight mb-6">
        Dev Full Stack
        <br />
        <span className="text-cyan-400">&amp; DevOps</span>
        <br />
        <span className="text-violet-500">Passionné.</span>
      </h1>

      <p className="font-mono text-sm text-zinc-400 leading-relaxed max-w-lg mb-8">
        // Je construis des systèmes robustes,
        <br />
        // j'analyse des données, je déploie des pipelines.
        <br />
        // En master, en alternance, toujours en train d'apprendre.
      </p>

      <div className="flex flex-wrap gap-2 mb-10">
        {badges.map((b) => (
          <span
            key={b}
            className="font-mono text-xs px-3 py-1.5 border border-zinc-700 text-zinc-400 rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
          >
            {b}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <Button label="Voir mes projets" href="#projects" variant="primary" />
        <Button label="Me contacter" href="#contact" variant="ghost" />
      </div>
    </section>
  );
}
