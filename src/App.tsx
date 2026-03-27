import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
// import Footer from "./components/Footer";

import ProjectsSection from "./sections/ProjectSection";

export default function App() {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Navbar />
      <Hero />
      {/* <About /> */}
       <ProjectsSection />
      {/* <Footer /> */}
    </div>
  );
}