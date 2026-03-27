export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

export const projects: Project[] = [
  {
    title: "Puzzle Game",
    description: "Jeu interactif avec logique avancée.",
    tech: ["React", "Node.js"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio",
    description: "Portfolio React TSX avec Tailwind via CDN.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
];