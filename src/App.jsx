import About from "./components/About";
import AchievmentShowcase from "./components/AchievementShowcase";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Trajectory from "./components/Trajectory";

export default function App() {
  return (
    <main className="main-bg">
      <Navbar />
      <Hero />
      <About />
      <Trajectory />
      <Projects />
      {/* <Skills /> */}
      {/* <AchievmentShowcase /> */}
      {/* <Testimonials /> */}
      <ContactForm />
      <Footer />
    </main>
  );
}
