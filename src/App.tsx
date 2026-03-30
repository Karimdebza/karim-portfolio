import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/ProjectCard";
import ContactForm from "./components/sections/ContactForm";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
