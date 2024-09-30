import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased bg-red-700">
      <Navbar />
      <HeroSection />
    </main>
  );
}
