export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-black/80 backdrop-blur-md border-b border-zinc-800">
      <span className="font-mono text-sm text-cyan-400 tracking-widest">
        <span className="text-white">K</span>arim<span className="text-white">.</span>
      </span>

      <ul className="flex gap-8">
        {[
          { label: "À propos", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Projets", href: "#projects" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="text-xs font-mono text-zinc-400 hover:text-cyan-400 tracking-widest uppercase transition-colors duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
