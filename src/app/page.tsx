import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Dock from "@/components/Dock";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <Hero />
      <Projects />
      <Achievements />
      <Testimonials />
      <Skills />
      <Timeline />
      <Dock />
      <Contact />
    </main>
  );
}
