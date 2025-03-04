"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import { ThemContext, TThem } from "../context/Context";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);
const TechIconsSection = ({ them }: { them: TThem }) => {
  const namse = [
    "js",
    "ts",
    "react",
    "next",
    "redux",
    "tailwind",
    "bootstrap",
    "GSAP",
  ];
  const mainRef = useRef<HTMLInputElement>(null);
  useGSAP(() => {
    if (mainRef.current) {
      const children = Array.from(mainRef.current.children) as HTMLElement[];
      Draggable.create("#draggable-icon", {
        type: "rotation",
        inertia: true,
      });
      gsap.fromTo(
        children,
        { opacity: 0, y: 100, x: 100 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.2,
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
    <div ref={mainRef} className="w-[90%] mx-auto">
      <h1 className="px-8 text-3xl">Tech Stack:</h1>

      <div className="overflow-x-auto flex gap-14 w-full py-5 px-8">
        {namse.map((name, index) => (
          <div
            id="draggable-icon"
            className={`my-card ${
              them === "dark" ? "bg-neutral-800" : "bg-neutral-200"
            }  p-3 duration-200 min-w-[80px] min-h-[80px] flex items-center justify-center rounded-md`}
            key={index}
          >
            <Image
              src={`/${name}.svg`}
              alt="icon"
              width={50}
              height={50}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechIconsSection;
