import AboutSection from "./_components/sections/AboutSection";
import ContactSection from "./_components/sections/ContactSection";
import ExperienceSection from "./_components/sections/ExperienceSection";
import HeroSection from "./_components/sections/HeroSection";
import ProjectSection from "./_components/sections/ProjectSection";
import TechIcons from "./_components/sections/TechIcons";

export default function Home() {
  return (
    <div id="home " className="h-full w-full ">
      <HeroSection />
      <ProjectSection />
      <TechIcons />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
