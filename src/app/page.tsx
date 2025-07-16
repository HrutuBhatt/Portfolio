import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements/>
      <Experience/>
      <Contact />
    </>
  );
}
