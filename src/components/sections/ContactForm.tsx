const links = [
  { label: "✉ Email",     href: "mailto:karim@email.com" },
  { label: "in LinkedIn", href: "https://linkedin.com/in/karim" },
  { label: "⌥ GitHub",   href: "https://github.com/karim" },
];

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-8 bg-black">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-mono text-xs text-cyan-400 tracking-[.2em] uppercase mb-4">
          → Contact
        </p>
        <h2 className="text-4xl font-extrabold tracking-tight mb-4">
          Travaillons ensemble
        </h2>
        <p className="font-mono text-sm text-zinc-400 leading-relaxed mb-10">
          Alternance, projet, collaboration ou juste échanger sur le DevOps ?
          <br />
          Mon inbox est ouvert.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="font-mono text-xs px-5 py-3 border border-zinc-700 text-white rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
