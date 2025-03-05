"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ProjectsCard from "../cards/ProjectsCard";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const ProjectSection = () => {
  const mainRef = useRef<HTMLInputElement>(null);
  useGSAP(() => {
    if (mainRef.current) {
      const children = Array.from(mainRef.current.children) as HTMLElement[];

      gsap.fromTo(
        children,
        { opacity: 0, y: 150, x: 300 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);
  return (
    <div ref={mainRef} className="my-10 md:mt-20 px-10 min-h-[400px] ">
      <h1 className="text-gray-500  text-2xl text-center">Projects</h1>
      <div className="flex items-center scroll overflow-y-hidden gap-10 py-4 overflow-x-scroll">
        <Link href={"https://movie-website-seven-flame.vercel.app"}>
          <ProjectsCard
            desc="Movie Website with api integration for some movies and filtering platforms adn Auth and functionality"
            title="Movie Website"
          />
        </Link>
        <Link href={"https://gaming-website-sepia.vercel.app"}>
          <ProjectsCard
            desc="Gaming website with api integration for some games and filtering with platforms"
            title="Gaming Website"
          />
        </Link>
        <Link href={"https://mwaket.vercel.app"}>
          <ProjectsCard
            title="prayers time"
            desc="Pryers Website with timer for prayer time and api integration"
          />
        </Link>
        <Link href={"https://se-ecommerce-nine.vercel.app"}>
          <ProjectsCard
            desc="E-commerce app with some functions"
            title="E-commerce projects"
          />
        </Link>
        <Link href="https://third-ecommerce.vercel.app">
          <ProjectsCard
            desc="Another E-commerce app with some functions"
            title="E-commerce"
          />
        </Link>
        <Link href="weather-app-rose-one-20.vercel.app">
          <ProjectsCard
            desc="Weather app with chose your town if you form egypt or write you town"
            title="Weather app"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
