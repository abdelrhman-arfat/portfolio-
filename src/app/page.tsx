"use client";

import { useContext } from "react";
import { ThemContext } from "./_components/context/Context";
import HeroSection from "./_components/sections/HeroSection";
import TechIconsSection from "./_components/sections/TechIconsSection";
import AboutSection from "./_components/sections/AboutSection";
import ProjectSection from "./_components/sections/ProjectsSection";
import ContactSection from "./_components/sections/ContactSection";

export default function Home() {
  const Them = useContext(ThemContext);
  if (!Them) return;
  const { them } = Them;

  return (
    <div id="home" className={`${them} min-h-[130vh] w-full px-5 `}>
      <HeroSection />
      <div>
        <TechIconsSection them={them} />
      </div>
      <hr className="my-10 max-w-[1000px] mx-auto" />
      <ProjectSection />
      <AboutSection them={them} />

      <ContactSection them={them} />
    </div>
  );
}
