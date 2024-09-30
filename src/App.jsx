import About from "./components/About";
import AchievmentShowcase from "./components/AchievementShowcase";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased ">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <AchievmentShowcase />
    </main>
  );
}
