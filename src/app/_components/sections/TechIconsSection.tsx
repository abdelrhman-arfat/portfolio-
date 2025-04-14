"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { ThemContext, TThem } from "../context/Context";

gsap.registerPlugin(ScrollTrigger);

const TechIconsSection = ({ them }: { them: TThem }) => {
  const technologies = [
    "js",
    "ts",
    "react",
    "next",
    "redux",
    "tailwind",
    "GSAP",
    "express",
    "mongodb",
    "mysql",
    "java",
    "springboot",
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (containerRef.current && sliderRef.current) {
      // Enhanced animation for the heading
      const headingTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      headingTimeline
        .fromTo(
          "h1",
          {
            opacity: 0,
            y: 30,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          }
        )
        .fromTo(
          "h1",
          {
            textShadow: "0 0 0px rgba(0,0,0,0)",
          },
          {
            textShadow:
              them === "dark"
                ? "0 0 10px rgba(255,255,255,0.3)"
                : "0 0 10px rgba(0,0,0,0.2)",
            duration: 0.5,
            delay: 0.2,
          },
          "<"
        );

      // Initial animation for icons
      const icons = Array.from(sliderRef.current.children) as HTMLElement[];

      gsap.fromTo(
        icons,
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 87%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Auto-scroll animation
      const sliderWidth = sliderRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const duration = 20; // seconds for one complete scroll

      gsap.to(sliderRef.current, {
        x: -(sliderWidth - containerWidth),
        duration: duration,
        ease: "none",
        repeat: -1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 87%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Hover pause effect
      containerRef.current.addEventListener("mouseenter", () => {
        gsap.to(sliderRef.current, { timeScale: 0 });
      });

      containerRef.current.addEventListener("mouseleave", () => {
        gsap.to(sliderRef.current, { timeScale: 1 });
      });
    }
  }, []);

  return (
    <div className="w-full py-12  overflow-hidden">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Tech Stack</h1>

        <div ref={containerRef} className="relative w-full overflow-hidden">
          <div ref={sliderRef} className="flex gap-8 w-max">
            {technologies.map((name, index) => (
              <div
                key={index}
                className={`group flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-xl ${
                  them === "dark"
                    ? "bg-neutral-800 hover:bg-neutral-700"
                    : "bg-neutral-100 hover:bg-neutral-200"
                } transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <Image
                  src={`/${name}.svg`}
                  alt={`${name} icon`}
                  width={50}
                  height={50}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
            {/* Duplicate items for infinite scroll effect */}
            {technologies.map((name, index) => (
              <div
                key={`duplicate-${index}`}
                className={`group flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-xl ${
                  them === "dark"
                    ? "bg-neutral-800 hover:bg-neutral-700"
                    : "bg-neutral-100 hover:bg-neutral-200"
                } transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <Image
                  src={`/${name}.svg`}
                  alt={`${name} icon`}
                  width={50}
                  height={50}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechIconsSection;
