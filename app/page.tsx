import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillCard from "./components/SkillCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
