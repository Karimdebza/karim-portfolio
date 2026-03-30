interface Props {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}

export default function Button({ label, href, onClick, variant = "primary" }: Props) {
  const base =
    "inline-block px-6 py-3 text-sm font-bold tracking-widest uppercase rounded transition-all duration-200";

  const styles = {
    primary: `${base} bg-cyan-400 text-black hover:opacity-80 hover:-translate-y-0.5`,
    ghost: `${base} border border-zinc-700 text-white hover:border-cyan-400 hover:-translate-y-0.5`,
  };

  if (href) {
    return (
      <a href={href} className={styles[variant]}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles[variant]}>
      {label}
    </button>
  );
}
