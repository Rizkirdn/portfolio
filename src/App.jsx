import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import PersonalHub from "./components/PersonalHub";
import Skills from "./components/Skills";
import GithubGraph from "./components/GithubGraph";
import Projects from "./components/Projects";
import Posters from "./components/Posters";
import Identity from "./components/Identity";
import Photography from "./components/Photography";
import VideoEditing from "./components/VideoEditing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import EasterEgg from "./components/EasterEgg";


function App() {
  // FUNGSI UNTUK EFEK SUARA RETRO GLOBAL
  useEffect(() => {
    const playClickSound = () => {
      // Suara ketikan mekanik / klik retro
      const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
      audio.volume = 0.3;
      audio.play().catch(() => {});
    };

    // Tambahkan suara ke SEMUA tombol dan link (a) di website
    const interactables = document.querySelectorAll("a, button");
    interactables.forEach(el => el.addEventListener("mousedown", playClickSound));

    return () => interactables.forEach(el => el.removeEventListener("mousedown", playClickSound));
  }, []);

      
  return (
    <div className="min-h-screen border-x-4 border-black max-w-[1440px] mx-auto bg-white">
      <EasterEgg/>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <PersonalHub />
      <Skills />
      <GithubGraph />
      <Projects />
      <Posters />
      <Identity />
      <Photography />
      <VideoEditing />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;