"use client";
import ProjectsCard from "../ProjectsCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const ProjectSection = () => {
  const mainRef = useRef<HTMLInputElement>(null);
  useGSAP(() => {
    if (mainRef.current) {
      const children = Array.from(mainRef.current.children) as HTMLElement[];

      gsap.fromTo(
        children,
        { opacity: 0, y: 100, x: 200 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);
  return (
    <div
      ref={mainRef}
      className="w-[90%] xl:w-[80vw] mx-auto my-10 md:mt-20 px-10 min-h-[400px] "
    >
      <h1 className="text-white text-2xl">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        <ProjectsCard
          imgSrc="/pray.jpg"
          link={["https://mwaket.vercel.app"]}
          title="prayers time"
        />
        <ProjectsCard
          imgSrc="/ecommerce1.svg"
          link={[
            "https://third-ecommerce.vercel.app",
            "https://se-ecommerce-nine.vercel.app",
          ]}
          title="E-commerce projects"
        />
        <ProjectsCard
          imgSrc="/weather.jpg"
          link={["https://weather-app-rose-one-20.vercel.app"]}
          title="Weather App"
        />
      </div>

      <div className="flex justify-center"></div>
    </div>
  );
};

export default ProjectSection;
