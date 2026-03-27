export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 to-purple-600 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Salut, je suis Karim</h1>
      <p className="text-xl max-w-xl mb-6">
        Développeur Full-Stack, passionné par les projets innovants et créatifs.
      </p>
      <a
        href="#projects"
        className="bg-white text-indigo-600 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition"
      >
        Voir mes projets
      </a>
    </section>
  );
}