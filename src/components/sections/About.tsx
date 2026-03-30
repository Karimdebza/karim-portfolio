const stats = [
  { num: "M1", label: "Master en cours" },
  { num: "∞",  label: "Curiosité" },
  { num: "2+",  label: "Projets perso" },
  { num: "DevOps", label: "Passion #1" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-8 bg-zinc-950">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Texte */}
        <div>
          <p className="font-mono text-xs text-cyan-400 tracking-[.2em] uppercase mb-4">
            → À propos
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight mb-8">
            Qui suis-je ?
          </h2>
          <div className="space-y-4 font-mono text-sm text-zinc-400 leading-relaxed">
            <p>
              Étudiant en{" "}
              <span className="text-cyan-400 font-bold">
                Master Manager de l'Ingénierie Numérique
              </span>
              , en alternance comme{" "}
              <span className="text-cyan-400 font-bold">Dev Full Stack</span>.
            </p>
            <p>
              Passionné de{" "}
              <span className="text-cyan-400 font-bold">DevOps</span> depuis ma
              première année de master — pipelines CI/CD, conteneurisation,
              automatisation. C'est ce qui me fait lever le matin.
            </p>
            <p>
              Je travaille également sur l'
              <span className="text-cyan-400 font-bold">analyse de données</span>{" "}
              : exploration, visualisation, extraction de valeur depuis les
              données brutes.
            </p>
            <p>Toujours en train de construire, d'apprendre, et d'aller plus loin.</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-lg overflow-hidden">
          {stats.map(({ num, label }) => (
            <div key={label} className="bg-zinc-900 p-6 text-center">
              <span className="block text-3xl font-extrabold text-cyan-400 leading-none">
                {num}
              </span>
              <span className="block font-mono text-xs text-zinc-500 tracking-widest uppercase mt-2">
                {label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
