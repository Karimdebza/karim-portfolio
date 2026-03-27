export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white px-6 py-4 flex justify-between items-center z-50">
      <h1 className="font-bold text-lg">Karim</h1>

      <div className="flex gap-6">
        <a href="#projects" className="hover:text-gray-400">Projets</a>
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
}